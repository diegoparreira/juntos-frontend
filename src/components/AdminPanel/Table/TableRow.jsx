import { MDBBtn, MDBCheckbox } from "mdb-react-ui-kit";
import React, { useState } from "react";
import DetailModal from "../../DetailModal";
import EditModal from "../../EditModal";

function TableRow({ item, keys, approve, handleList }) {
  const [checked, setChecked] = useState(false);
  const [show, setShow] = useState(false);

  console.log("Debugging TableRow");
  console.log(item);
  console.log(keys);

  const handleChecked = (event) => {
    console.log(event.target.id);
    const {id} = event.target;
    setChecked(!checked)
    handleList(parseInt(id));
  }

  return (
    <>
      <tr>
        {approve && (
          <td>
            <MDBCheckbox
              id={item.id}
              checked={checked}
              onChange={(event) => handleChecked(event)}
            />
          </td>
        )}
        {keys &&
          keys.map((key, index) => {
            console.log("Debug map keys in TableRow");
            console.log(key);
            console.log(item[key]);
            return <td>{item[key]}</td>;
          })}
        {!approve && (
          <td>
            <MDBBtn color="link" rounded size="sm" onClick={() => setShow(true)}>
              Edit
            </MDBBtn>
          </td>
        )}
      </tr>
      {!approve && (
        <EditModal show={show} item={item} setShow={setShow} keys={keys} />
      )}
    </>
  );
}

export default TableRow;
