import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/ItemDetail.scss';
import { Link } from 'react-router-dom';
import { BsQuestionCircle } from "react-icons/bs";

const ItemEmpty = () => {
  
  return (
    <Container fluid="md" className="itemContainer">
      <Row>
        <Col style={{textAlign: 'center'}}>
          <BsQuestionCircle size={350} color='#d4b7d6' />
        </Col>
        <Col>
          <h2>No se ha encontrado el producto</h2>
          <h5>Te invitamos a explorar nuestra tienda.</h5>
          <br />
          <Button variant="primary" size='lg' as={Link} to={'/'}>Seguir comprando</Button>
          
        </Col>
      </Row>
    </Container>
  )
}

export default ItemEmpty