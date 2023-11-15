import FormGen from './FormGen';
import TableGen from './TableGen';

const data = {
    title: {
        label: 'Título',
        type: 'text',
        placeholder: 'Título do conteúdo',
        name: 'title' 
    },
    description: {
        label: 'Descrição',
        type: 'textarea',
        placeholder: 'Descrição do conteúdo',
        as: 'textarea',
        name: 'description' 
    },
    url: {
        label: 'Link',
        type: 'text',
        placeholder: 'Link para o conteúdo',
        name: 'url' 
    },
    type: {
        label: 'Tipo',
        type: 'select',
        options: [{name: 'video', id: 1}, {name: 'pdf', id: 2}],
        name: 'type' 
    },
    categoryId: {
        label: 'Categoria',
        type: 'select',
        options: [
            {
                "id": 1,
                "name": "Matemática",
                "color": "#000000",
                "active": 0,
                "createdAt": "2023-11-09T04:48:20.000Z",
                "updatedAt": "2023-11-09T04:48:20.000Z",
                "UserId": 1
            },
            {
                "id": 2,
                "name": "F",
                "color": "#000000",
                "active": 0,
                "createdAt": "2023-11-09T04:48:26.000Z",
                "updatedAt": "2023-11-09T04:48:26.000Z",
                "UserId": 1
            },
            {
                "id": 3,
                "name": "S",
                "color": "#000000",
                "active": 0,
                "createdAt": "2023-11-09T04:48:28.000Z",
                "updatedAt": "2023-11-09T04:48:28.000Z",
                "UserId": 1
            }
        ],
        name: 'categoryId' 
    } 
}

const checkComponentToRender = (clicked, selectedModel) => {
    if(clicked.localeCompare('create') === 0){
        return (<FormGen data={data} selectedModel={selectedModel} />);
    }
    if(clicked.localeCompare('edit') === 0){
        return (<TableGen selectedModel={selectedModel} approve={false}/>);
    }
    if(clicked.localeCompare('approve') === 0){
        return (<TableGen selectedModel={selectedModel} approve={true}/>);
    }    
}

function CreateForm({clicked, selectedModel}) {
    return checkComponentToRender(clicked, selectedModel);
}

export default CreateForm