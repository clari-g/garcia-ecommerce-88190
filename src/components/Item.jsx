import { Link } from 'react-router-dom';
import '../css/Item.scss';

const Item = ({prod}) => {
    const {name, price, img, id}= prod;

  return (
    <div className="card item-card" style={{width:'22vw', marginBottom: 25}}>
      <img src={img} className="card-img-top" alt={name} height={250}/>
      <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">${price},00</p>
          <Link to={`/item/${id}`} className="btn btn-primary">Ver más</Link>
      </div>
    </div>
  )
}

export default Item