import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DetailModal from "./DetailModal";
import { useState } from "react";
import Util from "../utils/util";
import pdfImg from "../assets/PDF_file_icon.svg.png";

export default function CardContent({ content }) {
  const { title, type } = content;
  const [show, setShow] = useState(false);

  return (
    <Card style={{ width: "15rem" }}>
      <Card.Img
        className={`card-img ${content.type === 'pdf' ? 'pdf-thumb' : ''}`}
        variant="top"
        src={content.type === "video" ? Util.getThumb(content.url) : pdfImg}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Button variant="primary" onClick={() => setShow(true)}>
          Ver detalhes
        </Button>
        <DetailModal
          className=""
          show={show}
          content={content}
          setShow={setShow}
        />
      </Card.Body>
    </Card>
  );
}
