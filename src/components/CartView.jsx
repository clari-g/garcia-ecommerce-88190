import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Container, Button } from 'react-bootstrap';
import CartItem from "./CartItem";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../css/CartView.scss';

const CartView = () => {
  const {cart, cartTotal, clear} = useContext(CartContext);

  const handleClear = () => {
    Swal.fire({
      title:'¿Desea vaciar el carrito?',
      showDenyButton: true,
      denyButtonText: 'No',
      confirmButtonText: 'Si',
      confirmButtonColor: "#9C27B0",
    }).then((result)=>{
      if(result.isConfirmed) clear();
    })
  }

  return (
    <Container fluid="md" className="cartContainer">
      <div className="titleWrapper">
        <h2>Tu Carrito</h2>
      </div>
      {
        cart.map((compra)=>(
          <CartItem key={compra.id} item={compra} />
        ))
      }
      <div className="totalWrapper">
        <h4>Total: ${cartTotal()},00</h4>
      </div>
      <div className="cartActions">
        <Button variant="danger" size='lg' onClick={handleClear}>Vaciar Carrito</Button>
        <Button variant="primary" size='lg' as={Link} to='/checkout' >Terminar Compra</Button>
      </div>
    </Container>
  )
}

export default CartView