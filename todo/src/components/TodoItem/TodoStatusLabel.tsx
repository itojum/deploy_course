import { StatusLabel } from 'smarthr-ui';

type TodoStatusLabelProps = {
  completed: boolean;
}

export const TodoStatusLabel: React.FC<TodoStatusLabelProps> = ({ completed }) => {
  return <StatusLabel type={completed ? 'blue' : 'grey'}>{completed ? '完了' : '未完了'}</StatusLabel>;
};
