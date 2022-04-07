import React from "react";
import { useDispatch } from "react-redux";

import { Checkbox } from "@mui/material";
import { updateItem } from "services";
import { setTodoList } from "store/todo";

function CheckboxTodo({ checked, setChecked, id }) {
  const dispatch = useDispatch();

  const toggleTodo = (e) => {
    //console.log(e.target.checked);
    setChecked(e.target.checked);
    updateItem(id, { completed: e.target.checked });
    dispatch(setTodoList());
  };

  return <Checkbox checked={checked} onChange={toggleTodo} />;
}

export default CheckboxTodo;
