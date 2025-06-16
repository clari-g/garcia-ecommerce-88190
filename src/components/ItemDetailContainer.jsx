import { useEffect, useState } from 'react'
import { getOneProduct } from '../mock/AsyncMock'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading]= useState(true);
  const {id} = useParams();

  useEffect(()=>{
    setLoading(true);
    getOneProduct(id)
    .then((res)=> setDetail(res))
    .catch((error)=> console.log(error))
    .finally(()=>setLoading(false))
  },[id]);
  
  return (
    <>
    { loading
      ? (
          <div className="text-center" style={{padding: 50}}>
            <Spinner animation="border" role="status" size="">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )
      : <ItemDetail detail={detail}/>
    }
    </>
  )
}

export default ItemDetailContainer