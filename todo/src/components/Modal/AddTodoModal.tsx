import { useState } from 'react';
import { Input, Stack } from 'smarthr-ui';
import { Dialog } from '@/components/Dialog';
import type { Todo } from '@/types/todo';

type AddTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onAdd: (todo: Todo) => void;
}

export const AddTodoModal: React.FC<AddTodoModalProps> = ({ isOpen, onClose, onAdd }) => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = () => {
    if (text.trim()) {
      const parsedDueDate = dueDate ? new Date(dueDate) : undefined;
      onAdd({
        id: Date.now(),
        text: text.trim(),
        dueDate: parsedDueDate,
        completed: false,
      });
      setText('');
      setDueDate('');
      onClose();
    }
  };

  const handleClose = () => {
    setText('');
    setDueDate('');
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose} onConfirm={handleSubmit} title="新しいタスクを追加" actionText="追加">
      <form onSubmit={handleSubmit}>
        <Stack gap={1.5}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              タスク内容
            </label>
            <Input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              width="100%"
              autoFocus
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>
              期限（任意）
            </label>
            <Input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              width="100%"
            />
          </div>
        </Stack>
      </form>
    </Dialog>
  );
}; 