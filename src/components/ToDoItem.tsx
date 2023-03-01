import { useContext, useState } from "react";
import ToDo from "../models/todo";
import { TodosContext } from "../store/todos-context";
import classes from "./ToDoItem.module.css";

// type toDoItemProps = {
//     toDo: ToDo
// }

const TodoItem = (props: ToDo) => {
    const todosCtx = useContext(TodosContext);

  const onRemoveToDo = () => {
    console.log("RAN");
    todosCtx.removeTodo(props.text);
  };

  return (
    <li className={classes.item} onClick={onRemoveToDo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
