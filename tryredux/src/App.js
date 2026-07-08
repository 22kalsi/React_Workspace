import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, editItem } from "./slice";

function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.list.items);

  const [text, setText] = useState("");
  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (text.trim() === "") return;

    if (editId === null) {
      dispatch(addItem(text));
    } else {
      dispatch(
        editItem({
          id: editId,
          text: text,
        })
      );
      setEditId(null);
    }

    setText("");
  };

  const handleEdit = (item) => {
    setText(item.text);
    setEditId(item.id);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Redux CRUD Example</h2>

      <input
        type="text"
        value={text}
        placeholder="Enter item"
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleSubmit}>
        {editId === null ? "Add" : "Update"}
      </button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}

            <button
              onClick={() => handleEdit(item)}
              style={{ marginLeft: "10px" }}
            >
              Edit
            </button>

            <button
              onClick={() => dispatch(removeItem(item.id))}
              style={{ marginLeft: "10px" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;