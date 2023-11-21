import React, { useState } from "react";
import { useCategories } from "../../../hooks/useCategories";
import { useUser } from "../../../context/UserContext";
import { Alert, Button, Form } from "react-bootstrap";
import InputColor from "react-input-color";

function CategoryForm() {
  const { create } = useCategories();
  const { user } = useUser();
  const [newCategory, setNewCategory] = useState({ userId: user.id });
  const [statusResponse, setStatusResponse] = useState(null);

  const changeValue = (e) => {
    console.log(e);
    setNewCategory({ ...newCategory, [e.target.name]: e.target.value });
  };

  const changeColor = (e) => {
    setNewCategory({ ...newCategory, color: e.hex });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <Form onSubmit={(e) => handleSubmit(e)}>
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
        />
      </Form.Group>
      <div>
        <InputColor
          initialValue="#5e72e4"
          onChange={(e) => changeColor(e)}
          placement="right"
          name="color"
        />
        <div
          style={{
            width: 50,
            height: 50,
            marginTop: 20,
            // backgroundColor: newData.color.rgba,
          }}
        />
      </div>
      <Button variant="primary" type="submit">
        Confirmar
      </Button>
    </Form>
  );
}

export default CategoryForm;
