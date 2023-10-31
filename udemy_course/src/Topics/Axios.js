import axios from "axios";
import { useState } from "react";
import React from "react";
const url = "https://jsonplaceholder.typicode.com/todos";

const Axios = () => {
  const [Todo, setTodo] = useState({ loaded: false, data: [] });
  const [searchItem, setSearchItem] = useState("");
  const [filteredTodos, setFilteredTodos] = useState(null);

  React.useEffect(() => {
    axios.get(url).then((response) => {
      Todo.data = response.data;
    });

    Todo.data ? (Todo.loaded = true) : (Todo.loaded = false);

  }, [(Todo.data)]);

  if (!Todo.data) return null;

  const handleInputChange = (e) => {
    const searchTerm = e.target.value;

    setSearchItem(searchTerm);
  };

  const filteredItems = (Todo.data).filter((fil) =>
    (fil.title).toLowerCase().includes(searchItem.toLowerCase())
  );

  setFilteredTodos(filteredItems);

  console.log(searchItem);

  return !Todo.loaded ? (
    "Loading"
  ) : (
    <div>
      <input
        type="text"
        value={Todo}
        onChange={handleInputChange}
        placeholder="Type to search"
      ></input>
      {/* {
      (Todo.data).map((to) => (
        <div>
          <h1>{to.userId}</h1>
          <p>{to.title}</p>
          <p>{to.id}</p>
          <p>{to.completed}</p>
        </div>
      ))
      } */}
      {
      filteredTodos.map( todo => <div>{todo.title}</div>)
      }
    </div>
  );
};

export default Axios;
