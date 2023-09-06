import { Modal, Button, Badge } from "react-bootstrap";
import { useCart } from "react-use-cart";
import Cart from "./Cart";
import { useState } from "react";
import cart from "../images/cart.svg";

const Popup = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart,
    totalItems,
  } = useCart();

  // const values = [true, 'sm-down', 'md-down', 'lg-down', 'xl-down', 'xxl-down'];
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  return (
    <>
  
      <img src={cart} alt="cart" onClick={() => handleShow(true)} />

      {isEmpty ? (
        "  "
      ) : (
        <span>
          <Badge bg="secondary">{totalItems}</Badge>
        </span>
      )}

      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Cart />
        </Modal.Body>
      </Modal>
      </>
  );
};

export default Popup;
