import { useState } from "react";
import StatusToggle from "./StatusToggle";
import ColorToggle from "./ColorToggle";
import TodosList from "./TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  const handleUnmount = () => {
    setShowTodos(false);
  };

  return (
    <div>
      <h1>React Assignments</h1>

      {/* Question 1: Status Toggle */}
      <h2>Question 1: Status Toggle</h2>
      <StatusToggle />

      {/* Question 2: Color Toggle */}
      <h2>Question 2: Color Toggle</h2>
      <ColorToggle />

      {/* Question 3: Todo List */}
      <h2>Question 3: Todo List</h2>
      {showTodos && <TodosList onUnmount={handleUnmount} />}
      {!showTodos && <p>Todos have been unmounted!</p>}
    </div>
  );
}

export default App;
