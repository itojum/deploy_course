import { Text } from 'smarthr-ui';

type TodoTextProps = {
  text: string;
  completed: boolean;
}

export const TodoText: React.FC<TodoTextProps> = ({ text, completed }) => {
  return <Text style={{ textDecoration: completed ? 'line-through' : 'none' }}>{text}</Text>;
};
