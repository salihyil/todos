import { put, takeEvery, call } from "redux-saga/effects";

import { setTodoListSuccess, setTodoListError } from "./slice";
import { getList } from "services";

//saga generator fonksiyon
function* fetchTodo() {
  try {
    const data = yield call(getList);

    yield put(setTodoListSuccess(data));
  } catch (error) {
    yield put(setTodoListError(error.message));
  }
}

//rootSaga
export function* todoSaga() {
  yield takeEvery("todo/setTodoList", fetchTodo); //actionType sonra saga fonksiyon
}
