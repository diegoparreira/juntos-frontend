import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Você pode inicializar com null ou com as informações do usuário

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

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};