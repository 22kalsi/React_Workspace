import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import { useForm } from "react-hook-form"
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

const Input = (  ) => {
     
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const init = localStorage.getItem("Contacts")
  const parseInit = JSON.parse(init)
  const [Contacts, setContacts] = useState (parseInit)
  const [id, setId] = useState([{"idx" : 0}])

  const onSubmit = (data) => 
  {
    Id(Contacts)
    Contacts.push(data)
    localStorage.setItem("Contacts", JSON.stringify(Contacts))
    console.log(Contacts)
    console.log(id)
    // const dat = JSON.stringify(data)
    // localStorage.setItem("Contacts", ...dat)
  }

  

  const Save = () => {

localStorage.setItem("cards" , JSON.stringify(Contacts))

  }

return(

    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" {...register("name")} />
        
      </Form.Group>

      <Form.Group className="mb-3" >
        <Form.Label>Contact</Form.Label>
        <Form.Control type="text" placeholder="Contact" {...register("contact")}/>
      </Form.Group>
      {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>

)

}

export default Input

const card = [
  
  {

    "name" : "",
    "id" : null,
    "contact" : "",
    "rel" : "",
    "img" : "",
    "email" : ""

  }

]

// A function to generate Idx for card function including the ids of deleted cards
const Id = ( c, d ) => {
  const retriveIdx = localStorage.getItem("delIdx")
  const [deletedIdx, setdeletedIdx] = useState(JSON.parse(retriveIdx))
  localStorage.setItem("delIdx", JSON.stringify(deletedIdx) )
  const idx = deletedIdx.length
  let len = c.length

  if (d != null){
    idx = idx+1
    deletedIdx.push({"idx" : })
  }
  
 
  console.log("Length of array Id " + len)



  while (len > init)
  {



    if (id[init] != init)
    {
      id.push(len)
    } else {
    init = init + 1
    }

  }

}