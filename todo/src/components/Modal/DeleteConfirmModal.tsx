import { Text } from 'smarthr-ui';
import type { Todo } from '@/types/todo';
import { Dialog } from '@/components/Dialog';

type DeleteConfirmModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  todo: Todo | null;
}

export const DeleteConfirmModal: React.FC<DeleteConfirmModalProps> = ({ 
  isOpen, 
  onClose, 
  onConfirm, 
  todo 
}) => {
  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} onClose={onClose} onConfirm={handleConfirm} title="タスクを削除" actionText="削除" actionTheme="danger">
      <div style={{ padding: '1rem 0' }}>
        <Text>以下のタスクを削除してもよろしいですか？</Text>
        <div style={{ 
          margin: '1rem 0', 
          padding: '0.5rem', 
          backgroundColor: '#f8f9fa', 
          borderRadius: '4px' 
        }}>
          <Text weight="bold">{todo?.text}</Text>
        </div>
      </div>
    </Dialog>
  );
}; 