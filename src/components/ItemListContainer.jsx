import { useEffect, useState } from "react"
import { getProducts } from "../mock/AsyncMock"
import ItemList from "./ItemList"
import "../css/ItemListContainer.scss"
import { useParams } from "react-router-dom"
import Spinner from 'react-bootstrap/Spinner'

const ItemListContainer = (props) => {
  const [data, setData]= useState([]);
  const [loading, setLoading]= useState(false);
  const {categoryId} = useParams();

  useEffect(()=>{
      setLoading(true);
      getProducts()
      .then((respuesta)=> {
        if(categoryId){
          setData(respuesta.filter((prod)=> prod.category == categoryId));
        }else{
          setData(respuesta);
        }
      })
      .catch((error)=> console.log(error))
      .finally(()=>setLoading(false))
  },[categoryId])

  return(
      <div className="mainContainer">
        <h1 className="text-center">{categoryId ? categoryId.toUpperCase() : props.mensaje}</h1>

        { loading
          ? (
              <div className="text-center">
                <Spinner animation="border" role="status" size="">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              </div>
            )
          : <ItemList data={data}/>
        }
      </div>
  )
}

export default ItemListContainer