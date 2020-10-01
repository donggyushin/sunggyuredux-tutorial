import React from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoListComponent = () => {
  const todoReducer = useSelector((state) => state.TodoReducer);

  return (
    <div>
      {todoReducer.todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoListComponent;
