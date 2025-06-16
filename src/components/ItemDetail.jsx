import ItemCount from './ItemCount';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/ItemDetail.scss';

const ItemDetail = ({detail}) => {

  const onAdd = (cantidad) => {
    alert(`${cantidad} agregado/s al carrito!`);
  }
  
  return (
    <Container fluid="md" className="itemContainer">
      <Row>
        <Col style={{textAlign: 'center'}}>
          <img src={detail.img} alt={detail.name}/>
        </Col>
        <Col>
          <h2>{detail.name}</h2>
          <p>{detail.description}</p>
          <p>Precio: <b>${detail.price},00</b></p>
          <p>Stock disponible: {detail.stock}</p>
          <ItemCount stock={detail.stock} onAdd={onAdd}/>
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail