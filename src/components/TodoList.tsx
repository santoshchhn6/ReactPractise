import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => (
  <div className="todos">
    {todos.map((t) => (
      <SingleTodo key={t.id} todo={t} todos={todos} setTodos={setTodos} />
    ))}
  </div>
);

export default TodoList;
