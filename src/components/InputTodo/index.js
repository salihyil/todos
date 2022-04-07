import React from "react";
import { useDispatch } from "react-redux";
import { updateButtonChanged } from "store/todo";

import { Input } from "@mui/material";

function InputTodo({ text, setText, completed }) {
  const dispatch = useDispatch();

  const textTodoChange = (e) => {
    setText(e.target.value);
    dispatch(updateButtonChanged(false));
  };

  return (
    <Input
      value={text}
      className={completed === true ? "completed" : ""}
      onChange={textTodoChange}
    />
  );
}

export default InputTodo;
