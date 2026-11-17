import type { CardHeaderType } from '@/types/card';
import styles from './CardHeader.module.css';

const CardHeader = ({ newTodo, onNewTodoChange, onAddTodo }: CardHeaderType) => {
  return (
    <>
      <h1 className={styles.card_title}>TODO</h1>
      <div className={styles.card_action}>
        <input type="text" value={newTodo} onChange={onNewTodoChange} />
        <button type="button" onClick={onAddTodo}>Add</button>
      </div>
    </>
  );
};

export default CardHeader;
