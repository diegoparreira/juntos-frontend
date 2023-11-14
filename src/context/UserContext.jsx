import React, { createContext, useContext, useState } from 'react';
import usePostRequest from '../hooks/usePostRequest';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Você pode inicializar com null ou com as informações do usuário
  const { post } = usePostRequest("users/");

  const login = (userData) => {
    // Lógica para fazer login e atualizar o estado do usuário
    console.log('Definindo o contexto do usuário');
    console.log(userData);
    setUser(userData);
  };

  const logout = () => {
    // Lógica para fazer logout e limpar o estado do usuário
    setUser(null);
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