import { useState } from "react";
import "./App.css";
import CustomInput from "./components/CustomInput";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>(" ");
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <div className="App">
      <h1>Task</h1>
      <CustomInput todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
