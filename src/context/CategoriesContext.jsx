import React, { createContext, useContext, useState } from 'react';
import usePostRequest from '../hooks/usePostRequest';

const CategoriesContext = createContext();

export const useCategories = () => {
  return useContext(CategoriesContext);
};

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const { post } = usePostRequest("categories/");

  const create = async (newCategory) => {
    const result = await post(newCategory);
    console.log(result);
    if(result.status === 201){
        // TODO
    }
    return result;
  }

  const getAllCategories = async() => {

  }

  const getAllUnaprovedCategories = async () => {

  }

  const editCategoryColor = async () => {
    
  }

  return (
    <CategoriesContext.Provider value={{ categories, create }}>
      {children}
    </CategoriesContext.Provider>
  );
};