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
            <Nav className="me-auto" defaultActiveKey="/" style={{alignItems: 'center'}}>
              <Nav.Link as={Link} to={'/'} eventKey="/"><Navbar.Brand><GiMusicalNotes /> MusicShop</Navbar.Brand></Nav.Link>
              <Nav.Link as={Link} to={'/category/audio'} eventKey="audio">Audio</Nav.Link>
              <Nav.Link as={Link} to={'/category/instrumentos'} eventKey="instrumentos">Instrumentos</Nav.Link>
              <Nav.Link as={Link} to={'/category/accesorios'} eventKey="accesorios">Accesorios</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
  )
}

export default NavBar