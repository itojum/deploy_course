import { useState, useMemo } from 'react';
import { Heading, Cluster, Base } from 'smarthr-ui';
import { useAtomValue } from 'jotai';

import type { TodoStatus } from './types/todo';
import { TodoList } from './components/TodoList';
import { TodoFilter } from './components/TodoFilter';
import { todoAtom } from './store/todo';
import { AddTodoButton } from './components/AddTodoButton/AddTodoButton';
import { Layout } from './Layout';

export const App = () => {
  const todos = useAtomValue(todoAtom);
  const [filter, setFilter] = useState<TodoStatus>('all');

  // フィルタリング済みのTodoリスト
  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  // カウント計算
  const activeTodoCount = todos.filter(todo => !todo.completed).length;

  return (
    <Layout>
      <Cluster justify="space-between">
        <Heading type="screenTitle">Todoリスト</Heading>
        <AddTodoButton />
      </Cluster>

      <Base>
        {/* フィルター（タスク一覧の上部に配置） */}
        {todos.length > 0 && (
          <TodoFilter
            currentFilter={filter}
            onFilterChange={setFilter}
            activeTodoCount={activeTodoCount}
          />
        )}

        {/* タスク一覧 */}
        <TodoList todos={filteredTodos} />
      </Base>
    </Layout>
  );
};
