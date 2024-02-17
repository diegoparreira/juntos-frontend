import { MDBInput, MDBInputGroup } from "mdb-react-ui-kit";
import React, { useState } from "react";

function SearchBar() {
  const [findQuery, setFindQuery] = useState("");
  const changeValue = (e) => {
    setFindQuery(e.target.value);
  };
  return (
    <MDBInputGroup className="w-50 bg-white">
      <MDBInput
        label="Busca"
        type="text"
        name="findquery"
        value={findQuery}
        size="md"
        onChange={changeValue}
      />
    </MDBInputGroup>
  );
}

export default SearchBar;
