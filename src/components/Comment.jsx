import React, { useState } from "react";
import { MDBCol, MDBIcon, MDBRow, MDBCardImage } from "mdb-react-ui-kit";
import Answer from "./Answer";
import Util from "../utils/util"; 
import AnswerInput from "./AnswerInput";
import { useAnswers } from "../hooks/useAnswers";

export default function Comment({ comment }) {
  const { User } = comment;
  const { Answers } = comment;
  const [showReply, setShowReply] = useState(false);

  return (
    <MDBRow>
      <MDBCol>
        <div className="d-flex flex-start mt-2">
          <MDBCardImage
            className="rounded-circle shadow-1-strong me-3"
            src={User.avatar}
            alt="avatar"
            width="65"
            height="65"
          />
          <div className="flex-grow-1 flex-shrink-1">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-1">
                  {User.fullName}{" "}
                  <span className="small">{Util.formatDate(comment.createdAt)}</span>
                </p>
                <a href="#!" onClick={() => setShowReply(!showReply)}>
                  <MDBIcon fas icon="reply fa-xs" />
                  <span className="small"> Responder</span>
                </a>
              </div>
              <p className="small mb-0">{comment.content}</p>
            </div>
            {showReply && <AnswerInput commentId={comment.id} />} 

            <div className="d-flex flex-column flex-start mt-4">
              {Answers &&
                Answers.map((answer) => {
                  return <Answer answer={answer} />;
                })}
            </div>
          </div>
        </div>
      </MDBCol>
    </MDBRow>
  );
}
