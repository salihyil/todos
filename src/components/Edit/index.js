import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./style.css";
import { Button, Checkbox, Input } from "@mui/material";
import { getItem, updateTextItem, updateItem } from "services";

import { setTodoList } from "store/todo";

function Edit() {
  const dispatch = useDispatch();
  let params = useParams();
  //console.log(params.id); //Uy52uB1wmXGf4EwuUQho

  const [data, setData] = useState({ text: "", completed: false });
  console.log(data);

  async function getItemData() {
    const item = await getItem(params.id);
    //console.log(item);
    setData(item);
  }

  useEffect(() => {
    getItemData();
  }, []);

  const inputChange = (e) => {
    setData({ ...data, text: e.target.value });
    updateTextItem(data.id, { text: e.target.value });
  };

  const toggleTodo = (e) => {
    //console.log(e.target.checked);
    setData({ ...data, completed: e.target.checked });
    updateItem(data.id, { completed: e.target.checked });
    dispatch(setTodoList());
  };

  return (
    <div className="center">
      <div>Güncelle:</div>

      <Checkbox checked={data.completed} onChange={toggleTodo} />

      <Input
        value={data.text}
        onChange={inputChange}
        className={data.completed === true ? "completed" : ""}
      />

      <Button>
        <Link to="/">Ana Sayfa'ya git.</Link>
      </Button>
    </div>
  );
}

export default Edit;
