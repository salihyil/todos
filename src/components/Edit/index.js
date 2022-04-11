import React from "react";
import { useParams } from "react-router-dom";

import { InputTodo, UpdateButtonTodo } from "components";
import "./style.css";
import { useState } from "react";
import { getText } from "services";

function Edit() {
  let params = useParams();
  /* console.log(params); // {value: 'todo1'} */

  const [inputText, setInputText] = useState("value");
  const data = getText();
  console.log(data);

  return (
    <div className="center">
      {/*    <div>Todo gir:</div>
      <Input
          value={props.text}
          className={props.completed === true ? "completed" : ""}
          onChange={textTodoChange}
        />
      <Tooltip title="Güncelle">
        <span>
          <Button onClick={updateTodo} disabled={disabledButton}>
            Güncelle
          </Button>
        </span>
      </Tooltip> */}
    </div>
  );
}

export default Edit;
