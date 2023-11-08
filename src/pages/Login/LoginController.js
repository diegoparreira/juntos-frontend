import axios from "axios";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Util from "../../utils/util";

export function useLoginState() {
  const [inputEmail, setEmail] = useState("");
  const [inputPassword, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const BASE_ENDPOINT = "http://localhost:3003";

  const handleLogin = async (event) => {
    event.preventDefault();
    
    if( !inputEmail || !inputPassword){
      setError(true);
      setErrorMessage("Os campos são obrigatórios");
      return;
    }

    try {
      // Fazer uma requisição para a API para obter o usuário e a senha em hash
      console.log(`${BASE_ENDPOINT}/users/${inputEmail}`);
      const response = await axios.get(`${BASE_ENDPOINT}/users/${inputEmail}`);
      console.log(response);

      if (response.status === 200) {
        const userData = response.data;
        const { email, password_hash } = userData;
        console.log(email);
        console.log(password_hash);
        // Verificar se a senha em hash corresponde à senha inserida pelo usuário
        const isTheSamePassword = await Util.checkPasswordHash(
          inputPassword,
          password_hash
        );
        const isTheSameEmail = email === inputEmail;
        if (isTheSamePassword && isTheSameEmail) {
          login(userData);
          setError(false);
          navigate("/home");
        } else {
          setError(true);
          setErrorMessage("Email ou senha não conferem");
        }
      }
    } catch (error) {
      const { message } = error.response.data;
      setError(true);
      setErrorMessage(message);
    }
  };

  return {
    inputEmail,
    setEmail,
    inputPassword,
    setPassword,
    handleLogin,
    error,
    errorMessage,
  };
}
