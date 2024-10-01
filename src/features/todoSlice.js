import { createSlice } from "@reduxjs/toolkit";

const loadStateFromLocalStorage = () => JSON.parse(localStorage.getItem("todoState"));
const saveStateToLocalStorage = (state) => localStorage.setItem("todoState", JSON.stringify(state));

const initialState = loadStateFromLocalStorage() || {
    todos: [],
    filter: "all",
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos = [action.payload, ...state.todos];
            saveStateToLocalStorage(state);
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            saveStateToLocalStorage(state);
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter((todo) => todo.completed === false);
            saveStateToLocalStorage(state);
        },
        toggleTodo: (state, action) => {
            state.todos = state.todos.map((todo) =>
                todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
            );
            saveStateToLocalStorage(state);
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
            saveStateToLocalStorage(state);
        },
    },
});

export const { addTodo, deleteTodo, clearCompleted, toggleTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
