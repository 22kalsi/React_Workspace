import { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from 'react-bootstrap/Button';

export default class Popup extends Component{

    render(){
        return(
          <>
          <Button variant="primary" size={this.props.size} onClick={this.props.onClick}>
            {this.props.title}
          </Button>
    
          <Modal
            show={this.props.show}
            onHide={this.props.onhide}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>{this.props.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              {this.props.input}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.props.onhide}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>
        </>
        )
    }
}
