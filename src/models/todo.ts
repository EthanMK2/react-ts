import { ReactNode } from "react";

// class ToDo {
//   id?: string;
//   text: string;
//   children?: ReactNode;

//   constructor(textProp: string) {
//     this.text = textProp;
//     this.id = new Date().toISOString();
//   }
// }

type ToDo = {
  // just can't initialize with this declaration
  id?: string;
  text: string;
  children?: ReactNode;
};

export default ToDo;
