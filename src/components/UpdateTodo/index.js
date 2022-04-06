import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import { updateTextItem } from "services";
import { useDispatch } from "react-redux";
import { setTodoList } from "store/todo";

function UpdateTodo(props) {
  const dispatch = useDispatch();

  const updateTodo = () => {
    updateTextItem(props.id, { text: props.text });
    dispatch(setTodoList());
  };

  return (
    <Button onClick={updateTodo}>
      <EditIcon />
    </Button>
  );
}

export default UpdateTodo;
