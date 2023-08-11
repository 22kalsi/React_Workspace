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
<div id="navbar">
  <a href="#home">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
</div>
</div>

  );
};

var prevScrollpos = window.pageYOffset;


function scrollFunction() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}

export default Header;
