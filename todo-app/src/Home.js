import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import Todo from "./Todo";
import PacmanLoader  from "react-spinners/PacmanLoader";
import "./App.css";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:5050/api/get")
      .then((res) => setTodos(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <section className="All-APP">
      {loading ? (
        <div className="preloaderr">
          <PacmanLoader 
            color="#ffffff"
            height={100}
            margin={10}
            className="loading"
          />
        </div>
      ) : (
        <div className="all-app">
          <div className="container">
            <h1>RIDA TODO APP</h1>
            <Create />
            {todos.length === 0 ? (
              <div>
                <h3>No Record</h3>
              </div>
            ) : (
              todos.map((todo) => (
                <Todo
                  key={todo._id}
                  id={todo._id}
                  text={todo.task}
                  done={todo.done}
                />
              ))
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
