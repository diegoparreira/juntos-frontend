import React, { useState } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBInputGroup,
  MDBInput,
} from "mdb-react-ui-kit";
import { Person } from "@mui/icons-material";
import { useUser } from "../../context/UserContext";
import usePostRequest from "../../hooks/usePostRequest";
import Util from "../../utils/util";
import { Alert } from "react-bootstrap";

function ProfileForm() {
  const { user } = useUser();
  const { avatar } = user || <Person />;
  const [newData, setNewData] = useState({});
  const [statusResponse, setStatusResponse] = useState({});
  const { post } = usePostRequest("users/");

  const changeValue = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { currentpassword, newpassword, checkpassword } = newData;
    if (newpassword !== checkpassword) {
      setStatusResponse({
        status: "danger",
        message: "As senhas digitadas não conferem",
      });
      return;
    }
    if (!Util.checkPasswordHash(currentpassword, user.password_hash)) {
      setStatusResponse({
        status: "danger",
        message: "A senha atual não confere",
      });
      return;
    }
    const body = {
      email: user.email,
      password: newpassword,
    };
    const res = await post(body, 'password');
    if (res.status === 200) {
      setStatusResponse({
        status: "success",
        message: "A senha foi alterada com sucesso",
      });
    }
    console.log(res);
  };

  const handleMentor = async () => {
    alert('Solicitou para virar mentor');
    const body = {
      id: user.id
    }
    const res = await post(body, 'mentor');
    if(res.status === 201){
      setStatusResponse({
        status: "success",
        message: "Solicitação efetuada com sucesso",
      });
    }else {
      setStatusResponse({
        status: "danger",
        message: "Algo de errado aconteceu com a solicitação",
      });
    }
  }

  return (
    <MDBContainer className="container py-2 h-100">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol md="12" xl="4">
          <MDBCard style={{ borderRadius: "15px" }}>
            <MDBCardBody className="text-center">
              <div className="mt-3 mb-4">
                <MDBCardImage
                  src={avatar}
                  className="rounded-circle"
                  fluid
                  style={{ width: "100px" }}
                />
              </div>
              <MDBTypography tag="h3">{user.fullName}</MDBTypography>
              <MDBTypography tag="h6">{`Tipo de usuário: ${user.type}`}</MDBTypography>
              <label className="form-label">Alterar senha</label>
              {statusResponse.status && (
                <Alert variant={statusResponse.status}>
                  {statusResponse.message}
                </Alert>
              )}
              <MDBInputGroup className="d-flex flex-column">
                <MDBInput
                  label="Senha atual"
                  type="password"
                  name="currentpassword"
                  onChange={changeValue}
                />
                <MDBInput
                  label="Nova senha"
                  type="password"
                  name="newpassword"
                  onChange={changeValue}
                />
                <MDBInput
                  label="Confirmar senha"
                  type="password"
                  name="checkpassword"
                  onChange={changeValue}
                />
                <MDBBtn className="mt-3" onClick={handleSubmit}>
                  Confirmar
                </MDBBtn>
              </MDBInputGroup>
            </MDBCardBody>
          </MDBCard>
        {user.type === 'student' && (
          <MDBBtn onClick={handleMentor}>Pedir para se tornar mentor</MDBBtn>
        )}
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default ProfileForm;
