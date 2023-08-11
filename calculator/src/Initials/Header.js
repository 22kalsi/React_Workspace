import React, { Component } from "react";
import "../Initials/Header.css";

export default class Header extends Component {
  render() {
    return (
      <div class="header">
        <a href="#default" class="logo">
          CompanyLogo
        </a>
        <div class="header-right">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
    );
  }
}
