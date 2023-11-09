import { MDBInput } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useComments } from "../hooks/useComment";

export default function CommentInput({ contentId, userId, handleNewComment }) {
  const { newComment, setNewComment } = useComments();

  const handleEnter = (event) => {
    if(event.key === "Enter"){
      handleNewComment(newComment, userId, contentId);
    }
  }

  return (
    <MDBInput
      wrapperClass="mb-4"
      placeholder="Type comment..."
      label="Make Comment"
      value={newComment}
      onChange={(e) => setNewComment(e.target.value)}
      onKeyDown={handleEnter}
    />
  );
}
