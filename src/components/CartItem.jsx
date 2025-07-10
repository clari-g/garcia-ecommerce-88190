import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const CartItem = ({item}) => {
  const {removeItem} = useContext(CartContext);
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(`/item/${item.id}`);
  }

  const handleRemove = (id, name) => {
    Swal.fire({
      title:'¿Desea eliminar el producto?',
      text: name,
      showDenyButton: true,
      denyButtonText: 'No',
      confirmButtonText: 'Si',
      confirmButtonColor: "#9C27B0",
    }).then((result)=>{
      if(result.isConfirmed) removeItem(id);
    })
  }

  return (
    <Row className="cartItem">
      <Col md={1}>
        <img src={item.img} alt={item.name} style={{width:'60px', cursor: 'pointer'}} onClick={handleItemClick}/>
      </Col>
      <Col md={5}>
        <div style={{cursor: 'pointer'}} onClick={handleItemClick}>{item.name}</div>
      </Col>
      <Col md={1}>
        <div className="text-right">${item.price},00</div>
      </Col>
      <Col md={2}>
        <div className="text-center">x{item.quantity}</div>
      </Col>
      <Col md={2}>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <span>Subtotal:</span>
          <b>${item.price * item.quantity},00</b>
        </div>
      </Col>
      <Col md={1}>
        <div className="text-right">
          <button className='btn btn-danger' onClick={()=> handleRemove(item.id, item.name)}><b>X</b></button>
        </div>
      </Col>
    </Row>
  )
}

export default CartItem