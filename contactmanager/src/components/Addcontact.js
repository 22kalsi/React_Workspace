import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "./contactSlice";

const Addcontact = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(
    (state) => state.contact.contacts
  );

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    dispatch(addContact(data));
    reset();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Full Name</label>

        <input type="text"
          {...register("fullName")}
          placeholder="Full Name"
        />

        <label>Contact</label>

        <input type="text"
          {...register("contact")}
          placeholder="Contact Number"
        />

        <label>Gender</label>

        <select {...register("gender")}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input type="submit" value="Save Contact" />
      </form>

      <hr />

      
    </div>
  );
};

export default Addcontact;