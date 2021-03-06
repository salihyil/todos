import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ToastContainer } from "react-toastify";
import { TodoList } from "components";
import { setTodoList } from "store/todo";
import { addItem } from "./services";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todo);

  const [input, setInput] = useState("");

  useEffect(() => {
    dispatch(setTodoList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addTodo = (e) => {
    e.preventDefault();
    addItem(input);
    setInput("");
    dispatch(setTodoList());
  };

  return (
    <div className="App">
      <header>
        <form>
          <FormControl>
            <InputLabel> ✅ Add Todo</InputLabel>
            <Input
              type="text"
              placeholder="Add todos"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={!input}
            onClick={addTodo}
          >
            Add
          </Button>
        </form>

        {error && <p>{error}</p>}

        {loading ? (
          <p>Loading...</p>
        ) : (
          todos.map((item, i) => (
            <TodoList key={i} {...item}>
              {/*  <div>children</div> */}
            </TodoList>
          ))
        )}
      </header>
      <ToastContainer />
    </div>
  );
}

export default App;
