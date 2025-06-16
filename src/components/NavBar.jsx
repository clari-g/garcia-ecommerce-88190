import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget'
import { GiMusicalNotes } from "react-icons/gi";
import { Link } from 'react-router-dom';
import '../css/NavBar.scss';

const NavBar = () => {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand as={Link} to={'/'}><GiMusicalNotes /> MusicShop</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/category/audio'}>Audio</Nav.Link>
              <Nav.Link as={Link} to={'/category/instrumentos'}>Instrumentos</Nav.Link>
              <Nav.Link as={Link} to={'/category/accesorios'}>Accesorios</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
  )
}

export default NavBar