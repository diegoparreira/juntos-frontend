import React from "react";
import Modal from "react-bootstrap/Modal";
import VideoPlayer from "./VideoPlayer";
import CommentList from "./CommentList";
import PDFViewer from "./PDFViewer";
import Chat from "./Chat/Chat";

export default function DetailModal({ show, content, setShow }) {
  return (
    <>
      <Modal
        size="lg"
        show={show}
        className="modal-dialog-scrollable"
        centered
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>{content.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content">
            {content.type === "video" && <VideoPlayer link={content.url} />}
            {content.type === "pdf" && <PDFViewer link={content.url} />}
            <p className="mt-5">{content.description}</p>
            <CommentList contentId={content.id} />
          </div>
        </Modal.Body>
        <Chat />
      </Modal>
    </>
  );
}
