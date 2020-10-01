import React, { useEffect, useState } from "react";

import FormContainer from "./components/Form/FormContainer";
import TodoListComponent from "./components/TodoListComponent";
import { useSelector } from "react-redux";

function App() {
  return (
    <div className="App">
      <FormContainer />
      <TodoListComponent />
    </div>
  );
}

export default App;
