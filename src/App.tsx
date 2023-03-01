import ToDos from "./components/ToDos";
import NewTodo from "./components/NewTodo";
import TodosContextProvider from "./store/todos-context";

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

  return (
    <TodosContextProvider>
      <div className="App">
        <NewTodo />
        <ToDos />
      </div>
    </TodosContextProvider>
  );
}

export default App;
