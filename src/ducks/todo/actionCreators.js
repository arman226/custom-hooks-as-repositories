import { TodosActions } from "./types";
import type Todo from "hooks/Entities/Todo";

export const getAllTodos = (): TodosActions => ({
  type: "REQUEST_ALL_TODOS",
});

export const getAllTodosFailed = (): TodosActions => ({
  type: "REQUEST_ALL_TODOS_FAILED",
});

export const getAllTodosSuccess = (payload: Array<Todo>): TodosActions => ({
  type: "REQUEST_ALL_TODOS_SUCCESS",
  payload,
});
