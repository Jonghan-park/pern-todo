import React, { Fragment, useState } from "react";
import "./inputTodo.css";

import axios from "axios";

const InputTodo = () => {
  const [desc, setDesc] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (desc !== "") {
        const body = { desc };
        const response = await axios.post("http://localhost:5000/todos", body);
      }

      window.location.reload(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <div className="inputForm">
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            className="form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <div className="buttonContainer">
            <button className="addButton">Add</button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default InputTodo;
