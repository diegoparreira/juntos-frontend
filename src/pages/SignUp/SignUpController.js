import { useState } from "react";
import { useUser } from "../../context/UserContext";
import {} from 'react-router-dom';

export function useSignUpState() {
  const emptyUser = {
    firstName: "", 
    lastName: "",
    email: "",
    username: "",
    password: "",
    avatar_url: "",
    birthdate: ""
  }
  const [newUser, setNewUser] = useState(emptyUser);
  const [birthdate, setBirthdate] = useState("");
  const [error, setError] = useState({error: false, message: ""});
  const { createUser } = useUser();

  const handleSignUp = async (event) => {
    event.preventDefault();
    console.log("Debug newUser:");
    console.log(newUser);
    try {
      const {status, message} = await createUser(newUser);

      if(status !== 201){
        setError({error: true, message: message});
      }
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
