import Item from "../componentes/Item/Item"
import busos from "../data/busos"

function Busos() {
  return (
    <div>
        <div className="Itemlist">{busos.map( (ItemInArray) => ( <Item  key={ItemInArray.id} id={ItemInArray.id} title={ItemInArray.title} precio={ItemInArray.precio} description={ItemInArray.descripcion} categoria={ItemInArray.categoria} img={ItemInArray.img} />))}</div>
    </div>
  )
}

export default busos;