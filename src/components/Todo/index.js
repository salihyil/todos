import React, { useState } from "react";
import {
  List,
  ListItem,
  Button,
  Checkbox,
  ListItemAvatar,
  Input,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import { deleteItem, updateItem } from "services";
import "./style.css";

import { useDispatch } from "react-redux";
import { setTodoList } from "store/todo";
import UpdateTodo from "components/UpdateTodo";

function Todo(props) {
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(props.completed);
  const [text, setText] = useState(props.text);

  const deleteTodo = () => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm("Are you sure you want to delete this todo?");
    if (result) {
      deleteItem(props.id);
      dispatch(setTodoList());
    }
  };

  const toggleTodo = (e) => {
    console.log(e.target.checked);
    setChecked(e.target.checked);
    updateItem(props.id, { completed: e.target.checked });
    dispatch(setTodoList());
  };

  const textTodo = (e) => {
    console.log("text", text);
    setText(e.target.value);
  };

  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
          <Checkbox checked={checked} onChange={toggleTodo} />
        </ListItemAvatar>
        <Input
          value={text}
          className={props.completed === true ? "completed" : ""}
          onChange={textTodo}
        />
      </ListItem>
      <UpdateTodo text={text} id={props.id} />
      <Button onClick={deleteTodo}>
        <DeleteIcon />
      </Button>
    </List>
  );
}

export default Todo;
