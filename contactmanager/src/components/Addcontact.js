import React, { useState, useEffect } from "react";
import ContactList from "./Contctlist";
import "./App.css";
import { useForm } from 'react-hook-form';
const Addcontact = () => {
const [contact, setContact] = useState([]);
const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
  localStorage.setItem('contact', JSON.stringify(contact));
}, [contact]);

console.log(contact);
  return (
    <div className="container">
      <form onSubmit={handleSubmit((data) => setContact([...contact, data]))} >
        <label>Full Name</label>
        <input
          type="text"
          name="fullname"
{...register('fullName')}
          placeholder="Your Name"
          //onChange={handleChange}
        />

        <label>Contact</label>
        <input
          type="text"
          name="contact"
{...register('contact')}
          //onChange={handleChange}
          placeholder="Your Contact Number"
        />

        <label>Gender</label>
        <select
          name="gender"
   {...register('gender')}
          //onChange={handleChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input type="submit" />
      </form>

     

      <ContactList  list={contact} /> 
    </div>
  );
};

export default Addcontact;