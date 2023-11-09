import axios from "axios";
import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export function useSignUpState() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { login } = useUser();
  const navigate = useNavigate();

  const makeBody = () => {
    console.log(birthdate);
    console.log(birthdate.toJSON());
    return {
      firstName: firstName, 
      lastName: lastName,
      email: email,
      username: username,
      password: password,
      avatar_url: avatarUrl,
      birthdate: birthdate.toJSON()
    }
  }

  const makeHeader = () => {
    return {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  }

  const BASE_ENDPOINT = "http://localhost:3003";

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      // Fazer uma requisição para a API para obter o usuário e a senha em hash
      console.log(`${BASE_ENDPOINT}/users/`);
      const data = makeBody();
      const header = makeHeader();
      const response = await axios.post(`${BASE_ENDPOINT}/users/`, data, header);
      console.log(response);
      
      if (response.status === 201) {
        console.log(response.data);
        const {data} = response;
        login(data);
        setError(false);
        navigate("/home");
      }else {
        console.log(response);
        setError(true);
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      const { message } = error.response.data;
      setError(true);
      setErrorMessage(message);
    }
  };

  return {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    username,
    setUsername,
    password,
    setPassword,
    birthdate,
    setBirthdate,
    avatarUrl,
    setAvatarUrl,
    error,
    errorMessage,
    handleSignUp
  };
}
