
import Item from "../Item/Item"
import "../itemlist/Itemlist.scss"
import productos from "../../data/productos"

function Itemlist({}) {
  return ( 
        <>
          <div className="Itemlist">{productos.map( (ItemInArray) => ( <Item  key={ItemInArray.id} id={ItemInArray.id} title={ItemInArray.title} precio={ItemInArray.precio} description={ItemInArray.descripcion} categoria={ItemInArray.categoria} img={ItemInArray.img} />))}</div>
        </>
  )
}

export default Itemlist
