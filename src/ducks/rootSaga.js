import { all } from "redux-saga/effects";
import todoListSagas from "ducks/todo/sagas";

const rootSagas = [todoListSagas()];

export default function* rootSaga() {
  yield all(rootSagas);
}
