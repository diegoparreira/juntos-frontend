import { MDBTableHead } from "mdb-react-ui-kit";
import React from "react";

function TableHead({keys, approve}) {
  return (
    <MDBTableHead>
      <tr>
        {approve && (<th scope="col">Approve?</th>)}
        {keys.map(e => {
          return (<th scope="col">{e}</th>)
        })}
      </tr>
    </MDBTableHead>
  );
}

export default TableHead;
