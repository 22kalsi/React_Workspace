import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './Header';
import Body from './Body';

const Layout = () => {
  return (
    <Container fluid>
    <Row>
      {/* <Header/> */}
      <Body/>
    </Row>
  </Container>
  )
}

export default Layout