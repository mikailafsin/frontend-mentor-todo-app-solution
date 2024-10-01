import ThemeToggle from "./ThemeToggle";

function TodoHeader() {
    return (
        <div className="mb-5 flex justify-between">
            <div className="text-2xl font-bold text-veryLightGray sm:text-3xl">T O D O</div>
            <ThemeToggle />
        </div>
    );
}

export default TodoHeader;
