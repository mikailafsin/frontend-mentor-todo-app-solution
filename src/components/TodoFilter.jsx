import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/todoSlice";

function TodoFilter({ isDesktop = false }) {
    const { filter } = useSelector((state) => state.todo);
    const dispatch = useDispatch();

    const desktopClass =
        "hidden sm:flex sm:justify-center sm:gap-3 sm:text-sm sm:font-bold sm:text-darkGrayishBlue";

    const mobileClass =
        "mb-8 flex justify-center gap-3 rounded-md bg-veryLightGray px-5 py-3 text-sm font-bold text-darkGrayishBlue dark:bg-veryDarkDesaturatedBlue sm:hidden";

    return (
        <div className={isDesktop ? desktopClass : mobileClass}>
            <button
                className={filter === "all" ? "text-primaryBrightBlue" : ""}
                onClick={() => dispatch(setFilter("all"))}
            >
                All
            </button>
            <button
                className={filter === "active" ? "text-primaryBrightBlue" : ""}
                onClick={() => dispatch(setFilter("active"))}
            >
                Active
            </button>
            <button
                className={filter === "completed" ? "text-primaryBrightBlue" : ""}
                onClick={() => dispatch(setFilter("completed"))}
            >
                Completed
            </button>
        </div>
    );
}

export default TodoFilter;
