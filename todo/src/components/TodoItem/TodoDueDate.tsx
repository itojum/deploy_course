import { Text } from 'smarthr-ui';

type TodoDueDateProps = {
  dueDate: Date | undefined;
}

export const TodoDueDate: React.FC<TodoDueDateProps> = ({ dueDate }) => (
  <>
    {dueDate && (
      <Text size="S">
        {formatDate(dueDate)}
      </Text>
    )}
  </>
)

const formatDate = (date: Date) => {
  return date.toLocaleDateString('ja-JP');
};
