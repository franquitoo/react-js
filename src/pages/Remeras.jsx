import Item from "../componentes/Item/Item"
import remeras from "../data/remeras"

function Remeras() {
  return (
    <div>
        <div className="Itemlist">{remeras.map( (ItemInArray) => ( <Item  key={ItemInArray.id} id={ItemInArray.id} title={ItemInArray.title} precio={ItemInArray.precio} description={ItemInArray.descripcion} categoria={ItemInArray.categoria} img={ItemInArray.img} />))}</div>
    </div>
  )
}

export default Remeras