import Item from "../componentes/Item/Item"
import remeras from "../data/remeras"
import "../pages/pages.scss"

function Remeras() {
  return (
    <div className="pages">
        <div className="Itemlist">{remeras.map( (ItemInArray) => ( <Item  key={ItemInArray.id} id={ItemInArray.id} title={ItemInArray.title} precio={ItemInArray.precio} description={ItemInArray.descripcion} descuento={ItemInArray.descuento} img={ItemInArray.img} />))}</div>
    </div>
  )
}

export default Remeras;