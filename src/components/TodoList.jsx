import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
    const { todos, filter } = useSelector((state) => state.todo);

    const filteredTodos = todos.filter((todo) => {
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
        return true;
    });
    return (
        <ul>
            {filteredTodos.length === 0 ? (
                <p className="px-5 py-3 text-center text-darkGrayishBlue">No TODO found!</p>
            ) : (
                filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
            )}
        </ul>
    );
}

export default TodoList;
