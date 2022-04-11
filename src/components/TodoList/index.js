import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import "./style.css";
import { deleteItem, updateTextItem, updateItem } from "services";
import { setTodoList, updateButtonChanged } from "store/todo";
import {
  List,
  ListItem,
  ListItemAvatar,
  Button,
  Tooltip,
  Input,
  Checkbox,
} from "@mui/material";

function TodoList(props) {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(props.completed);
  const [text, setText] = useState(props.text);

  /* const [item, setItem] = useState(props);
  console.log(item); */
  console.log(props);

  const textTodoChange = (e) => {
    setText(e.target.value);
    dispatch(updateButtonChanged(false));
  };

  const toggleTodo = (e) => {
    //console.log(e.target.checked);
    setChecked(e.target.checked);
    updateItem(props.id, { completed: e.target.checked });
    dispatch(setTodoList());
  };

  const updateTodo = () => {
    updateTextItem(props.id, { text: text });
    dispatch(setTodoList());
    dispatch(updateButtonChanged(true));
  };

  const deleteTodoClick = () => {
    // eslint-disable-next-line no-restricted-globals
    const result = confirm(
      `Are you sure you want to delete this todo -> ${props.text}?`
    );
    if (result) {
      deleteItem(props.id);
      dispatch(setTodoList());
    }
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
          onChange={textTodoChange}
        />

        <Link to={`edit/${props.text}`}>Düzenle</Link>
      </ListItem>

      <Tooltip title="Güncelle">
        <span>
          <Button onClick={updateTodo}>Güncelle</Button>
        </span>
      </Tooltip>

      <Button onClick={deleteTodoClick}>
        <DeleteIcon />
      </Button>
    </List>
  );
}

export default TodoList;
