import { MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useUser } from "../context/UserContext";

export default function CommentInput({ contentId, handleNewComment }) {
  const { user } = useUser();
  const emptyComment = {
    content: "",
    userId: user.id,
    contentId: contentId
  }
  const [newComment, setNewComment] = useState(emptyComment);
 
  const handleEnter = async (event) => {
    if(event.key === "Enter"){
      const result = await handleNewComment(newComment);
      if(result.status === 201){
        alert('Comentário enviado para aprovação');
      }else {
        alert('Erro ao criar o comentário');
      }
      setNewComment(emptyComment);
    }
  }

  return (
    <MDBInput
      wrapperClass="mb-4"
      placeholder="Type comment..."
      label="Make Comment"
      value={newComment.content}
      onChange={(e) => setNewComment({...newComment, content: e.target.value})}
      onKeyDown={handleEnter}
    />
  );
}
