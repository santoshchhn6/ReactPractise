import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleSubmit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );

    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <form className="todo_single" onSubmit={(e) => handleSubmit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          className="todo_single_textbox"
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todo_single--text">{todo.todo}</s>
      ) : (
        <span className="todo_single--text">{todo.todo}</span>
      )}
      <AiFillEdit
        className="icon"
        onClick={() => {
          if (!edit && !todo.isDone) {
            setEdit(!edit);
          }
        }}
      />
      <AiFillDelete className="icon" onClick={() => handleDelete(todo.id)} />
      <MdDone className="icon" onClick={() => handleDone(todo.id)} />
    </form>
  );
};

export default SingleTodo;
