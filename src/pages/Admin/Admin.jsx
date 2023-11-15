import { useState } from "react";
import { Col, Container } from "react-bootstrap";
import NavbarApp from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import ComponentContent from "../../components/AdminPanel/ComponentContent";

export default function Admin() {
    const [selectedModel, setSelectedModel] = useState('contents');
    const nav = (navTo) => {
        alert('Clicou no: ' + navTo);
        setSelectedModel(navTo)
    };

    return(
        <>
            <NavbarApp />
            <Container fluid className="d-flex h-100" >
                <Col xs={3}>
                    <Sidebar handleChange={nav}/>
                </Col>
                <Col xs={9}>
                    <ComponentContent selectedModel={selectedModel}/>
                </Col>
            </Container>
        </>        
    )
}