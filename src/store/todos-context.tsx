import React, { ReactNode, useState } from "react";
import ToDo from "../models/todo";

type TodosContextObj = {
  items: ToDo[];
  addTodo: (text: string) => void;
  removeTodo: (text: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (text: string) => {},
});

type contextProps = {
  children?: ReactNode;
};

const TodosContextProvider = ({ children }: contextProps) => {
  const [toDoList, setToDoList] = useState<ToDo[]>([]); // empty array for initial value means typescript thinks "this is always an empty array type". so we include the angle bracket definition

  const addTodoHandler = (todoText: string) => {
    const newTodo: ToDo = {
      text: todoText,
      onRemove: onRemoveToDo,
    };
    setToDoList((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const onRemoveToDo = (todoText: string) => {
    console.log("RAN IN APP");
    setToDoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.text !== todoText);
    });
  };

  const contextValue: TodosContextObj = {
    items: toDoList,
    addTodo: addTodoHandler,
    removeTodo: onRemoveToDo,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
