import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";

import "./style.css";
import { deleteItem, updateTextItem, updateItem } from "services";
import { setTodoList } from "store/todo";
import {
  List,
  ListItem,
  ListItemAvatar,
  Button,
  Tooltip,
  Input,
  Checkbox,
} from "@mui/material";

function TodoList({ children, ...props }) {
  const dispatch = useDispatch();
  const inputEl = useRef();

  //console.log("props", props);

  const [checked, setChecked] = useState(props.completed);
  const [text, setText] = useState(props.text);

  const textTodoChange = (e) => {
    setText(e.target.value);
  };

  const toggleTodo = (e) => {
    console.log(e.target.checked);

    setChecked(e.target.checked);
    updateItem(props.id, { completed: e.target.checked });
    dispatch(setTodoList());
  };

  /*  const updateTodo = () => {
    updateTextItem(props.id, { text: text });
    dispatch(setTodoList());
  }; */

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
    <>
      {children}
      <List className="todo_list">
        <ListItem>
          <ListItemAvatar>
            <Checkbox checked={checked} onChange={toggleTodo} />
          </ListItemAvatar>

          <input
            value={text}
            className={props.completed === true ? "completed" : ""}
            onChange={textTodoChange}
            ref={inputEl}
          />

          <Button>
            <Link to={`todos/${props.id}`}>Düzenle</Link>
          </Button>

          <Button onClick={deleteTodoClick}>
            <DeleteIcon />
          </Button>
        </ListItem>

        {/*  <Tooltip title="Güncelle">
          <span>
            <Button onClick={updateTodo}>Güncelle</Button>
          </span>
        </Tooltip> */}
      </List>
    </>
  );
}

export default TodoList;
