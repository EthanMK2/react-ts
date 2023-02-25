import { useRef } from "react";
import classes from './NewTodo.module.css';

// We're saying to typescript: "this prop will be a function that takes an argument of type string, and returns a value of void in this component."
type NewTodoProps = {
  onAddTodo: (enteredText: string) => void;
};

const NewTodo = ({ onAddTodo }: NewTodoProps) => {
  const textInputRef = useRef<HTMLInputElement>(null); // need null for initial value
  // HTML........ is for builtin html elements for types
  // mdn on input tells us what interface it is based on

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = textInputRef.current!.value; // ! instead of ? tells typescript that you know FOR A FACT that the connection will always establish and the value will never be null

    if (enteredText.trim().length === 0) {
      //throw error
      return;
    }

    onAddTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={textInputRef}></input>
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
