import React, { Children, ReactNode, useContext } from "react";
import ToDoItem from "./ToDoItem";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css"

// const ToDos: React.FC<{items: string[]}> = (props) => {
//   return <ul>
//     {props.children}
//   </ul>;
// };

const ToDos = () => {
  const todosCtx = useContext(TodosContext)

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => {
        return <ToDoItem key={item.id} text={item.text} onRemove={item.onRemove} />;
      })}
    </ul>
  );
};

export default ToDos;
