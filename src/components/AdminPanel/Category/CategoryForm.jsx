import React, { useState } from "react";
import { useCategories } from "../../../hooks/useCategories";
import { useUser } from "../../../context/UserContext";
import { Alert, Button, Form } from "react-bootstrap";
import InputColor from "react-input-color";

function CategoryForm() {
  const { create } = useCategories();
  const { user } = useUser();
  const emptyCategory = {
    userId: user ? user.id : "",
    name: "",
    color: "#fff",
  };
  const [newCategory, setNewCategory] = useState(emptyCategory);
  const [validated, setValidated] = useState(false);
  const [statusResponse, setStatusResponse] = useState(null);

  const changeValue = (e) => {
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const changeColor = (e) => {
    setNewCategory({ ...newCategory, color: e.hex });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }
    const result = await create(newCategory);
    if (result.status === 201) {
      setStatusResponse({
        status: "success",
        message: "Categoria enviada para aprovação",
      });
    } else {
      setStatusResponse({
        status: "danger",
        message: "Erro ao criar categoria",
      });
    }
  };

  return (
    <Form className="w-50" validated={validated} onSubmit={(e) => handleSubmit(e)}>
      {statusResponse && (
        <Alert variant={statusResponse.status}>{statusResponse.message}</Alert>
      )}
      <Form.Group className="mb-3">
        <Form.Control
          name="name"
          type="text"
          placeholder="Digite o nome da categoria"
          value={newCategory.name}
          onChange={(e) => changeValue(e)}
          required
        />
        <Form.Control.Feedback type="invalid">
          Digite um nome para a categoria
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="d-flex flex-column align-items-center mb-3">
        <Form.Label>Escolha uma cor</Form.Label>
        <Form.Control
          as={InputColor}
          initialValue="#000"
          onChange={(e) => changeColor(e)}
          placement="right"
          name="color"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Confirmar
      </Button>
    </Form>
  );
}

export default CategoryForm;
