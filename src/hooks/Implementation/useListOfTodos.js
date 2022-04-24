import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodos } from "ducks/todo/actionCreators";
import { IUseListOfTodos } from "../Interfaces/IUseListOfTodos";

const useListOfTodos = (): IUseListOfTodos => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.todoReducer);

  const dispatchListOfTodos = (): void => {
    dispatch(getAllTodos());
  };

  const getListOfTodos = (): void => async (): void => {
    dispatchListOfTodos();
  };

  useEffect(getListOfTodos, []);

  return {
    data,
    loading,
    error,
    dispatchListOfTodos,
  };
};

export default useListOfTodos;
