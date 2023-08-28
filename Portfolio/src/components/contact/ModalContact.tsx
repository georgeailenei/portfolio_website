import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./modalContact.css";

export const ModalContact = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Email Sent</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Grateful for Your Interest</h4>
        <p>
          I want to say thank you for checking out my portfolio. I'm really glad
          you're interested. I'm excited about the chance of working together.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
