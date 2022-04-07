import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import { deleteItem } from "services";
import { setTodoList } from "store/todo";

function DeleteButtonTodo({ id }) {
  const dispatch = useDispatch();

  const deleteTodoClick = () => {
    console.log(id);
    // eslint-disable-next-line no-restricted-globals
    const result = confirm("Are you sure you want to delete this todo?");
    if (result) {
      deleteItem(id);
      dispatch(setTodoList());
    }
  };

  return (
    <Button onClick={deleteTodoClick}>
      <DeleteIcon />
    </Button>
  );
}

export default DeleteButtonTodo;
