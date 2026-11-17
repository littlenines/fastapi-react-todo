import type { Todo } from "./todo";

export type CardType = {
    newTodo: string;
    todos: Todo[];
    editingId: number | null;
    editingText: string;
    onNewTodoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onAddTodo: () => void;
    onStartEdit: (todo: Todo) => void;
    onSaveEdit: () => void;
    onEditingTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDeleteTodo: (index: number) => void;
}

export type CardHeaderType = {
  newTodo: string;
  onNewTodoChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAddTodo: () => void;
}

export type CardTodoListType = {
    todos: Todo[];
    editingId: number | null;
    editingText: string;
    onStartEdit: (todo: Todo) => void;
    onSaveEdit: () => void;
    onEditingTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onDeleteTodo: (index: number) => void;
}