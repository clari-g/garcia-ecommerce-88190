import { useState } from 'react'
import {Button} from 'react-bootstrap';

const ItemCount = ({stock, onAdd}) => {
  const [count, setCount] = useState(1);

  const sumar = ()=>{
    if(count < stock) setCount(count +1);
  }
  const restar = ()=>{
    if(count > 1) setCount(count -1);
  }

  const comprar = () => {
    onAdd(count);
  }

  return (
    <>
    { stock > 0 &&
      <div>
        <div className='itemCountContainer'>
          <Button variant="danger" onClick={restar}>-</Button>
          <div className='itemCount'>{count}</div>
          <Button variant="success" onClick={sumar}>+</Button>
        </div>
        <Button className='btn btn-primary' size="lg" onClick={comprar} disabled={stock === 0}>Comprar</Button>
      </div>
    }
    </>
  )
}

export default ItemCount