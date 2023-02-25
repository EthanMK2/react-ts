import ToDo from "../models/todo";
import classes from "./ToDoItem.module.css"

// type toDoItemProps = {
//     toDo: ToDo
// }

const TodoItem = (props: ToDo) => {
    return <li className={classes.item}>{props.text}</li>
}

export default TodoItem;