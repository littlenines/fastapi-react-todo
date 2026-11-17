import { useTodo } from "./hooks/useTodo";
import Card from "./components/Card/Card";

function App() {

  const {
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
  } = useTodo()

  return (
    <>
      <main className="main">
        <Card
          newTodo={newTodo}
          todos={todos}
          editingId={editingId}
          editingText={editingText}
          onNewTodoChange={handleNewTodoChange}
          onAddTodo={addTodo}
          onStartEdit={startEdit}
          onSaveEdit={saveEdit}
          onEditingTextChange={handleEditingTextChange}
          onDeleteTodo={deleteTodo}
        />
      </main>
    </>
  );
}

export default App;
