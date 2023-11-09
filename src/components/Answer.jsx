import React from "react";
import { MDBCol, MDBIcon, MDBRow, MDBCardImage } from "mdb-react-ui-kit";
import Util from "../utils/util"; 

export default function Answer({answer}) {
    console.log(answer);
    const {User} = answer;
  return (
    <MDBRow>
      <MDBCol>
        <div className="d-flex flex-end">
          <div className="flex-grow-1 flex-shrink-1">
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <p className="mb-1">
                  {User.fullName}{" "}
                  <span className="small">{Util.formatDate(answer.createdAt)}</span>
                </p>
              </div>
              <p className="small mb-0">{answer.content}</p>
            </div>
          </div>
          <MDBCardImage
            className="rounded-circle shadow-1-strong ms-3"
            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
            alt="avatar"
            width="65"
            height="65"
          />
        </div>
      </MDBCol>
    </MDBRow>
  );
}
