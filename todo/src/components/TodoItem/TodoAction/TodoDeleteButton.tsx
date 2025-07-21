import { useState } from 'react';
import { useSetAtom } from 'jotai';
import { Button } from 'smarthr-ui';

import type { Todo } from '@/types/todo';
import { deleteTodoAtom } from '@/store/todo';
import { DeleteConfirmModal } from '@/components/Modal/DeleteConfirmModal';

type TodoDeleteButtonProps = {
  todo: Todo;
}

export const TodoDeleteButton: React.FC<TodoDeleteButtonProps> = ({ todo }) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const deleteTodo = useSetAtom(deleteTodoAtom);

  return (
    <>
      <Button size="s" variant="danger" onClick={() => setIsDeleteModalOpen(true)}>
        削除
      </Button>

      {isDeleteModalOpen && (
        <DeleteConfirmModal
          isOpen={isDeleteModalOpen}
          onClose={() => {
            setIsDeleteModalOpen(false);
          }}
          onConfirm={() => deleteTodo(todo.id)}
          todo={todo}
        />
      )}
    </>
  );
};
