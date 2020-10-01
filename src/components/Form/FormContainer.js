import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import FormPresenter from "./FormPresenter";
import { todoNewTodo } from "../../actions/Todo/TodoActions";

const FormContainer = () => {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.TodoReducer.todos);
  const dispatch = useDispatch();

  const handleText = (event) => {
    setText(event.target.value);
  };

  const confirmButtonClicked = () => {
    // 여기서 나중에 action 호출
    const id = todos.length;
    dispatch(todoNewTodo(id, text));
  };

  return (
    <FormPresenter
      confirmButtonClicked={confirmButtonClicked}
      handleText={handleText}
      text={text}
    />
  );
};

export default FormContainer;
