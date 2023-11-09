import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import DetailModal from "./DetailModal";
import { useState } from 'react';

export default function CardContent({content}) {
    const {title, type} = content;
    const [show, setShow] = useState(false);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle >Tipo de conteúdo: {type}</Card.Subtitle>
        <Button variant="primary" onClick={() => setShow(true)}>Ver detalhes</Button>
        <DetailModal show={show} content={content} setShow={setShow}/>
      </Card.Body>
    </Card>
  );
};
