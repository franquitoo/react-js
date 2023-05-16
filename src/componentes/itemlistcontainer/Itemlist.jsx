import Item from "../Item/Item"

function Itemlist({products}) {
  return (
    <div>
        {products.map( (ItemInArray) => (
        <Item 
         key={ItemInArray.id}
         id={ItemInArray.id}
         title={ItemInArray.title}
         precio={ItemInArray.precio}
         description={ItemInArray.descripcion}
         categoria={ItemInArray.categoria}
         img={ItemInArray.img}
         />))}</div>
  )
}

export default Itemlist