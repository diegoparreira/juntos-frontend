import React from 'react'
import Content from '../Content/Content';
import Category from '../Category/Category';
import Comment from '../Comment/Comment';
import Answer from '../Answer/Answer';
import User from '../User/User';
import navValues from '../../../utils/navValues';
import { useNavContext } from '../../../context/NavContext';

function ComponentPicker() {
    const {nav} = useNavContext();
    switch (nav.current){
        case navValues.users:
            return <User selectedModel={nav.current}/>;
        case navValues.contents:
            return <Content selectedModel={nav.current}/>;
        case navValues.categories:
            return <Category selectedModel={nav.current}/>;
        case navValues.comments:
            return <Comment selectedModel={nav.current}/>;
        case navValues.answers:
            return <Answer selectedModel={nav.current}/>;    
        default:
            return (
                <h3>
                    Ocorreu um erro
                </h3>
            )
    }
}

export default ComponentPicker