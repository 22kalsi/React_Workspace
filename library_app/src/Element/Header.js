import React, { Component, useState } from "react";
import "../App.css";
import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import Content from "./Content";

class Header extends Component {

  render() {
    return (
      <div id="navbar" className="sticky" style={{ width: "100%",zIndex: "9999" }}>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand href={this.props.href}>
              <b>{this.props.heading}</b>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#1">Landing Page</NavDropdown.Item>
                  <NavDropdown.Item href="#2">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="#3">Projects</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#4">Education</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#5">Contact</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
