
import React, { useState } from 'react'
import CreateComponent from '../CreateComponent'
import ButtonGroup from '../ButtonGroup';
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';

function Category({selectedModel}) {
  const [selectedButton, setSelectedButton] = useState('create');
  const handleSelectButton = (clicked) => {
    console.log('Clicked button name is: ' + clicked);
    setSelectedButton(clicked);
  }
  return (
    <MDBContainer className='mt-3 d-flex flex-column align-items-center'>
        <ButtonGroup handleSelectButton={handleSelectButton} />
        <MDBTypography variant='h2'>Categorias</MDBTypography>
        <CreateComponent clicked={selectedButton} selectedModel={selectedModel} />
    </MDBContainer>
  )
}

export default Category