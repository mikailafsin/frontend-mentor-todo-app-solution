import TodoCounter from "./TodoCounter";
import TodoFilter from "./TodoFilter";
import TodoInput from "./TodoInput";
import TodoClear from "./TodoClear";
import TodoHeader from "./TodoHeader";
import TodoList from "./TodoList";
import Signature from "./Signature";

function TodoApp() {
    return (
        <main className="min-h-screen bg-veryLightGrayishBlue bg-mobile-light bg-contain bg-no-repeat dark:bg-veryDarkBlue dark:bg-mobile-dark sm:bg-desktop-light sm:dark:bg-desktop-dark">
            <div className="mx-auto p-8 sm:max-w-[740px] sm:py-20">
                <TodoHeader />
                <TodoInput />
                <div className="mb-5 rounded-md bg-veryLightGray shadow-sm dark:bg-veryDarkDesaturatedBlue">
                    <TodoList />
                    <div className="flex justify-between px-5 py-3 text-xs text-darkGrayishBlue sm:text-base">
                        <TodoCounter />
                        <TodoFilter isDesktop={true} />
                        <TodoClear />
                    </div>
                </div>
                <TodoFilter />
                <Signature />
            </div>
        </main>
    );
}

export default TodoApp;
