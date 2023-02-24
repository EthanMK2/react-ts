import { useState } from "react";
import ToDoItem from "./components/ToDoItem";
import ToDos from "./components/ToDos";
import ToDo from "./models/todo";

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

  const toDoList: ToDo[] = [
    {
      text: "hi",
    },
    {
      text: "hidwefasf",
    },
    {
      text: "hiadrsf",
    },
    {
      text: "hiarwsdf",
    },
  ];

  return (
    <div className="App">
      <ToDos items={toDoList} />
    </div>
  );
}

export default App;
