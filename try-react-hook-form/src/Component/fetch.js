import * as React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Ccard from "./Cards";
const Fetch = (props) => {
  const [listData, setList] = useState([]);
  const { register, handleSubmit, reset, resetField } = useForm();
  const handleRegistration = (data) => {
    alert("You want to fetch data for " + data.name);
    //  console.log(data.name)
    let newObject = JSON.parse(localStorage.getItem(data.name));
    console.log(newObject);
    if (newObject == null) {
      alert("Cannot find object with name " + data.name);
    } else {
      setList(
        Object.keys(localStorage).map((item) => {
          const txt = JSON.parse(item);
          return txt;
        })
      );
    }
<Fetch/>
    // console.log(listData)
    // setList(localStorage.getItem(JSON.parse(id), JSON.parse(data)));
    // setList(listData.concat(data));
    reset();
    // listCard();
  };

  // for (int n = 0; n < (localStorage.length); n++){
  //   setCards.concat(JSON.parse(localStorage.getItem(n)))
  // }

  // const renderValue = keyV.map(item => {
  //     return (<div>{item.value}<br></br></div>)
  // })
  //   const myArray = [Object.keys(localStorage)]
  // const embedElements = () => {
  //    myArray.forEach(element => {
  //       document.getElementById('dd').innerHTML +=
  //       `<div>${element}</div><br />`;
  //       // here result is the id of the div present in the DOM
  //    });
  // };

  // const renderList = localStorage.map(Data => {
  //   return (
  //     <div>
  //       {Data.key}
  //       <br></br>
  //       {Data.value}
  //       {/* <br />
  //       {Data.email}
  //       <br />
  //       {Data.password} */}
  //       <br />
  //       <br />
  //     </div>
  //   );
  // });

  return (
    <div>
      <h2>
        <div style={{ color: "blue" }}>
          There are {localStorage.length} contacts in the storage
        </div>
        <br />
      </h2>
      {/* <form style={{ width: "300px" }}>
        <fieldset>
          <legend>View Contacts</legend>
          <div>
            <label>Name</label>
            <input
              name="Key"
              {...register("name", { required: "Name is required" })}
            />
          </div>
          <div>
            <select style={{width: "200px"}}  {...register("Contact")}>
            {listData.map(item => {
      const txt = JSON.parse(item)
        return (<option key={txt.id} value={txt.name}>{txt.name}</option>)
    })}
            </select>
          </div>
          <button onClick={handleSubmit(handleRegistration)}>View Contact</button>
        </fieldset>
      </form> */}
      {/* <div style={{ color: "blue" }}>
        {listData.id}
        <br></br>
        {listData.name}
        <br />
        {listData.email}
        <br />
        {listData.password}
        <br />
        <br />
      </div> */}
      <div>
        <Ccard />
      </div>
    </div>
  );
};

export default Fetch;
