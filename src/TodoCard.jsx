function TodoCard({ userId, title, completed }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        marginBottom: "5px",
        borderRadius: "5px",
        backgroundColor: completed ? "#d4edda" : "#f8d7da",
      }}
    >
      <h4>{title}</h4>
      <p>User ID: {userId}</p>
      <p>Status: {completed ? "Completed" : "Pending"}</p>
    </div>
  );
}

export default TodoCard;
