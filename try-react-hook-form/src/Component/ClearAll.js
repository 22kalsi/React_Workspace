import * as React from "react";
// import { useState } from 'react'
import { useForm } from "react-hook-form";

const Clear = () =>{

  //   const initList = 
  //   [{
  //     "id": 0,
  //     "name": "",
  //     "email": "",
  //     "password": "",
  //   }]

  //   const initDelItem = 
  //   [
  //       {
  //           "id" : 0
  //       }
  //   ]
  // const [delItem, setDelItem] = useState(initDelItem)
  // const [listDel, setListDel] = useState(initList);
  const { handleSubmit} = useForm();
  const handleRegistration = (data) => {
    // alert("Getting object "+ data.name );
    // let newObject = JSON.parse(localStorage.getItem(data.name));
    // setListDel(newObject)
    // console.log(data.name)
    var doc;
    var result = window.confirm("Warning! all the " + localStorage.length + " contacts will be deleted!" );
    if (result == true) {
        doc = "OK was pressed.";
        window.localStorage.clear();
    } else {
        doc = "Cancel was pressed.";
    }
    
  };


  // const {id, name, email, password} = listDel
  // const renderList = delItem.map((data) => 
  //       <li>
  //       {data.id}
  //       </li>
  // );

  return (
    <div>
      <form >
        <fieldset>
          <legend>Clear Contacts</legend>
          <div>
            {/* <label>Name</label>
            <input
              name="Key"
              {...register("name", { required: "Name is required" })}
            /> */}
          </div>
          <button onClick={handleSubmit(handleRegistration)}>Clear All</button>
        </fieldset>
      </form>
      {/* <div style={{color: "red"}}>
        {id}
        <br></br>
        {name}
        <br />
        {email}
        <br />
        {password}
        <br />
        <br />
      </div> */}
    </div>
  );
};

export default Clear;

