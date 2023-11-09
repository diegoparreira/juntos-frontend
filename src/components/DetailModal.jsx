import React from "react";
import Modal from "react-bootstrap/Modal";
import VideoPlayer from "./VideoPlayer";
import CommentList from "./CommentList";
import PDFViewer from "./PDFViewer";

export default function DetailModal({ show, content, setShow }) {
  return (
    <Modal size="lg" show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>{content.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{justifyContent: 'center'}}>
        {content.type === 'video' && <VideoPlayer link={content.link}/>}
        {content.type === 'pdf' && <PDFViewer />}
        <CommentList contentId={content.id} />
      </Modal.Body>
    </Modal>
  );
}
