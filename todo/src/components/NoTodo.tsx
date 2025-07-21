import { Stack, Text } from 'smarthr-ui';
import styled from 'styled-components';
import { AddTodoButton } from './AddTodoButton/AddTodoButton';

export const NoTodo = () => (
  <NoTodoContainer align="center" gap={1}>
    <Text>タスクはまだありません。</Text>
    <AddTodoButton variant="secondary" />
  </NoTodoContainer>
);

const NoTodoContainer = styled(Stack)`  
  padding: 64px;
`;
