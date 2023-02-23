import React from "react";
import "./CustomInput.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd(e: React.FormEvent): void;
}

const CustomInput = ({ todo, setTodo, handleAdd }: Props) => {
  return (
    <form className="custom_input" onSubmit={handleAdd}>
      <input type="text" placeholder="Enter the task" />
      <button className="input_submit">Go</button>
    </form>
  );
};

export default CustomInput;
