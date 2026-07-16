import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addItem, updateItem } from "../features/listSlice";

const Form = () => {
  const [editId, setEditId] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   console.log(list)

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (editId === null) {
      dispatch(
        addItem({
          id: Date.now(),
          ...data,
        }),
      );
    } else {
      dispatch(
        updateItem({
          id: editId,
          ...data,
        }),
      );

      setEditId(null);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} type="text" placeholder="Your name.." />
        <input
          {...register("contact", { required: true })}
          type="text"
          placeholder="Your contact.."
        />
        {errors.lastName && <p>Last name is required.</p>}
        <input
          {...register("age", { pattern: /\d+/ })}
          type="text"
          placeholder="Your age.."
        />
        {errors.age && <p>Please enter number for age.</p>}
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
