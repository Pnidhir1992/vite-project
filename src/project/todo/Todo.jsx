import React, { useEffect, useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [InputValue, SetInputValue] = useState("");
  const [Task, settask] = useState([]);
  const [datetime, setDateTime] = useState("");

  const handleInputChange = (value) => {
    SetInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!InputValue) return;
    if (Task.includes(InputValue)) {
      SetInputValue("");
      return;
    }
    settask((prevTask) => [...prevTask, InputValue]);
    SetInputValue("");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const foramtedate = now.toLocaleDateString();
      const foramtetime = now.toLocaleTimeString();
      setDateTime(`${foramtedate} ${foramtetime}`);
    }, 1000);
  });

  return (
    <>
      <section className="main-section">
        <section className="container-todo">
          <header>
            <h1>Welcome To Create Your TODO List</h1>
            <div className="date-time-wrap">
              <h2 className="h2desing">{`Today Date is ${datetime} Your Local  Time`}</h2>
            </div>
          </header>
        </section>
        <section className="form">
          <form onSubmit={handleFormSubmit} className="form">
            <div>
              <input
                type="text"
                className="todo-input"
                autoComplete="off"
                value={InputValue}
                onChange={(event) => handleInputChange(event.target.value)}
              />
            </div>
            <button className="btn" type="submit">
              Add Task
            </button>
          </form>
        </section>
      </section>

      <section className="listing">
        <ul className="design">
          {Task.map((currElm, index) => {
            return (
              <li key={index} className="lsiting-design">
                <span>{currElm}</span>
                <button className="btn">+</button>

                <button className="btn">-</button>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Todo;
