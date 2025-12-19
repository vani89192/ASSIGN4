import { useState } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

function StatusToggle() {
  const [status, setStatus] = useState(false); // default false

  const handleToggle = () => {
    setStatus(!status); // toggle status
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Status</button>
      {/* Conditional Rendering */}
      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
}

export default StatusToggle;
