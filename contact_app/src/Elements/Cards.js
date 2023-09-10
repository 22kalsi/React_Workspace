import React, { Component } from "react";
import Card from "react-bootstrap/Card";
class Cards extends Component {
  
  render() {
    return (
      <Card border="primary" style={{ width: "18rem" }}>
        <Card.Header>{this.props.header}</Card.Header>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text>{this.props.contact}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default Cards;
