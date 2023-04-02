import { useState, useRef } from "react";
import uuid from "react-uuid";
import TodoItem from "../TodoItem/TodoItem";

function Todo() {
  const [todo, setTodo] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );
  const inputValue = useRef("");
  const dateInputValue = useRef("");
  const timeInputValue = useRef("");
  const inputNameValues = useRef("");
  const editTimeInputValue = useRef("");
  const editDateInputValue = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let todoObj = {
      id: uuid(),
      text: inputValue.current.value,
      time: timeInputValue.current.value,
      date: dateInputValue.current.value,
      isCompleted: false,
    };
    setTodo([...todo, todoObj]);
    inputValue.current.value = "";
    dateInputValue.current.value = "";
    timeInputValue.current.value = "";
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const handleDone = () => {
    let doneFilter = todo.filter((todo) => todo.isCompleted === true);
    setTodo([...doneFilter]);
    JSON.parse(localStorage.getItem("todo"));
  };
  const handleUndone = () => {
    let undoneFilter = todo.filter((todo) => todo.isCompleted === false);
    setTodo([undoneFilter]);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const handleChecked = (id) => {
    let checkTodo = todo.find((todo) => todo.id === id);
    checkTodo.isCompleted = !checkTodo.isCompleted;
    setTodo([...todo]);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  const handleDelete = (id) => {
    let deleteTodo = todo.filter((todo) => todo.id !== id);
    setTodo(deleteTodo);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  let editTodo;

  const handleEdit = (id) => {
    editTodo = todo.find((todo) => todo.id === id);
    inputNameValues.current.value = editTodo.text;
    editDateInputValue.current.value = editTodo.date;
    editTimeInputValue.current.value = editTodo.time;
  };

  const handleChange = () => {
    editTodo.text = inputNameValues.current.value;
    editTodo.date = editDateInputValue.current.value;
    editTodo.time = editTimeInputValue.current.value;
    setTodo([...todo]);
    localStorage.setItem("todo", JSON.stringify(todo));
  };

  

  return (
    <>
      <div className="d-flex justify-content-between gap-4">
        <form
          className=" d-flex gap-2 justify-content-between"
          onSubmit={handleSubmit}
        >
          <input
            ref={inputValue}
            className="w-75 form-control  "
            type="text"
            placeholder="Enter your text"
          />
          <input
            ref={dateInputValue}
            className="w-75 form-control  "
            type="date"
            placeholder="Enter your text"
          />
          <input
            ref={timeInputValue}
            className="w-75 form-control  "
            type="time"
            placeholder="Enter your text"
          />
          <button className="add-btn btn btn-success">Add</button>
        </form>
        <form
          className="d-flex gap-2 justify-content-between"
          onSubmit={handleChange}
        >
          <input
            ref={inputNameValues}
            type="text"
            placeholder="Edit text"
            className="w-75 form-control"
          />
          <input
            ref={editDateInputValue}
            className="w-75 form-control  "
            type="date"
            placeholder="Edit date"
          />
          <input
            ref={editTimeInputValue}
            className="w-75 form-control  "
            type="time"
            placeholder="Edit time"
          />
          <button className="add-btn btn btn-success">Edit</button>
        </form>
      </div>
      <div className="mt-3 d-flex gap-4">
        <button onClick={handleDone} className="btn btn-primary">
          Done
        </button>
        <button onClick={handleUndone} className="btn btn-info">
          Undone
        </button>
      </div>

      <ul className="text-start d-flex flex-column gap-3 p-0 mt-3">
        <TodoItem
          data={todo}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleChecked={handleChecked}
        />
      </ul>
    </>
  );
}

export default Todo;
