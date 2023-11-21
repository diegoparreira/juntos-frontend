
import React, { useState } from 'react'
import CreateComponent from '../CreateComponent'
import ButtonGroup from '../ButtonGroup';
import { MDBContainer, MDBTypography } from 'mdb-react-ui-kit';
import { useCategories } from '../../../hooks/useCategories';

function Content({selectedModel}) {
  const [selectedButton, setSelectedButton] = useState('create');
  const { categories } = useCategories();
  const handleSelectButton = (clicked) => {
    console.log('Clicked button name is: ' + clicked);
    setSelectedButton(clicked);
  }
  
  return (
    <MDBContainer className='mt-3'>
        <ButtonGroup handleSelectButton={handleSelectButton} />
        <MDBTypography variant='h2'>{(selectedModel).toUpperCase()}</MDBTypography>
        <CreateComponent clicked={selectedButton} selectedModel={selectedModel} categories={categories} />
    </MDBContainer>
  )
}

export default Content