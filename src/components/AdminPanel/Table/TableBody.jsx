import { MDBTableBody } from 'mdb-react-ui-kit'
import React from 'react'
import TableRow from './TableRow'

function TableBody({data, keys, approve, handleList}) {
  console.log('Debug TableBody:');
  console.log(data);
  console.log(keys);

  return (
    <MDBTableBody>
        {data && data.map(item => {
          console.log(item);
          return <TableRow item={item} key={item.id} keys={keys} approve={approve} handleList={handleList} />
        })}
    </MDBTableBody>
  )
}

export default TableBody