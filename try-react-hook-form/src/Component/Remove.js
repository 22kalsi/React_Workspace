import * as React from "react";
import { useState } from 'react'
import { useForm } from "react-hook-form";

const Remove = () =>{

    const initList = 
    [{
      "id": 0,
      "name": "",
      "email": "",
      "password": "",
    }]

    const initDelItem = 
    [
        {
            "id" : 0
        }
    ]
  const [delItem, setDelItem] = useState(initDelItem)
  const [listDel, setListDel] = useState(initList);
  const { register, handleSubmit, reset, resetField } = useForm();
  const handleRegistration = (data) => {
    // alert("Getting object "+ data.name );
    let newObject = JSON.parse(localStorage.getItem(data.name));
    setListDel(newObject)
    console.log(data.name)
    var doc;
    var result = window.confirm("Press OK to confirm deletion! "  + "Name: " + newObject.name+ " E-mail: " + newObject.email+ " Password: " + newObject.password );
    if (result == true) {
        doc = "OK was pressed.";
        window.localStorage.removeItem(data.name);
        setDelItem(delItem.concat(data.name))
    } else {
        doc = "Cancel was pressed.";
    }
    // document.getElementById("g").innerHTML = doc;
    // console.log(newObject)
    // setList(newObject)
    // console.log(listData)
    // setList(localStorage.getItem(JSON.parse(id), JSON.parse(data)));
    // setList(listData.concat(data));
    
    reset()
  };


  const {id, name, email, password} = listDel
//   const renderList = delItem.map((data) => 
//         <li>
//         {data.id}
//         </li>
//   );

  return (
    <div>
      <form  >
        <fieldset>
          <legend>Delete Contacts</legend>
          <div>
            <label>Delete By Id: </label>
            <input
              name="Key"
              {...register("name", { required: "Name is required" })}
            />
          </div>
          <button onClick={handleSubmit(handleRegistration)}>Delete Contact</button>
        </fieldset>
      </form>
      <div style={{color: "red"}}>
        {id}
        <br></br>
        {name}
        <br />
        {email}
        <br />
        {password}
        <br />
        <br />
      </div>
    </div>
  );
};

export default Remove;

