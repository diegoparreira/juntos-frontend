import React, { useState } from "react";
import CreateComponent from "../CreateComponent";
import ButtonGroup from "../ButtonGroup";
import { MDBContainer, MDBTypography } from "mdb-react-ui-kit";

function User({ selectedModel }) {
  const [selectedButton, setSelectedButton] = useState("approve");
  const handleSelectButton = (clicked) => {
    console.log("Clicked button name is: " + clicked);
    setSelectedButton(clicked);
  };

  return (
    <MDBContainer className="mt-3">
      <ButtonGroup
        handleSelectButton={handleSelectButton}
        create={false}
        edit={false}
        approve={false}
      />
      <MDBTypography variant="h2">Usuários</MDBTypography>
      <CreateComponent clicked={selectedButton} selectedModel={selectedModel} />
    </MDBContainer>
  );
}

export default User;
