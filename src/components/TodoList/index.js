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
  Checkbox,
} from "@mui/material";
import { toast } from "react-toastify";

function TodoList({ children, ...props }) {
  const dispatch = useDispatch();
  const inputEl = useRef();

  //console.log("props", props);

  const [checked, setChecked] = useState(props.completed);
  const [text, setText] = useState(props.text);

  const textTodoChange = (e) => {
    setText(e.target.value);

    if (inputEl.current.value.length > text.length) {
      inputEl.current.style.color = "red";
    } else {
      inputEl.current.style.color = "black";
    }

    updateTextItem(props.id, { text: e.target.value });
  };

  const toggleTodo = (e) => {
    console.log(e.target.checked);

    setChecked(e.target.checked);
    updateItem(props.id, { completed: e.target.checked });
    dispatch(setTodoList());
    if (!e.target.checked) {
      toast.info(`" ${props.text}" yapılmadı olarak güncellendi.`, {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      toast.info(`" ${props.text}" yapıldı olarak güncellendi.`, {
        position: "top-right",
        autoClose: 3000,
      });
    }
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
            <Link to={`edit/${props.id}`}>Düzenle</Link>
          </Button>

          <Button onClick={deleteTodoClick}>
            <DeleteIcon />
          </Button>
        </ListItem>
      </List>
    </>
  );
}

export default TodoList;
