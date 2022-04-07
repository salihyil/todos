import React, { useState } from "react";
import { List, ListItem, ListItemAvatar } from "@mui/material";

import "./style.css";

import {
  UpdateButtonTodo,
  CheckboxTodo,
  DeleteButtonTodo,
  InputTodo,
} from "components";

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
      </ListItem>
      <UpdateButtonTodo text={text} id={props.id} />
      <DeleteButtonTodo id={props.id} />
    </List>
  );
}

export default TodoList;
