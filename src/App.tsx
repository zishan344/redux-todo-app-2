import { useState } from "react";
import { Button } from "./components/ui/button";
import Todo from "./pages/Todo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Todo />
    </div>
  );
}

export default App;
