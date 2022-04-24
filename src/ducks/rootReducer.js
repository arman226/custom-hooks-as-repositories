import { combineReducers } from "redux";
import todoReducer from "ducks/todo/reducer";

const rootReducers: Object = { todoReducer };

export default combineReducers(rootReducers);
