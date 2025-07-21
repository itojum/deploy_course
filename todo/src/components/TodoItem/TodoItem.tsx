import { Td } from 'smarthr-ui';

import type { Todo } from '@/types/todo';
import { TodoCheckBox } from './TodoCheckBox';
import { TodoStatusLabel } from './TodoStatusLabel';
import { TodoText } from './TodoText';
import { TodoDueDate } from './TodoDueDate';
import { TodoAction } from './TodoAction';

type TodoItemProps = {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <tr>
      <TodoCheckBox todo={todo} />

      <Td>
        <TodoStatusLabel completed={todo.completed} />
      </Td>

      <Td>
        <TodoText text={todo.text} completed={todo.completed} />
      </Td>

      <Td>
        <TodoDueDate dueDate={todo.dueDate} />
      </Td>

      <Td>
        <TodoAction todo={todo} />
      </Td>
    </tr>
  );
}; 