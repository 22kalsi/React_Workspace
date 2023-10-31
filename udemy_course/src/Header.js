import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import TabContainer from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Container, Row, Col, NavItem, Tab } from "react-bootstrap";
import Body from "./Body";
import Error from "./Topics/Error";
import UseState from "./Topics/UseState";

const Header = () => {


    

  return (
<Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row className="clearfix">
    <Col sm={4}>
      <Nav bsStyle="pills" stacked>
        <NavItem eventKey="first">Tab 1</NavItem>
        <NavItem eventKey="second">Tab 2</NavItem>
      </Nav>
    </Col>
    <Col sm={8}>
      <Tab.Content animation>
        <Tab.Pane eventKey="first">Tab 1 content</Tab.Pane>
        <Tab.Pane eventKey="second">Tab 2 content</Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  );
};

export default Header;
