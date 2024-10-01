import { useDispatch } from "react-redux";
import { toggleTheme } from "../features/themeSlice";

function ThemeToggle() {
    const dispatch = useDispatch();
    return (
        <button
            className="h-5 w-5 bg-icon-moon bg-cover bg-no-repeat dark:bg-icon-sun"
            onClick={() => dispatch(toggleTheme())}
        ></button>
    );
}

export default ThemeToggle;
