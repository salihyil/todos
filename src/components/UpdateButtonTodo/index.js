import React from "react";

import { Button, Tooltip } from "@mui/material";
import { updateTextItem } from "services";
import { useDispatch, useSelector } from "react-redux";
import { setTodoList } from "store/todo";
import { updateButtonChanged } from "store/todo";

function UpdateButtonTodo(props) {
  const dispatch = useDispatch();
  const { disabledButton } = useSelector((state) => state.todo);
  /*  console.log(disabledButton); */

  const updateTodo = () => {
    updateTextItem(props.id, { text: props.text });
    dispatch(setTodoList());
    dispatch(updateButtonChanged(true));
  };

  return (
    <Tooltip title="Güncelle">
      <span>
        <Button onClick={updateTodo} disabled={disabledButton}>
          Güncelle
        </Button>
      </span>
    </Tooltip>
  );
}

export default UpdateButtonTodo;
