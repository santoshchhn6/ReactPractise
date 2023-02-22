import React from "react";
import "./CustomInput.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const CustomInput = ({ todo, setTodo }: Props) => {
  return (
    <form className="custom_input">
      <input type="text" placeholder="Enter the task" />
      <button className="input_submit">Go</button>
    </form>
  );
};

export default CustomInput;
