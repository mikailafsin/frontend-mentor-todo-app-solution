import { useDispatch } from "react-redux";
import { clearCompleted } from "../features/todoSlice";

function TodoClear() {
    const dispatch = useDispatch();
    const handleClear = () => dispatch(clearCompleted());
    return (
        <div>
            <button onClick={handleClear}>Clear Completed</button>
        </div>
    );
}

export default TodoClear;
