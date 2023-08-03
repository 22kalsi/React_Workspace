import React from "react";
import "./header.css";
//import Content from './Components/Content';
// import Logo from './../img/logo.svg';

const Header = () => {

  return (
<div>
  <div class="header">
    <h1>My Website</h1>
    <p>A <b>responsive</b> website created by me.</p>
  </div>
  
  <div class="navbar">
    <target href="#" class="active">Home</target>
    <target href="#">Link</target>
    <target href="#">Link</target>
    <target href="#" class="right">Link</target>
  </div>

</div>

  );
};

// const myFunction = () => {
 
//    var header = document.getElementById("myHeader");
//    //const sticky = 180;
//     var sticky = header.offsetTop;   
//      if (window.pageYOffset > sticky) {
//        header.classList.add("sticky");
//      } else {
//        header.classList.remove("sticky");
//      }
// };

export default Header;
