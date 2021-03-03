import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash } from "@fortawesome/free-solid-svg-icons";
const Todo = ({ todo, setTodos, todos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-Item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </li>
      <button onClick={deleteHandler} className="btnTrash">
        <FontAwesomeIcon icon={faTrash} color="white" />
      </button>
      <button onClick={completeHandler} className="btnCheck">
        <FontAwesomeIcon icon={faCheck} color="white" />
      </button>
    </div>
  );
};
export default Todo;
