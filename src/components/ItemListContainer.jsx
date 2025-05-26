import Container from 'react-bootstrap/Container';
import '../css/ItemListContainer.scss'

const ItemListContainer = (props) => {

  return (
    <Container className='text-center mainContainer'>
        <h1>{props.mensaje}</h1>
    </Container>
  )
}

export default ItemListContainer