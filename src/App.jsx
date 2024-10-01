import { useSelector } from "react-redux";
import TodoApp from "./components/TodoApp";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

function App() {
    const { theme } = useSelector((state) => state.theme);

    return (
        <div className={`${theme} font-josefin`}>
            <TodoApp />
            <ToastContainer stacked />
        </div>
    );
}

export default App;
