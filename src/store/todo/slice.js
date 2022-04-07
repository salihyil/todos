import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading: false,
  error: null,
  disabledButton: true,
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
    updateButtonChanged: (state, action) => {
      state.disabledButton = action.payload;
    },
  },
});

export const {
  setTodoList,
  setTodoListSuccess,
  setTodoListError,
  updateButtonChanged,
} = todoSlice.actions;
export default todoSlice.reducer;
