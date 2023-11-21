import React from "react";
import { MDBBtn, MDBBtnGroup } from "mdb-react-ui-kit";

function ButtonGroup({ handleSelectButton, create = true, edit = true, approve = true }) {
  const handleClick = (event) => {
    handleSelectButton(event.target.name);
  };
  return (
    <MDBBtnGroup className="mb-3">
      {create && (
        <MDBBtn name="create" onClick={handleClick}>
          Criar
        </MDBBtn>
      )}
      {edit && (
        <MDBBtn name="edit" onClick={handleClick}>
          Editar
        </MDBBtn>
      )}
      {approve && (
        <MDBBtn name="approve" onClick={handleClick}>
          Aprovar
        </MDBBtn>
      )}
    </MDBBtnGroup>
  );
}

export default ButtonGroup;
