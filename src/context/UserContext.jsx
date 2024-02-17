import React, { createContext, useContext, useState } from 'react';
import usePostRequest from '../hooks/usePostRequest';
import { redirect } from 'react-router-dom';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const { post } = usePostRequest("users/");

  const login = (userData) => {
    console.log('Definindo o contexto do usuário');
    console.log(userData);
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
    redirect("/");
  };

  const createUser = async (newUser) => {
    const result = await post(newUser);
    console.log(result);
    if(result.status === 201){
      login(result.data);
    }
    return result;
  }

  return (
    <UserContext.Provider value={{ user, login, logout, createUser }}>
      {children}
    </UserContext.Provider>
  );
};