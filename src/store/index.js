import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootsaga";

import { todoReducer } from "store/todo";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
