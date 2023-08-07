import React from "react";
import "./header.css";
import logo from "./../Images/nic_left.png";
//import Content from './Components/Content';
// import Logo from './../img/logo.svg';

const Header = () => {
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};
  return (
<div>
  {/* <div class="header">
    <h1>My Website</h1>
    <p>A <b>responsive</b> website created by me.</p>
  </div> */}
  
  <div id="navbar">
  {/* <a href="#default" id="logo">CompanyLogo</a> */}
  <img id="logo" class="logo" src={logo} alt="SiteLogo" />
  <div id="navbar-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>

</div>

  );
};



function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "20px 10px";
    document.getElementById("logo").style.fontSize = "14px";
  } else {
    document.getElementById("navbar").style.padding = "50px 10px" ;
    document.getElementById("logo").style.fontSize = "18px";
  }
}

export default Header;
