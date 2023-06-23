
import Item from "../Item/Item"
import "../itemlist/Itemlist.scss"
import productos from "../../data/productos"
import Loader from "../loader/loader"

function Itemlist({products}) {

if (products.length === 0) return <Loader/>

  return ( 
        <>
          <div className="Itemlist">{productos.map( (ItemInArray) => ( <Item  key={ItemInArray.id} id={ItemInArray.id} title={ItemInArray.title} precio={ItemInArray.precio} description={ItemInArray.descripcion} descuento={ItemInArray.descuento} img={ItemInArray.img} />))}</div>
        </>
  )
}

export default Itemlist
