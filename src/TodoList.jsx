import { useEffect, useState } from "react";
import TodoCard from "./TodoCard";

function TodosList({ onUnmount }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    let isMounted = true;

    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) setTodos(data.slice(0, 15));
      })
      .catch((err) => console.log(err));

    // Cleanup function
    return () => {
      alert("cleanup worked");
      isMounted = false;
    };
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoCard
          key={todo.id}
          userId={todo.userId}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
      <button onClick={onUnmount}>Unmount Todos</button>
    </div>
  );
}

export default TodosList;
