import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import { Button, Checkbox, Input } from "@mui/material";
import { getItem, updateTextItem } from "services";

import { setTodoList } from "store/todo";

function Edit() {
  const dispatch = useDispatch();
  let params = useParams();
  //console.log(params.id); //Uy52uB1wmXGf4EwuUQho

  const { loading, error } = useSelector((state) => state.todo);
  console.log(loading);

  const [data, setData] = useState({ text: "", completed: false });
  console.log(data);

  async function getItemData() {
    const item = await getItem(params.id);
    //console.log(item);
    setData(item);
  }

  useEffect(() => {
    getItemData();
    dispatch(setTodoList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const inputChange = (e) => {
    setData({ ...data, text: e.target.value });
  };

  const toggleTodo = (e) => {
    console.log(e.target.checked);
    setData({ ...data, completed: e.target.checked });
    /* dispatch(setTodoList()); */
  };

  const updateTodo = () => {
    toast("Todo Güncellendi");
    updateTextItem(data.id, { text: data.text, completed: data.completed });
    /*  dispatch(setTodoList()); */
  };

  return (
    <>
      {loading ? (
        <div className="center">
          <div>Loading...</div>
        </div>
      ) : (
        <>
          <div className="center">
            <div>Güncelle:</div>
            <Checkbox checked={data.completed} onChange={toggleTodo} />
            <Input
              value={data.text}
              onChange={inputChange}
              className={data.completed === true ? "completed" : ""}
            />
            <Button onClick={updateTodo}>Güncelle </Button>
            <Button>
              <Link to="/">Ana Sayfa'ya git.</Link>
            </Button>
          </div>
        </>
      )}
      {error && <div>{error}</div>}
      <ToastContainer />
    </>
  );
}

export default Edit;
