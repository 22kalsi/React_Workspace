import React from "react";
import "./Header.css";
import Content from "./Content";
// import Logo from './../img/logo.svg';

const Header = () => {
  window.onscroll = function() {myFunction()};
  return (
    <div>
<div class="top-container">
  <h1>Scroll Down</h1>
  <p>Scroll down to see the sticky effect.</p>
</div>
<div class="header" id="myHeader">
  <h2>My Header</h2>
</div>
<Content id="myHeader"></Content>
</div>
  );
};

const myFunction = () => {
 
   var header = document.getElementById("myHeader");
   const sticky = 175;
  //  var sticky = header.offsetTop;   
     if (window.pageYOffset > sticky) {
       header.classList.add("sticky");
     } else {
       header.classList.remove("sticky");
     }
};

export default Header;
