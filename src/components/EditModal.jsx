import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function EditModal({ show, item, setShow, keys }) {
  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ justifyContent: "center" }}>

      </Modal.Body>
    </Modal>
  );
}
