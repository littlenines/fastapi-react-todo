import type { CardTodoListType } from "@/types/card";
import styles from "./CardTodoList.module.css"

const CardTodoList = ({ todos, editingId, editingText, onStartEdit, onSaveEdit, onEditingTextChange, onDeleteTodo }: CardTodoListType) => {
    return (
        <ul className={styles.card_items}>
            {todos.map((todo) => {
                const isEditing = editingId === todo.id;
                return (
                    <li className={styles.card_item} key={todo.id}>
                        {isEditing ? <input type="text" value={editingText} onChange={onEditingTextChange} /> : <p>{todo.title}</p>}
                        <div className={styles.card_item_actions}>
                            <button onClick={() => (isEditing ? onSaveEdit() : onStartEdit(todo))}>{isEditing ? 'Save' : 'Edit'}</button>
                            <button className={styles.card_item_actions_delete} onClick={() => onDeleteTodo(todo.id)}>Delete</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}

export default CardTodoList
