import React from "react";
import { Input } from "@mui/material";

function InputTodo({ text, setText, completed }) {
  const textTodo = (e) => {
    console.log("text", text);
    setText(e.target.value);
  };

  return (
    <Input
      value={text}
      className={completed === true ? "completed" : ""}
      onChange={textTodo}
    />
  );
}

export default InputTodo;
