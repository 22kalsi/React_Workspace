import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useForm } from "react-hook-form";
import Form from "react-bootstrap/Form";

const Input = () => {

  const { register, handleSubmit, watch, formState: { errors }, } = useForm();
  const idListFeed = localStorage.getItem("Idx") ? JSON.parse(localStorage.getItem("Idx")) : [];
  const contactFeed = localStorage.getItem("Contacts") ? JSON.parse(localStorage.getItem("Contacts")) : [];
  const [idList, setIdList] = useState(idListFeed);
  const [Contacts, setContacts] = useState(contactFeed);

  useEffect(() => 
  {
    console.log("the array " + idList)
  }, []);

 

  const onSubmit = (data) => {

    
    console.log( Id );
    // Id(Contacts)
    Contacts.push(data);
    localStorage.setItem("Contacts", setContacts);
    // console.log(Contacts)
    // console.log(id)
    // const dat = JSON.stringify(data)


  };


  const Id = ( ) => 
  {

    const entityName = "Card_";
    let idListLen = idList.length;
    localStorage.setItem( "Idx" , JSON.stringify( idList ));
    // console.log( "the array " + idList );
    // console.log( "the array length " + ( idListLen + 1 ));
    // console.log( "Not In Use " + notInUse );
    return idList;

  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Name"
          {...register("name")}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Contact</Form.Label>
        <Form.Control
          type="text"
          placeholder="Contact"
          {...register("contact")}
        />
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">Submit</Button>
      <Button onClick={Id}> Click to get ID </Button>
    </Form>
  );
};

export default Input;

// const card = [
//   {
//     name: "",
//     id: null,
//     contact: "",
//     rel: "",
//     img: "",
//     email: "",
//   },
// ];
