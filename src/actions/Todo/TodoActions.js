import { TODO_NEW_TODO } from "./TodoActionTypes";

export const todoNewTodo = (id, text) => (dispatch) => {
  const todo = { id, text };
  return dispatch({
    type: TODO_NEW_TODO,
    payload: todo,
  });
};
