import { useState, useEffect } from "react";
import { todosApi } from "@/services/todo";
import type { Todo } from "@/types/todo";
import { useToast } from "./useToast";

export const useTodo = () => {
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState<Todo[]>([]);

    const [editingId, setEditingId] = useState<number | null>(null);
    const [editingText, setEditingText] = useState("");

    const showToast = useToast();

    useEffect(() => {
        todosApi.list().then(setTodos).catch(e => showToast(e.message, "error"))
    }, [])

    const handleNewTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo(event.target.value)
    }

    const addTodo = async () => {
        const title = newTodo.trim();
        if(!title) return;

        try {
            const created = await todosApi.create({title});
            setTodos(prev => [...prev, created]);
            setNewTodo("")
            showToast("Successfully created!")
        } catch (e) {
            showToast((e as Error).message, "error")
        }
    }

    const startEdit = (todo: Todo) => {
        setEditingId(todo.id);
        setEditingText(todo.title);
    };

    const saveEdit = async () => {
        const title = editingText.trim();
        if (editingId === null || !title) return;

        try {
            const update = await todosApi.update(editingId, {title})
            setTodos((prev) => prev.map((t) => (t.id === update.id ? update : t)));
            setEditingId(null);
            showToast("Edited!")
        } catch (e) {
            showToast((e as Error).message, "error");
        }
    };

    const handleEditingTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEditingText(event.target.value)
    }

    const deleteTodo = async (id: number) => {
        try {
            await todosApi.delete(id)
            setTodos((prev) => prev.filter((t) => t.id !== id))
            showToast("Deleted!")
        } catch (e) {
            showToast((e as Error).message, "error");
        }
    }

    return {
        newTodo,
        todos,
        editingId,
        editingText,
        handleNewTodoChange,
        addTodo,
        startEdit,
        saveEdit,
        handleEditingTextChange,
        deleteTodo
    }
}
