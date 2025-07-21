import { Button } from 'smarthr-ui';
import { useState } from 'react';
import { useSetAtom } from 'jotai';

import { EditTodoModal } from '@/components/Modal/EditTodoModal';
import { editTodoAtom } from '@/store/todo';
import type { Todo } from '@/types/todo';

type TodoEditButtonProps = {
  todo: Todo;
}

export const TodoEditButton: React.FC<TodoEditButtonProps> = ({ todo }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const editTodo = useSetAtom(editTodoAtom);

  return (
  <>
    <Button size="s" onClick={() => setIsEditModalOpen(true)}>
      編集
    </Button>
    {isEditModalOpen && (
      <EditTodoModal
        isOpen={isEditModalOpen}
        onClose={() => {
          setIsEditModalOpen(false);
        }}
        onEdit={editTodo}
        todo={todo}
      />
    )}
  </>
);
};
