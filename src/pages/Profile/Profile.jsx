import React from "react";
import NavbarApp from "../../components/Navbar";
import { Container } from "react-bootstrap";
import ProfileForm from "./ProfileForm";

function Profile() {
  return (
    <>
      <NavbarApp />
      <Container fluid className="d-flex h-100">
        <ProfileForm />
      </Container>
    </>
  );
}

export default Profile;
