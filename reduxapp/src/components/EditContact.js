import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { updateItem } from "../features/listSlice";
import { useEffect } from "react";

const EditContact = ({ contact, closeEdit }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    reset(contact);
  }, [contact, reset]);

  const onSubmit = (data) => {
    dispatch(
      updateItem({
        id: contact.id,
        ...data,
      }),
    );

    closeEdit();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} />

      <input {...register("contact")} />

      <input {...register("age")} />

      <button type="submit">Update</button>

      <button type="button" onClick={closeEdit}>
        Cancel
      </button>
    </form>
  );
};

export default EditContact;
