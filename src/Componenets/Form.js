import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const Form = ({ setInputText, setStatus, setTodos, inputText, todos }) => {
  const handleInput = (e) => {
    console.log(e.target.value);
    let input = e.target.value;
    setInputText(input);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText === "") {
      alert("Please Enter Todo Item");
      return;
    }
    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 }
    ]);
    setInputText("");
  };
  const filterHandler = (e) => {
    let status = e.target.value;
    setStatus(status);
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={inputText}
          placeholder="Enter todo..."
          onChange={handleInput}
        />
        <button className="add">
          <FontAwesomeIcon icon={faPlus} color="white" />
        </button>
      </form>
      <div className="select">
        <select onChange={filterHandler} name="todos" className="filter-todos">
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  );
};
export default Form;
