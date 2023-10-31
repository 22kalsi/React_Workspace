import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import { Col } from "react-bootstrap";
import bg from "../img/bg2.svg";
import Row from "react-bootstrap/Row";
import bg1 from '../img/bg4-2.svg'
import Container from 'react-bootstrap/Container';

const Login = () => {
  const [modalShow, setModalShow] = useState(false);

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    function simulateNetworkRequest() {
      return new Promise((resolve) => setTimeout(resolve, 1000));
    }

    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
        setModalShow(true);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Nav.Link>
      <Button
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        variant="outline-success"
      >
        {isLoading ? "Loading…" : "Register"}
      </Button>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {/* <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Register</Modal.Title>
        </Modal.Header> */}
        <Modal.Body   >
          {/* <img src = {bg}/> */}
        <Container>
        <Row>
            <Col xs={6} md={4}><img src = {bg1} style={{width: "100%"}}/></Col>
            <Col xs={12} md={8}>
            <Form >
            <Form.Group
              // as={Col}
              // xs={12}
              dialogClassName="modal-60w"
              className="mb-3"
              controlId="formBasicName"
            >
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group
              // as={Col}
              // xs={6}
              className="mb-3"
              controlId="formBasicEmail"
            >
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group
              // as={Col}
              // xs={6}
              className="mb-3"
              controlId="formBasicPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group
              // as={Col}
              // xs={6}
              className="mb-3"
              controlId="formBasicCheckbox"
            >
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Form>
          <Button variant="success" onClick={() => setModalShow(false)} style={{position: "absolute", right: "20px", bottom:"20px"}}>
            Register
          </Button>
            </Col>
          </Row>
          </Container>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="success" onClick={() => setModalShow(false)}>
            Register
          </Button>
        </Modal.Footer> */}
      </Modal>
    </Nav.Link>
  );
};

export default Login;
