import { Col, Container } from "react-bootstrap";
import NavbarApp from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { NavigationContextProvider } from "../../context/NavContext";
import ComponentPicker from "../../components/AdminPanel/ComponentPicker/ComponentPicker";

export default function Admin() {
  return (
    <>
      <NavigationContextProvider>
        <NavbarApp />
        <Container fluid className="d-flex h-100">
          <Col xs={3}>
            <Sidebar/>
          </Col>
          <Col xs={9}>
            <ComponentPicker />
          </Col>
        </Container>
      </NavigationContextProvider>
    </>
  );
}
