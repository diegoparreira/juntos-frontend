import { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from 'react-router-dom';
import dayjs from "dayjs";

export function useSignUpState() {
  const emptyUser = {
    firstName: "", 
    lastName: "",
    email: "",
    username: "",
    password: "",
    avatar: "",
    birthdate: ""
  }
  const [newUser, setNewUser] = useState(emptyUser);
  const [birthdate, setBirthdate] = useState(dayjs());
  const [error, setError] = useState({error: false, message: ""});
  const { createUser } = useUser();
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log("Debug newUser:");
    console.log(newUser);
    try {
      const {status, message} = await createUser(newUser);

      if(status !== 201){
        setError({error: true, message: message});
      }
      navigate("/home");
    } catch (error) {
      console.log(error);
      setError({error: true, message: "Erro não mapeado, consulte administrador."});
    }
  };

  return {
    newUser,
    setNewUser,
    birthdate,
    setBirthdate,
    error,
    handleSignUp
  };
}
