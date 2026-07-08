import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import pic from "../components/img_avatar.png";
import pic1 from "../components/img_avatar2.png";
const ContactList = () => {
  //   const contacts = [

  // {
  //   id  : "1",
  //   name : "Gursewak Singh",
  //   contact : "8284988913",
  //   gender : "male",
  // },
  //     {
  //   id  : "2",
  //   name : "Amandeep Kaur",
  //   contact : "9714141313",
  //   gender : "female",
  // }

  //]
  // console.log({list});

  const contacts = useSelector((state) => state.contact.contacts);
console.log({contacts});
  return (
            <ul>
          {contacts.map((c, index) => (
            <li key={index}><div class="card">
      <img src= {c.gender === "male" ? pic : pic1}
      alt="Avatar" style={{width:'100%'}}></img>
      <div class="container">
        <h4><b>{c.fullName}</b></h4>
        <p>{c.contact}</p>
      </div>

    </div></li>
          ))}
        </ul>
    // <div>
    //   {contacts.map((item) => (
    //     <div key={item.id}>
    //       <h3>{item.fullName}</h3>
    //       <p>{item.contact}</p>
    //       <p>{item.gender}</p>
    //     </div>
    //   ))}
    // </div>
  );
};

export default ContactList;
