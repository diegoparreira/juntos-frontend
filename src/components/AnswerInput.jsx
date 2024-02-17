import { MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useUser } from "../context/UserContext";
import { useAnswers } from "../hooks/useAnswers";

export default function AnswerInput({ commentId }) {
  const { user } = useUser();
  const { handleNewAnswer } = useAnswers(commentId);
  const emptyAnswer = {
    content: "",
    userId: user.id,
    commentId: commentId
  }
  const [newAnswer, setNewAnswer] = useState(emptyAnswer);
 
  const handleEnter = async (event) => {
    if(event.key === "Enter"){
      const result = await handleNewAnswer(newAnswer);
      console.log(result);
      if(result.status === 201){
        alert('Resposta enviada para aprovação');
      }else {
        alert('Erro ao criar o resposta');
      }
      setNewAnswer(emptyAnswer);
    }
  }

  return (
    <MDBInput
      wrapperClass="mb-4 mt-2"
      placeholder="Digite sua resposta"
      label="Responder"
      value={newAnswer.content}
      onChange={(e) => setNewAnswer({...newAnswer, content: e.target.value})}
      onKeyDown={handleEnter}
    />
  );
}
