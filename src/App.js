import { useEffect, useState } from "react";
import Form from "./Componenets/Form";
import Header from "./Componenets/Header";
import Modal from "./Componenets/Modal";
import ReactCSSTransitionGroup from "react-transition-group"; // ES6
import { CSSTransition } from "react-transition-group";

import TodoList from "./Componenets/TodoList";
import "./styles.css";
export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  useEffect(() => {
    getFromLocal();
    showModal();
  }, []);
  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  const showModal = () => {
    setShow(true);
  };

  const filterHandler = () => {
    switch (status) {
      case "Completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "Uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };
  const getFromLocal = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };

  return (
    <div className="App">
      {/* <Modal show={show} setShow={setShow} setName={setName} Name={name} /> */}
      {show && (
        <div>
          <Header title={name} />
          <Form
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
            setStatus={setStatus}
          />
          <TodoList
            filteredTodos={filteredTodos}
            todo={todos}
            setTodos={setTodos}
          />
        </div>
      )}
    </div>
  );
}
