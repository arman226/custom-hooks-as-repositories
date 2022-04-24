import type { TodosActions, TodosState } from "./types";

const INITIAL_STATE: TodosState = {
  loading: false,
  error: false,
  data: [],
};

export default (
  state: TodosState = INITIAL_STATE,
  action: TodosActions
): TodosState => {
  switch (action.type) {
    case "REQUEST_ALL_TODOS": {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case "REQUEST_ALL_TODOS_FAILED": {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case "REQUEST_ALL_TODOS_SUCCESS": {
      return {
        data: action.payload,
        loading: false,
        error: false,
      };
    }
    default:
      return state;
  }
};
