import { ReactNode } from "react";

class ToDo {
  id?: string;
  text: string;
  children?: ReactNode;

  constructor(textProp: string) {
    this.text = textProp;
    this.id = new Date().toISOString();
  }
}

type ToDos = {
  // just can't initialize with this declaration
  id: string;
  text: string;
};

export default ToDo;
