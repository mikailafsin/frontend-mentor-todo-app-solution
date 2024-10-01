import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todoSlice";
import { useState } from "react";
import { Slide, toast } from "react-toastify";

function TodoInput() {
    const [todoInput, setTodoInput] = useState("");
    const [isChecked, setIsChecked] = useState(false);

    const { todos } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && todoInput.trim()) {
            const newTodo = {
                id: todos.length + 1,
                text: todoInput,
                completed: isChecked,
            };
            dispatch(addTodo(newTodo));
            setTodoInput("");
            setIsChecked(false);
        }

        if (e.key === "Enter" && todoInput === "") {
            toast.error("Before enter please fill in the input.", {
                transition: Slide,
                closeButton: false,
                autoClose: 3500,
                className: "dark:bg-veryDarkBlue dark:text-white",
            });
        }
    };

    return (
        <div className="mb-5 flex items-center gap-4 rounded-md bg-veryLightGray px-5 py-3 dark:bg-veryDarkDesaturatedBlue">
            <label className="relative h-[1rem] w-[1.111rem] cursor-pointer">
                <input
                    type="checkbox"
                    className="peer sr-only"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                />
                <div className="absolute left-0 top-0 h-[1rem] w-[1.111rem] rounded-full border border-veryLightGrayishBlue peer-checked:border-none peer-checked:bg-gradient-to-r peer-checked:from-[#57ddff] peer-checked:to-[#c058f3] dark:border-veryDarkGrayishBlue"></div>
                <div className="absolute left-0 top-0 h-[1rem] w-[1.111rem] bg-center bg-no-repeat peer-checked:bg-icon-check"></div>
            </label>
            <input
                type="text"
                placeholder="Create a new todo..."
                value={todoInput}
                onChange={(e) => setTodoInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full border-none bg-transparent text-xs text-veryDarkBlue outline-none dark:text-lightGrayishBlue sm:text-base"
            />
        </div>
    );
}

export default TodoInput;
