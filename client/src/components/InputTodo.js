import React, { Fragment, useState } from "react";

import axios from "axios";

const InputTodo = () => {
  const [desc, setDesc] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { desc };
      const response = await axios.post("http://localhost:5000/todos", body);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  );
};

export default InputTodo;
