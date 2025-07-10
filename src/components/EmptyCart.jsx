import {Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/CartView.scss';

const EmptyCart = () => {

  return (
    <Container className='text-center emptyContainer'>
        <h1>{'Tu carrito está vacío'}</h1>
        <h4>Te invitamos a explorar nuestra tienda.</h4>
        <Button variant="primary" size='lg' as={Link} to={'/'}>Agrega más productos</Button>
    </Container>
  )
}

export default EmptyCart