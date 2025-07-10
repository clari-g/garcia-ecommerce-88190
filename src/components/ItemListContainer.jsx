import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import "../css/ItemListContainer.scss"
import { useParams } from "react-router-dom"
import LoaderComponent from "./LoaderComponent"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/firebase"

const ItemListContainer = (props) => {
  const [data, setData]= useState(null);
  const [loading, setLoading]= useState(false);
  const {categoryId} = useParams();

  useEffect(()=>{
    setLoading(true);

    const productsCollection = categoryId 
    ? query(collection(db, 'products'), where('category', '==', categoryId))
    : collection(db, 'products');

    getDocs(productsCollection)
    .then((res)=>{
      const list = res.docs.map((doc)=>{
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      setData(list);
    })
    .catch((error)=> console.log(error))
    .finally(()=>setLoading(false))
  },[categoryId]);

  return(
      <div className="mainContainer">
        <h1 className="text-center">{categoryId ? categoryId.toUpperCase() : props.mensaje}</h1>

        { loading || !data
          ? <LoaderComponent />
          : <ItemList data={data}/>
        }
      </div>
  )
}

export default ItemListContainer