import React, { Children, ReactNode } from "react";
import ToDo from "../models/todo";
import ToDoItem from "./ToDoItem";

// const ToDos: React.FC<{items: string[]}> = (props) => {
//   return <ul>
//     {props.children}
//   </ul>;
// };

type TodoProps = {
  items: ToDo[]
}

const ToDos = ({items}: TodoProps) => {
  return (
    <ul>
      {items.map((item) => {
        return <ToDoItem key={item.id} text={item.text} />;
      })}
    </ul>
  );
};

export default ToDos;
