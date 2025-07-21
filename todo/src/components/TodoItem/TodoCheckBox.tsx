import { TdCheckbox } from 'smarthr-ui';
import { useSetAtom } from 'jotai';

import type { Todo } from '@/types/todo';
import { toggleTodoAtom } from '@/store/todo';

type TodoCheckBoxProps = {
  todo: Todo;
}

export const TodoCheckBox: React.FC<TodoCheckBoxProps> = ({ todo }) => {
  const toggleTodo = useSetAtom(toggleTodoAtom);

  return (
    <TdCheckbox 
      aria-labelledby={todo.id.toString()} 
      checked={todo.completed} 
      onChange={() => toggleTodo(todo.id)}
    />
  );
};
