import React, { Fragment, useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import EditTodo from "./EditTodo";
import axios from "axios";

const ListTodos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const deleteTodo = async (id) => {
    try {
      const deleteTodo = await axios.delete(
        `https://pern-todo-webserver.onrender.com/todos/${id}`
      );
      setTodos(todos.filter((todo) => todo.todo_id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };

  const getTodos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://pern-todo-webserver.onrender.com/todos"
      );

      if (response) {
        setTodos(response.data);
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <Fragment>
      <table class="table">
        <thead className="table-dark">
          <tr>
            <th scope="col">Description</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {loading && (
            <Fragment>
              <div
                className="spinnerContainer"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: "2rem",
                  alignItems: "center",
                }}
              >
                <Spinner animation="border" role="status"></Spinner>
                <h3>It might take 30 seconds to get data from database. </h3>
              </div>
            </Fragment>
          )}
          {!loading &&
            todos.map((todo) => {
              return (
                <tr key={todo.todo_id}>
                  <td>{todo.description}</td>
                  <td>
                    <EditTodo todo={todo} />
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteTodo(todo.todo_id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListTodos;
