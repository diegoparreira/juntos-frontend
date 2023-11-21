import React from "react";
import { MDBCol, MDBIcon, MDBRow, MDBCardImage } from "mdb-react-ui-kit";
import Answer from "./Answer";
import Util from "../utils/util"; 

export default function Comment({ comment }) {
  console.log("Debug Comment Component");
  console.log(comment);
  console.log(comment.User);
  console.log(comment.Answers);
  const { User } = comment;
  const { Answers } = comment;
  return (
    <MDBRow>
      <MDBCol>
        <div className="d-flex flex-start">
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
                <a href="#!">
                  <MDBIcon fas icon="reply fa-xs" />
                  <span className="small"> reply</span>
                </a>
              </div>
              <p className="small mb-0">{comment.content}</p>
            </div>

            <div className="d-flex flex-start mt-4">
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
