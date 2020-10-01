import { TODO_NEW_TODO } from "../actions/Todo/TodoActionTypes";

const initialState = {
  todos: [],
};

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_NEW_TODO:
      return newTodo(state, action);
    default:
      return state;
  }
};

const newTodo = (state, action) => {
  const todo = action.payload;
  const newtodos = state.todos;
  newtodos.push(todo);

  return {
    ...state,
    todos: newtodos,
  };
};

export default TodoReducer;
