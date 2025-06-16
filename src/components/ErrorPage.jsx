import {Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = (props) => {

  return (
    <Container className='text-center mainContainer'>
        <h1>{'Error, página no encontrada 🔍'}</h1>
        <Button variant="primary" size='lg' as={Link} to={'/'}>Vuelve al Inicio</Button>
    </Container>
  )
}

export default ErrorPage