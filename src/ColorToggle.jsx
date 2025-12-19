import { useState } from "react";

export default function ColorToggle() {
  const [color, setColor] = useState("red");

  const handleToggle = () => {
    // toggle between red and blue
    setColor(prevColor => (prevColor === "red" ? "blue" : "red"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <div
        style={{
          width: "200px",
          height: "100px",
          backgroundColor: color,
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: "bold",
          marginBottom: "10px",
        }}
      >
        This is a colored div
      </div>
      <button onClick={handleToggle}>Toggle Color</button>
    </div>
  );
}
