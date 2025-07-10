import Item from './Item';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemList = ({data}) => {

  return (
    <>
    { data && data.length > 0
      ? (<div style={{display:'flex', justifyContent:'space-between', alignItems:'stretch', flexWrap:'wrap', paddingTop: 20}}>
          {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
        </div>)
      : (<div className='text-center'>
          <h4 style={{margin: 40}}>No se encontraron productos en esta categoría...</h4>
          <Button variant="primary" as={Link} to={'/'}>Vuelve al Inicio</Button>
        </div>)
    }
    </>
  )
}

export default ItemList