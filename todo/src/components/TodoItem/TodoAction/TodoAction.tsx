import { Cluster } from 'smarthr-ui';

import type { Todo } from '@/types/todo';
import { TodoEditButton } from './TodoEditButton';
import { TodoDeleteButton } from './TodoDeleteButton';

type TodoActionProps = {
  todo: Todo;
}

export const TodoAction: React.FC<TodoActionProps> = ({ todo }) => (
  <Cluster gap={1}>
      <TodoEditButton todo={todo} />
      <TodoDeleteButton todo={todo} />
  </Cluster>
);
