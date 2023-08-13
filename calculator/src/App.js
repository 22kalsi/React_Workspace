import React from "react";
import Calculator from "../src/Components/Calculator";
import Header from "../src/Initials/Header";
import "../src/App.css"
const App = () => {
  return (
    <div>

<div class="grid-container">
  <div class="header">
    <Header />
  </div>
  
  <div class="left" style={{backgroundColor:"#aaa"}}>Column</div>
  <div class="middle" style={{backgroundColor:"#bbb"}}><Calculator /></div>  
  <div class="right" style={{backgroundColor:"#ccc"}}>Column</div>
  
  <div class="footer">
    <p>Footer</p>
  </div>
</div>

    </div>
  );
};

export default App;
