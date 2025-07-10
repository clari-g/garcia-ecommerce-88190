import ItemCount from './ItemCount';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../css/ItemDetail.scss';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({detail}) => {
  const [purchase, setPurchase] = useState(false);
  const [itemStock, setItemStock] = useState(detail.stock);

  const {addItem, localStock} = useContext(CartContext);

  useEffect(()=>{
    setItemStock(localStock(detail));
  },[purchase]);

  const onAdd = (cantidad) => {
    addItem(detail, cantidad);
    setPurchase(true);
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
          { itemStock
            ? <p>Stock disponible: {itemStock}</p>
            : <p className='text-danger'>Sin Stock</p>
          }

          { purchase 
            ? (
                <div className='itemOptions'>
                <Button variant="primary" size='lg' as={Link} to={'/cart'}>Ir al carrito</Button>
                <Button variant="primary" size='lg' as={Link} to={'/'}>Seguir comprando</Button>
                </div>
              )
            : <ItemCount stock={itemStock} onAdd={onAdd}/>
          }
          
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail