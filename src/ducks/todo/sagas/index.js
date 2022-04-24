import { all, fork } from "redux-saga/effects";
import { getListOfTodos } from "./getTodoList";

export default function* () {
  yield all([fork(getListOfTodos)]);
}
