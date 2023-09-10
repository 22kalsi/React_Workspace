import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Popup from "./Popup";
import Input from "./Input";


const Content = () => {

  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseEdit = () => setShow1(false);
  const handleShowEdit = () => setShow1(true);
  const body = () =>{ return <Input/> }
  const onHandleSave = () =>{}
  return (
    <Container>
      <Row className="justify-content-md-center p-3">
        <Col xs lg="2">
          <Row>
          <Popup variant="primary" onClick={handleShow} size="xxl" show={show} onhide={handleClose} title={"Add Contact"} input={body()}/>
          <Popup variant="primary" onClick={handleShowEdit} size="xxl" show={show1} onhide={handleCloseEdit} title={"Edit Contact"}/>
          </Row>
        </Col>
        <Col md="auto"></Col>
        <Col xs lg="2" style={{backgroundColor: "#AEC3AE"}}>
        </Col>
      </Row>
    </Container>
  );
};

export default Content;
