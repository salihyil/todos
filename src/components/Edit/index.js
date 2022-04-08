import React from "react";

import { InputTodo, UpdateButtonTodo } from "components";
import "./style.css";

function Edit() {
  return (
    <div className="center">
      <div>Todo gir:</div>
      <InputTodo text="deneme" />
      <UpdateButtonTodo />
    </div>
  );
}

export default Edit;
