import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget'
import { GiMusicalNotes } from "react-icons/gi";

const NavBar = () => {

  return (
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
            <Navbar.Brand href="#"><GiMusicalNotes /> MusicShop</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="#">Instrumentos</Nav.Link>
            <Nav.Link href="#">Accesorios</Nav.Link>
            <Nav.Link href="#">Ofertas</Nav.Link>
            </Nav>
            <CartWidget />
        </Container>
    </Navbar>
  )
}

export default NavBar