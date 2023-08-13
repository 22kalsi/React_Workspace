import * as React from "react";
import { useState } from 'react'
import { useForm } from "react-hook-form";



const RegisterForm = () =>{

  const [id, setId] = useState(1)

  const initList = [
    {
      id: 0,
      name: "Billu",
      email: "billu@gmail.com",
      password: "1313Bilu",
    }
  ];

  const [listData, setList] = useState(initList);
  const { register, handleSubmit, reset, resetField } = useForm();
  const handleRegistration = (data) => {
    alert("Form have been submited");
    setId(id + 1)
    data.id = id
    console.log(id)
    setList(listData.concat(data));
    reset()
  };

  const renderList = listData.map((data) => {
    return (
      <div>
        {data.id}
        <br></br>
        {data.name}
        <br />
        {data.email}
        <br />
        {data.password}
        <br />
        <br />
      </div>
    );
  });

  return (
    <div>
      <form  onSubmit={handleSubmit(handleRegistration)}>
        <fieldset>
          <legend>Registration Form</legend>
          <div>
            <label>Name</label>
            <input
              name="name"
              {...register("name", { required: "Name is required" })}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              {...register("password", { required: true })}
            />
          </div>
          <button>Submit</button>
        </fieldset>
      </form>
      <div>{renderList}</div>
    </div>
  );
};

export default RegisterForm;
