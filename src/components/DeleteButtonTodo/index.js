import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { deleteItem } from "services";
import { setTodoList } from "store/todo";

function DeleteButtonTodo() {
  const dispatch = useDispatch();

  const deleteTodo = ({ id }) => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm("Are you sure you want to delete this todo?");
    if (result) {
      deleteItem(id);
      dispatch(setTodoList());
    }
  };
  return (
    <Button onClick={deleteTodo}>
      <DeleteIcon />
    </Button>
  );
}

export default DeleteButtonTodo;
