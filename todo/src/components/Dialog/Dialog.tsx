import { ActionDialog } from 'smarthr-ui';

type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  actionText: string;
  actionTheme?: 'primary' | 'secondary' | 'danger';
  children: React.ReactNode;
}

export const Dialog: React.FC<DialogProps> = ({ isOpen, onClose, onConfirm, title, actionText, actionTheme = 'primary', children }) => {
  return (
    <ActionDialog
      isOpen={isOpen}
      title={title}
      actionText={actionText}
      onClickAction={onConfirm}
      onClickClose={onClose}
      actionTheme={actionTheme}
      size="L"
    >
      {children}
    </ActionDialog>
  );
};

