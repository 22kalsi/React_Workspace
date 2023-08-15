import * as React from "react";
import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import Cards from "../Component/Cards";
import '../Component/Form.css'

const FormPop = () =>{
 
    // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
  
  const [idArr, setIdArr] = useState(localStorage.length)
  const [contact, setContact] = useState([])
  const { register, handleSubmit, reset} = useForm();
  const handleRegistration = (data) => {
    alert("Form have been submited");
    
    data.id = idArr
    //  setContacts(oldArray => [...contacts,JSON.stringify(data)])
    // setContacts(JSON.stringify(data))
    // console.log(id)
     localStorage.setItem(idArr, JSON.stringify( data));
    // reset()
    setIdArr( localStorage.length )
    
console.log(Object.keys(localStorage))
  };
  // useEffect(() => { setIdArr(localStorage.length);},[idArr+1])
  


  // const renderList = num.map((Data) => 
  //     <div key={Data.key}>
  //       {Data.key}:
  //       {Data.value}
  //       <br />
  //       <br />
  //     </div>
  //   )


  return (
    <div style={{overflow: "scroll"}}>
      <form className="center"  onSubmit={handleSubmit(handleRegistration)} >
        <fieldset>
          <legend>Add/Edit Contact</legend>
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
          <button>Add Contact</button>
        </fieldset>
      </form>
      <div style={{color: "blue"}}>There are {idArr} contacts in the storage</div><br/>
      <div className="center"> <Cards /> </div>
    </div>
  );
};

export default RegisterForm;
