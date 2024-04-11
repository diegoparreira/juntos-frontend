import React from 'react';
import TableGen from './TableGen';
import CategoryForm from './Category/CategoryForm';
import ContentForm from './Content/ContentForm';

const componentMap = {
  create: {
    contents: <ContentForm />,
    categories: <CategoryForm />,
  },
  edit: selectedModel => <TableGen selectedModel={selectedModel} approve={false} />,
  approve: selectedModel => <TableGen selectedModel={selectedModel} approve={true} />,
};

function CreateForm({ clicked, selectedModel }) {
  const Component = componentMap[clicked];

  // Se o Component for uma função, passamos selectedModel como prop
  if (typeof Component === 'function') {
    return Component(selectedModel);
  }

  // Se o Component for um objeto, retornamos o componente correspondente ao selectedModel
  if (typeof Component === 'object') {
    return Component[selectedModel] || null;
  }

  // Se não houver correspondência, retornamos null
  return null;
}

export default CreateForm;