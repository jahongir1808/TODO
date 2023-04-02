import React from "react";
import "./TodoItem.scss";

export default function TodoItem({
  data,
  date, 
  dats,
  handleDelete,
  handleEdit,
  handleChecked,
}) {
  return (
    <>
      {data.map((item) => {
        return (
          <li
            key={item.id}
            className="d-flex align-items-center justify-content-between shadow rounded p-3"
          >
            <div className="d-flex gap-5 align-items-center">
              <input
                type="checkbox"
                checked={item.isCompleted}
                onClick={() => handleChecked(item.id)}
              />
              <div className="d-flex flex-column">
                <h3 className={item.isCompleted ? "txt" : ""}>{item.text}</h3>
                <span style={{ fontWeight: 700 }}>Date: {item.date}</span>
                <span style={{ fontWeight: 700 }}>Time: {item.time}</span>
              </div>
            </div>
            <div className="d-flex gap-1">
              <button
                onClick={() => handleEdit(item.id)}
                className="btn btn-success"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(item.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </>
  );
}
