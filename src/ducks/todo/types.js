import { Todo } from "hooks/Entities/Todo";

export type ISaga = Generator<any, any, any>;

export type TodosState = {
  loading: Boolean,
  error: Boolean,
  data: Array<Todo>,
};

export type TodosActions =
  | { type: "REQUEST_ALL_TODOS" }
  | { type: "REQUEST_ALL_TODOS_SUCCESS", payload: Array<Todo> }
  | {
      type: "REQUEST_ALL_TODOS_FAILED",
    };
