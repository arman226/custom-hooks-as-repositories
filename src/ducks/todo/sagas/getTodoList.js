import { takeLatest, put, call } from "redux-saga/effects";
import listOfTodos from "api/services/listOfTodos";

import type { ISaga } from "../types";
import { getAllTodosFailed, getAllTodosSuccess } from "../actionCreators";

export function* getListOfTodos(): ISaga {
  try {
    const { data } = yield call(listOfTodos.getListOfTodos);
    yield put(getAllTodosSuccess(data));
  } catch (e) {
    console.error("GETTING LIST OF TODOS FAILED", e);
    put(getAllTodosFailed());
  }
}

export default function* watcher(): any {
  yield takeLatest("REQUEST_ALL_TODOS", getListOfTodos);
}
