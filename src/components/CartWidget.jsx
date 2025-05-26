import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { IoCartOutline } from "react-icons/io5";
import '../css/CartWidget.scss'

const CartWidget = () => {

  return (
    <Button className='cartWidget'>
        <IoCartOutline className='cartIcon' />
        <Badge pill bg="danger" className='badge'>2</Badge>
    </Button>
  )
}

export default CartWidget