import { atom } from 'jotai';

import type { Todo } from '@/types/todo';

export const todoAtom = atom<Todo[]>([]);

export const addTodoAtom = atom(null, (get, set, todo: Todo) => {
  set(todoAtom, [...get(todoAtom), todo]);
});

export const deleteTodoAtom = atom(null, (get, set, id: number) => {
  set(todoAtom, get(todoAtom).filter((todo) => todo.id !== id));
});

export const editTodoAtom = atom(null, (get, set, todo: Todo) => {
  set(todoAtom, get(todoAtom).map((t) => (t.id === todo.id ? todo : t)));
});

export const toggleTodoAtom = atom(null, (get, set, id: number) => {
  set(todoAtom, get(todoAtom).map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
});
