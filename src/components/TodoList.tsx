import React from "react";
import { Todo } from "../model";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => (
  <div className="todos">
    {todos.map((t) => (
      <li>{t.todo}</li>
    ))}
  </div>
);

export default TodoList;