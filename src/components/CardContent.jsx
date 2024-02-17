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
        className={`card-img ${type === "pdf" ? "pdf-thumb" : ""}`}
        variant="top"
        style={{maxHeight: "173px"}}
        src={type === "video" ? Util.getThumb(content.url) : pdfImg}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <DetailModal
          show={show}
          content={content}
          setShow={setShow}
        />
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" className="mb-5" onClick={() => setShow(true)}>
          Ver detalhes
        </Button>
      </Card.Footer>
    </Card>
  );
}
