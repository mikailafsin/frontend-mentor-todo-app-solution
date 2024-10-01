import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todoSlice";
import themeSlice from "../features/themeSlice";

export const store = configureStore({
    reducer: {
        todo: todoSlice,
        theme: themeSlice,
    },
});
