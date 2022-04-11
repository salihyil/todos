import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodoList: (state, action) => {
      state.loading = true;
    },
    setTodoListSuccess: (state, action) => {
      state.loading = false;
      //console.log(action.payload);
      state.todos = action.payload;
    },
    setTodoListError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.todos = [];
    },
  },
});

export const { setTodoList, setTodoListSuccess, setTodoListError } =
  todoSlice.actions;
export default todoSlice.reducer;
