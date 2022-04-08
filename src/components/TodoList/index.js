import React, { useState } from "react";
import { List, ListItem, ListItemAvatar } from "@mui/material";

import "./style.css";

import {
  UpdateButtonTodo,
  CheckboxTodo,
  DeleteButtonTodo,
  InputTodo,
} from "components";
import { Link } from "react-router-dom";

function TodoList(props) {
  const [checked, setChecked] = useState(props.completed);
  const [text, setText] = useState(props.text);

  return (
    <List className="todo_list">
      <ListItem>
        <ListItemAvatar>
          <CheckboxTodo
            checked={checked}
            setChecked={setChecked}
            id={props.id}
          />
        </ListItemAvatar>

        <InputTodo text={text} setText={setText} completed={props.completed} />

        <Link to={`/edit`}>Düzenle</Link>
      </ListItem>
      <UpdateButtonTodo id={props.id} text={text} />
      <DeleteButtonTodo id={props.id} text={text} />
    </List>
  );
}

export default TodoList;
