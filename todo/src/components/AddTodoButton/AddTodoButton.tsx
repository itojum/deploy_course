import { useState } from 'react';
import { Button, FaCirclePlusIcon } from 'smarthr-ui';
import { useSetAtom } from 'jotai';

import { AddTodoModal } from '@/components/Modal/AddTodoModal';
import { addTodoAtom } from '@/store/todo';

type AddTodoButtonProps = {
  variant?: 'primary' | 'secondary';
}

export const AddTodoButton: React.FC<AddTodoButtonProps> = ({ variant = 'primary' }) => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const addTodo = useSetAtom(addTodoAtom);

  return (
    <>
      <Button variant={variant} onClick={() => setIsAddModalOpen(true)} prefix={<FaCirclePlusIcon />}>
        タスクを追加
      </Button>

      {isAddModalOpen && (
        <AddTodoModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAdd={addTodo}
        />
      )}
    </>
  );
};
