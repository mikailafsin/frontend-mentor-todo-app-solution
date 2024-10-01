import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../features/todoSlice";

function TodoItem({ todo }) {
    const dispatch = useDispatch();
    const handleDeleteTodo = () => dispatch(deleteTodo(todo.id));
    const handleToggleTodo = () => dispatch(toggleTodo(todo.id));
    return (
        <li className="group flex items-center justify-between gap-4 border-b border-veryLightGrayishBlue px-5 py-3 dark:border-veryDarkGrayishBlue dark:text-lightGrayishBlue">
            <div className="flex w-full gap-4">
                <label className="relative h-[1rem] w-[1.111rem] cursor-pointer">
                    <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={todo.completed}
                        onChange={handleToggleTodo}
                    />
                    <div className="absolute left-0 top-0 h-[1rem] w-[1.111rem] rounded-full border border-veryLightGrayishBlue peer-checked:border-none peer-checked:bg-gradient-to-r peer-checked:from-[#57ddff] peer-checked:to-[#c058f3] dark:border-veryDarkGrayishBlue"></div>
                    <div className="absolute left-0 top-0 h-[1rem] w-[1.111rem] bg-center bg-no-repeat peer-checked:bg-icon-check"></div>
                </label>
                <p className="text-xs sm:text-base">{todo.text}</p>
            </div>
            <button
                className="hidden h-[0.875rem] w-[0.833rem] cursor-pointer bg-icon-cross bg-center bg-no-repeat group-hover:inline-block dark:text-veryDarkGrayishBlue"
                onClick={handleDeleteTodo}
            ></button>
        </li>
    );
}

export default TodoItem;
