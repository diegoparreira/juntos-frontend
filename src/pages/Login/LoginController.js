import axios from "axios";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Util from "../../utils/util";

export function useLoginState() {
  const [data, setData] = useState({email: '', password: ''});
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const handleChangeData = (event) => {
    setData({...data, [event.target.name]: event.target.value});
  }

  const BASE_ENDPOINT = process.env.REACT_APP_BASE_API;

  const handleLogin = async (event) => {
    event.preventDefault();
    
    if( !data.email || !data.password){
      setError(true);
      setErrorMessage("Os campos são obrigatórios");
      return;
    }

    try {
      // Fazer uma requisição para a API para obter o usuário e a senha em hash
      const resource = "users/";
      const inputEmail = data.email;
      const inputPassword = data.password;
      const response = await axios.get(`${BASE_ENDPOINT}${resource}${inputEmail}`);

      if (response.status === 200) {
        const userData = response.data;
        const { email, password_hash } = userData;

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
    data,
    handleChangeData,
    handleLogin,
    error,
    errorMessage,
  };
}
