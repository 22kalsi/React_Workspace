import React, { Component } from "react";
import "../Initials/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div class="header">
        <div class="navbar">
          <a href="#home">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    );
  }
}
