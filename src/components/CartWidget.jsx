import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { IoCartOutline } from "react-icons/io5";
import '../css/CartWidget.scss'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {
  const {cart, cartQuantity}= useContext(CartContext);

  return (
    <Button className='cartWidget' as={Link} to={'/cart'}>
        <IoCartOutline className='cartIcon' />
        { cart.length > 0 && <Badge pill bg="danger" className='badge'>{cartQuantity()}</Badge> }
    </Button>
  )
}

export default CartWidget