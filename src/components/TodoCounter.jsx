import { useSelector } from "react-redux";

function TodoCounter() {
    const { todos, filter } = useSelector((state) => state.todo);

    return (
        <div>
            <span>
                {filter === "completed"
                    ? `${todos.filter((todo) => todo.completed === true).length} items completed`
                    : `${todos.filter((todo) => todo.completed === false).length} items left`}
            </span>
        </div>
    );
}

export default TodoCounter;
