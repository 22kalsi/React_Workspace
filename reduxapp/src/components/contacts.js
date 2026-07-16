import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItem } from "../features/listSlice";
import EditContact from "./EditContact";
import Form from "./form";

const Contacts = () => {
  const [editItem, setEditItem] = useState(null);

  const dispatch = useDispatch();
  const lists = useSelector((state) => state.list.items);
  console.log(lists);
  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      <Form />
      {editItem && (
        <EditContact contact={editItem} closeEdit={() => setEditItem(null)} />
      )}
      <ul>
        {lists.map((item) => (
          // Use a unique ID for the key, not the array index
          <li key={item.id}>
            My name is {item.name} and my age is {item.age}.
            <button onClick={() => handleDelete(item.id)}>Delete</button>
            <button onClick={() => setEditItem(item)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
