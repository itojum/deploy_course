import { Button, Cluster, Text } from 'smarthr-ui';
import styled from 'styled-components';

import type { TodoStatus } from '@/types/todo';

type TodoFilterProps = {
  currentFilter: TodoStatus;
  onFilterChange: (filter: TodoStatus) => void;
  activeTodoCount: number;
}

export const TodoFilter: React.FC<TodoFilterProps> = ({
  currentFilter,
  onFilterChange,
  activeTodoCount,
}) => {
  return (
    <FilterCluster gap={1} justify="space-between" align="center">
      <Text size="S" color="TEXT_GREY">
        残り: {activeTodoCount}件
      </Text>
      
      <Cluster gap={1}>
        <Button
          variant={currentFilter === 'all' ? 'primary' : 'secondary'}
          size="s"
          onClick={() => onFilterChange('all')}
        >
          すべて
        </Button>
        <Button
          variant={currentFilter === 'active' ? 'primary' : 'secondary'}
          size="s"
          onClick={() => onFilterChange('active')}
        >
          未完了
        </Button>
        <Button
          variant={currentFilter === 'completed' ? 'primary' : 'secondary'}
          size="s"
          onClick={() => onFilterChange('completed')}
        >
          完了済み
        </Button>
      </Cluster>
    </FilterCluster>
  );
};

const FilterCluster = styled(Cluster)`
  padding: 1rem;
`;
