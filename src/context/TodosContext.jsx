import React from "react";
import { createContext, useContext } from "react";
import { Reducer } from "./Reducer";
function TodosContext() {
  const todosContext = createContext();
  return (
    <todosContext.Provider value={todos}>{children}</todosContext.Provider>
  );
}

export default TodosContext;
