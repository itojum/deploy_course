import { useState, useEffect } from 'react';
import { Input, Stack } from 'smarthr-ui';

import type { Todo } from '@/types/todo';
import { Dialog } from '@/components/Dialog';

type EditTodoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onEdit: (todo: Todo) => void;
  todo: Todo | null;
}

export const EditTodoModal: React.FC<EditTodoModalProps> = ({ isOpen, onClose, onEdit, todo }) => {
  const [text, setText] = useState('');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (todo) {
      setText(todo.text);
      setDueDate(todo.dueDate ? todo.dueDate.toISOString().split('T')[0] : '');
    }
  }, [todo]);

  const handleSubmit = () => {
    if (todo && text.trim()) {
      const parsedDueDate = dueDate ? new Date(dueDate) : undefined;
      onEdit({ ...todo, text: text.trim(), dueDate: parsedDueDate });
      onClose();
    }
  };

  const handleClose = () => {
    setText('');
    setDueDate('');
    onClose();
  };

  return (
    <Dialog isOpen={isOpen} onClose={handleClose} onConfirm={handleSubmit} title="タスクを編集" actionText="保存">
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