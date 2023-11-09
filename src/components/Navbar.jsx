import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-oficial.png';
import AvatarDropdown from './AvatarDropdown';

export default function NavbarApp() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img src={logo} width="214px" height="52px" alt="Juntos Logotipo" />
          </Navbar.Brand>
          <AvatarDropdown />
        </Container>
      </Navbar>
    )
}