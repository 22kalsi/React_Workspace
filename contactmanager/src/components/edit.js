import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateContact } from "../components/contactSlice";

const Edit = () => {
  const dispatch = useDispatch();

  const editId = useSelector((state) => state.contact.contacts);

  // const contacts = useSelector((state) =>
  //   state.contact.contacts.find((item) => item.id === editId)
  // );

  const [formData, setFormData] = useState({
    id: "",
    fullName: "",
    contact: "",
    gender: "",
  });

  useEffect(() => {
    if (editId) {
      setFormData(editId);
    }
  }, [editId]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(updateContact(formData));

    alert("Contact Updated Successfully");
  };

  if (!editId) {
    return <h2>No Contact Selected</h2>;
  }

  return (
    <div className="container">
      <h2>Edit Contact</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
        />

        <br />
        <br />

        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          placeholder="contact"
        />

        <br />
        <br />

        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          placeholder="gender"
        />

        <br />
        <br />

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default Edit;