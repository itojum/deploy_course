import { Table, Th } from 'smarthr-ui';
import type { Todo } from '@/types/todo';
import { TodoItem } from '@/components/TodoItem';
import { NoTodo } from '@/components/NoTodo';

type TodoListProps = {
  todos: Todo[];
}

export const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  if (todos.length === 0) {
    return <NoTodo />;
  }

  return (
    <Table>
      <thead>
        <tr>
          <Th></Th>
          <Th>ステータス</Th>
          <Th>タスク</Th>
          <Th>期限</Th>
          <Th>操作</Th>
      </tr>
      </thead>
      <tbody>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </tbody>
    </Table>
  );
}; 