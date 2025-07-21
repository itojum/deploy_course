export type Todo = {
  id: number;
  text: string;
  completed: boolean;
  dueDate?: Date; // 期限（オプショナル）
}

export type TodoStatus = 'all' | 'active' | 'completed'; 