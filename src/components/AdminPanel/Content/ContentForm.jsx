import React, { useState } from "react";
import { useCategories } from "../../../hooks/useCategories";
import { useUser } from "../../../context/UserContext";
import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";
import { useContents } from "../../../hooks/useContents";

function ContentForm() {
  const { categories } = useCategories();
  const { user } = useUser();
  const { create } = useContents();
  const [newContent, setNewContent] = useState({ userId: user.id });
  const [statusResponse, setStatusResponse] = useState(null);

  const changeValue = (e) => {
    console.log(e);
    setNewContent({ ...newContent, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    newContent.categoryId = parseInt(newContent.categoryId);
    const result = await create(newContent);
    if (result.status === 201) {
      setStatusResponse({
        status: "success",
        message: "Conteúdo enviada para aprovação",
      });
    } else {
      setStatusResponse({
        status: "danger",
        message: "Erro ao criar conteúdo",
      });
    }
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      {statusResponse && (
        <Alert variant={statusResponse.status}>{statusResponse.message}</Alert>
      )}
      <Form.Group className="mb-3">
        <Form.Control
          name="title"
          type="text"
          placeholder="Digite o titulo do conteúdo"
          value={newContent.title}
          onChange={(e) => changeValue(e)}
        />
      </Form.Group>
      <FloatingLabel className="mb-3" label="Descrição">
        <Form.Control
          name="description"
          as="textarea"
          placeholder="Descreva o conteúdo"
          style={{ height: "100px" }}
          value={newContent.description}
          onChange={(e) => changeValue(e)}
        />
      </FloatingLabel>
      <Form.Group className="mb-3">
        <Form.Control
          name="url"
          type="text"
          placeholder="Link do conteúdo"
          value={newContent.url}
          onChange={(e) => changeValue(e)}
        />
      </Form.Group>
      <FloatingLabel className="mb-3" label="Tipo">
        <Form.Select onChange={(event) => changeValue(event)} name="type">
          <option>Escolha o tipo de conteúdo</option>
          <option value="video">Video</option>
          <option value="pdf">PDF</option>
        </Form.Select>
      </FloatingLabel>
      <FloatingLabel className="mb-3" label="Categoria">
        <Form.Select onChange={(event) => changeValue(event)} name="categoryId">
          <option>Escolha a categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Select>
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Confirmar
      </Button>
    </Form>
  );
}

export default ContentForm;
