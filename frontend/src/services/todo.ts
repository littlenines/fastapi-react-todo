import { request } from "./client";
import type { Todo, TodoCreate, TodoUpdate } from "@/types/todo";

export const todosApi = {
    list: () => request<Todo[]>("/todos"),
    create: (data: TodoCreate) => request<Todo>("/todos", {method: "POST", body: JSON.stringify(data)}),
    update: (id: number, data: TodoUpdate) => request<Todo>(`/todos/${id}`, {method: "PATCH", body: JSON.stringify(data)}),
    delete: (id: number) => request<void>(`/todos/${id}`, {method: "DELETE"}) 
}