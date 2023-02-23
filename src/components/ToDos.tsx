import React, { Children, ReactNode } from "react";
import ToDo from "../models/todo";

// const ToDos: React.FC<{items: string[]}> = (props) => {
//   return <ul>
//     {props.children}
//   </ul>;
// };

// type ToDosProps = {
//   name: string;
//   message: string;
//   children?: ReactNode;  // question mark means it is optional
// };

const ToDos = ({ id, text, children }: ToDo) => {
  return (
    <div>
      <p>{id}</p>
      <p>{text}</p>
      <p>{children}</p>
    </div>
  );
};

ToDos.defaultProps = {
  name: "Default Name",
  message: "Message",
};

export default ToDos;
