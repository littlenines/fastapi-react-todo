import CardHeader from "../CardHeader/CardHeader";
import CardTodoList from "../CardTodoList/CardTodoList";
import type { CardType } from "@/types/card";
import styles from "./Card.module.css"

const Card = ({ newTodo, todos, editingId, editingText, onNewTodoChange, onAddTodo, onStartEdit, onSaveEdit, onEditingTextChange, onDeleteTodo }: CardType) => {
    return (
        <div className={styles.card}>
            <CardHeader newTodo={newTodo} onNewTodoChange={onNewTodoChange} onAddTodo={onAddTodo} />

            {todos.length > 0 && <CardTodoList todos={todos} editingId={editingId} editingText={editingText} onStartEdit={onStartEdit} onSaveEdit={onSaveEdit} onEditingTextChange={onEditingTextChange} onDeleteTodo={onDeleteTodo} />}
        </div>
    )
}

export default Card
