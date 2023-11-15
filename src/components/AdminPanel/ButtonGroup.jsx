import React from "react";
import { MDBBtn, MDBBtnGroup, MDBContainer } from 'mdb-react-ui-kit'


function ButtonGroup({handleSelectButton}) {

    const handleClick = (event) => {
        handleSelectButton(event.target.name);
    }
  return (
    <MDBBtnGroup className="mb-3">
      <MDBBtn name="create" onClick={handleClick}>
        Criar
      </MDBBtn>
      <MDBBtn name="edit" onClick={handleClick}>Editar</MDBBtn>
      <MDBBtn name="approve" onClick={handleClick}>Aprovar</MDBBtn>
    </MDBBtnGroup>
  );
}

export default ButtonGroup;
