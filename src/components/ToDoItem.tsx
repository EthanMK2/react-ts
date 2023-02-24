import ToDo from "../models/todo";

// type toDoItemProps = {
//     toDo: ToDo
// }

const TodoItem = (props: ToDo) => {
    return <li>{props.text}</li>
}

export default TodoItem;