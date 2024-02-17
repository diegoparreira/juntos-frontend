import React, { useState } from "react";
import { useCategories } from "../../../hooks/useCategories";
import { useUser } from "../../../context/UserContext";
import { Alert, Button, FloatingLabel, Form } from "react-bootstrap";
import { useContents } from "../../../hooks/useContents";

function ContentForm() {
  const { categories } = useCategories();
  const { user } = useUser();
  const emptyContent = {
    userId: user ? user.id : '',
    title: '',
    description: '',
    url: '',
    type: '',
    categoryId: '',
  };
  const { create } = useContents();
  const [newContent, setNewContent] = useState(emptyContent);
  const [validated, setValidated] = useState(false);
  const [statusResponse, setStatusResponse] = useState(null);

  const changeValue = (e) => {
    console.log(e);
    setNewContent({ ...newContent, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    setValidated(false);

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
    <Form noValidate validated={validated} onSubmit={(e) => handleSubmit(e)}>
      {statusResponse && (
        <Alert variant={statusResponse.status}>{statusResponse.message}</Alert>
      )}
      <Form.Group className="mb-3">
        <Form.Label>Título do conteúdo</Form.Label>
        <Form.Control
          name="title"
          type="text"
          placeholder="Digite o titulo do conteúdo"
          value={newContent.title}
          onChange={(e) => changeValue(e)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Digite um título
        </Form.Control.Feedback>
      </Form.Group>
      <FloatingLabel className="mb-3" label="Descrição">
        <Form.Control
          name="description"
          as="textarea"
          placeholder="Descreva o conteúdo"
          style={{ height: "100px" }}
          value={newContent.description}
          onChange={(e) => changeValue(e)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Digite um título
        </Form.Control.Feedback>
      </FloatingLabel>
      <Form.Group className="mb-3">
        <Form.Control
          name="url"
          type="text"
          placeholder="Link do conteúdo"
          value={newContent.url}
          onChange={(e) => changeValue(e)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Digite um link para o conteúdo
        </Form.Control.Feedback>
      </Form.Group>
      <FloatingLabel className="mb-3" label="Tipo">
        <Form.Select
          required
          onChange={(event) => changeValue(event)}
          name="type"
        >
          <option value="">Escolha o tipo de conteúdo</option>
          <option value="video">Video</option>
          <option value="pdf">PDF</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Selecione um valor
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel className="mb-3" label="Categoria">
        <Form.Select
          required
          onChange={(event) => changeValue(event)}
          name="categoryId"
        >
          <option value="">Escolha a categoria</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Escolha uma categoria
        </Form.Control.Feedback>
      </FloatingLabel>
      <Button variant="primary" type="submit">
        Confirmar
      </Button>
    </Form>
  );
}

export default ContentForm;
