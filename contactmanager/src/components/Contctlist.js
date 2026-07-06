import React, { useState, useEffect } from "react";

import "./App.css";
import pic from '../components/img_avatar.png';
import pic1 from '../components/img_avatar2.png';
const ContactList = ({list})=>{
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

    return(
        <ul>
      {list.map((c, index) => (
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
     //<div></div>
    );
}

export default ContactList;