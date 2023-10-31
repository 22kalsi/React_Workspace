import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../Component/Header";
import Content from "./Body";
import { useEffect, useState } from "react";



const Layout = () => {





  return (
    <div>

        <Row>
          <Header/>
        </Row>

      <Container fluid>
        <Row>
          <Content/>
        </Row>
      </Container>

        <Row>
          <Col>1 of 1</Col>
        </Row>

    </div>
  );
};

export default Layout

