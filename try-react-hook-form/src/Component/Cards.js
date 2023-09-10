import React from "react";
import "../Component/Cards.css";
import img from "../Component/img_avatar.png"
const Cards = () => {

  return (<div >
    {Object.values(localStorage).map((item) => {
         const {name, id, email, password} = JSON.parse(item)
        //  {<fetch lis = {text}/>}
        return (
            <div class="card" >
            <img src={img} alt="Avatar"  />
            <div class="container">
              <h4>
                <b>
                NAME: {name}
                </b>
                <br/>
                <p>
                {/* <button onClick = {Remove(id)}>Remove</button> */}
                ID : {id}
                </p>
              </h4>
              <div>
              <b>CONTACT ID: {id}</b>
              </div>
            </div>
          </div>
        );
      })}
</div>
  );
};

export default Cards;

const Remove = (id) => {

  <a onClick={ localStorage.removeItem(id)}>Remove</a>

}