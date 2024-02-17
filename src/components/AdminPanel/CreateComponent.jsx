import TableGen from './TableGen';
import CategoryForm from './Category/CategoryForm';
import ContentForm from './Content/ContentForm';

const checkComponentToRender = (clicked, selectedModel) => {
    if(clicked.localeCompare('create') === 0 && selectedModel === 'contents'){
        return (<ContentForm />);
    }
    if(clicked.localeCompare('create') === 0 && selectedModel === 'categories'){
        return (<CategoryForm />);
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