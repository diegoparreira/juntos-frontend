import React from "react";
import Comment from "./Comment";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import CommentInput from "./CommentInput";
import { useComments } from "../hooks/useComments";

export default function CommentList({contentId}) {
  const { comments, handleNewComment } = useComments(contentId);

  return (
    <section className="gradient-custom vh-100">
      <MDBContainer className="py-5" style={{ maxWidth: "1000px" }}>
        <MDBRow className="justify-content-center">
          <MDBCol md="12" lg="10" xl="8">
            <MDBCard>
              <MDBCardBody className="p-4">
                <MDBTypography tag="h4" className="text-center mb-4 pb-2">
                  Comentários
                </MDBTypography>
                <CommentInput contentId={contentId} handleNewComment={handleNewComment}/>
                <MDBRow>
                  {comments.map((comment) => (
                    <Comment comment={comment} />
                  ))}
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
