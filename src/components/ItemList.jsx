import Item from './Item';

const ItemList = ({data}) => {

  return (
    <div style={{display:'flex', justifyContent:'space-between', alignItems:'stretch', flexWrap:'wrap', paddingTop: 20}}>
        {data.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ItemList