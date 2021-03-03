import Todo from "./Todo";

const TodoList = ({ todo, setTodos, filteredTodos }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todoItem) => (
          <Todo
            key={todoItem.id}
            todo={todoItem}
            setTodos={setTodos}
            todos={todo}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
