import React from 'react';
import Content from '../Content/Content';
import Category from '../Category/Category';
import Comment from '../Comment/Comment';
import Answer from '../Answer/Answer';
import User from '../User/User';
import navValues from '../../../utils/navValues';
import { useNavContext } from '../../../context/NavContext';

const componentMap = {
  [navValues.users]: User,
  [navValues.contents]: Content,
  [navValues.categories]: Category,
  [navValues.comments]: Comment,
  [navValues.answers]: Answer,
};

function ComponentPicker() {
  const { nav } = useNavContext();
  const Component = componentMap[nav.current];

  if (Component) {
    return <Component selectedModel={nav.current} />;
  }

  return <h3>Ocorreu um erro</h3>;
}

export default ComponentPicker;