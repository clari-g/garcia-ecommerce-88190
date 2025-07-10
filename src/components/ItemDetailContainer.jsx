import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import { collection, getDoc, doc } from "firebase/firestore"
import { db } from "../service/firebase"
import ItemEmpty from './ItemEmpty';

const ItemDetailContainer = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading]= useState(true);
  const [invalid, setInvalid]= useState(false);
  const {id} = useParams();
 
  useEffect(()=>{
    setLoading(true);
    const productsCollection = collection(db, 'products');
    const docRef = doc(productsCollection, id)
    getDoc(docRef)
    .then((res)=>{
      if(res.data()){
        setDetail({id:res.id, ...res.data()});
      }else{
        setInvalid(true);
      }
    })
    .catch((error)=> console.log(error))
    .finally(()=>setLoading(false))
  },[id]);

  if(invalid){
    return <ItemEmpty />
  }
  
  return (
    <>
    { loading
      ? <LoaderComponent />
      : <ItemDetail detail={detail}/>
    }
    </>
  )
}

export default ItemDetailContainer