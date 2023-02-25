import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import ToDos from "./components/ToDos";
import ToDo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  // const toDoList = [
  //   {
  //     text: "I am text of a todo.",
  //     lol: ";daslfkjasdlkfj",
  //     jdfdfdfdfd: 3434
  //   },
  //   {
  //     text: "I am text of a todo.",
  //     lol: ";daslfkjasdlkfj",
  //     jdfdfdfdfd: 3434
  //   },
  //   {
  //     text: "I am text of a todo.",
  //     lol: ";daslfkjasdlkfj",
  //     jdfdfdfdfd: 3434
  //   }
  // ]

  const [toDoList, setToDoList] = useState<ToDo[]>([]); // empty array for initial value means typescript thinks "this is always an empty array type". so we include the angle bracket definition

  const addTodoHandler = (todoText: string) => {
    const newTodo: ToDo = {
      text: todoText,
    };
    setToDoList((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={addTodoHandler} />
      <ToDos items={toDoList} />
    </div>
  );
}

export default App;
