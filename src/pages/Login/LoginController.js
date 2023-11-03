import axios from "axios";
import { useState } from "react";
import bcryptjs from "bcryptjs-react";

export function useLoginState() {
  const [inputEmail, setEmail] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const BASE_ENDPOINT = 'http://localhost:3000';

  const handleLogin = async () => {
    try {
      // Fazer uma requisição para a API para obter o usuário e a senha em hash
      console.log(`${BASE_ENDPOINT}/users/${inputEmail}`);
      const response = await axios.get(`${BASE_ENDPOINT}/users/${inputEmail}`);
      console.log(response);

      if (response.status === 200) {
        const {email, password_hash} = response.data;
        console.log(password_hash);
        // Verificar se a senha em hash corresponde à senha inserida pelo usuário
        const isTheSamePassword = await checkPasswordHash(inputPassword, password_hash);
        const isTheSameEmail = email === inputEmail;
        if (isTheSamePassword && isTheSameEmail) {
          setLoggedIn(true);
          alert("Login realizado com sucesso!!!");
        } else {
          alert("Email ou senha não conferem");
        }
      }
    } catch (error) {
      console.error("Erro ao fazer login", error);
    }
  };

  return { inputEmail, setEmail, inputPassword, setPassword, loggedIn, setLoggedIn, handleLogin };
}

const checkPasswordHash = async (password, hashPassword) => {
  return await bcryptjs.compare(password, hashPassword);
};
