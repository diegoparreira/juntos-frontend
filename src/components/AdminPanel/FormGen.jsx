import { useState } from "react";
import { Alert, FloatingLabel } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import usePostRequest from "../../hooks/usePostRequest";
import { useUser } from "../../context/UserContext";

function FormGen({ data, selectedModel }) {
  const { user } = useUser();
  const [newData, setData] = useState({ userId: user.id });
  const [statusResponse, setStatusResponse] = useState({});
  const { post } = usePostRequest(selectedModel);
  console.log("Debug data in FormGen");
  console.log(data);

  const changeValue = (e) => {
    console.log(e);
    setData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(newData);
    const typeIndex = parseInt(newData.type);
    const categoryIndex = parseInt(newData.categoryId);
    newData.categoryId = data.categoryId.options[categoryIndex].id;
    newData.type = data.type.options[typeIndex].name;
    const result = await post(newData);
    if (result.status === 201) {
      setStatusResponse({
        status: "success",
        message: "Conteúdo enviado para aprovação",
      });
    } else {
      setStatusResponse({
        status: "danger",
        message: "Erro ao postar conteúdo",
      });
    }
  };

  const handleDataInput = (element, index) => {
    if (["text", "email", "password"].includes(element.type)) {
      return (
        <Form.Group className="mb-3" key={index}>
          <Form.Control
            name={element.name}
            type={element.type}
            placeholder={element.placeholder}
            value={newData[element.name]}
            onChange={(e) => changeValue(e)}
          />
        </Form.Group>
      );
    }
    if (element.type === "textarea") {
      return (
        <FloatingLabel className="mb-3" label={element.label}>
          <Form.Control
            name={element.name}
            as="textarea"
            placeholder={element.placeholder}
            style={{ height: "100px" }}
            value={newData[element.name]}
            onChange={(e) => changeValue(e)}
          />
        </FloatingLabel>
      );
    }
    if (element.type === "select") {
      return (
        <FloatingLabel className="mb-3" label={element.label} key={index}>
          <Form.Select
            onChange={(event) => changeValue(event)}
            name={element.name}
          >
            <option>Escolha uma opção</option>
            {element.options.map((option, index) => handleOption(option, index))}
          </Form.Select>
        </FloatingLabel>
      );
    }
  };

  const handleOption = (option, index) => {
    console.log(option);
    return <option key={option.id} value={index}>{option.name}</option>;
  };

  const handleInputList = () => {
    const keys = Object.keys(data);
    const inputsList = [];
    keys.forEach((key, index) => {
      inputsList.push(handleDataInput(data[key], index));
    });
    return inputsList;
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      {statusResponse.status && (
        <Alert variant={statusResponse.status}>{statusResponse.message}</Alert>
      )}
      {handleInputList()}
      <Button variant="primary" type="submit">
        Confirmar
      </Button>
    </Form>
  );
}

export default FormGen;
