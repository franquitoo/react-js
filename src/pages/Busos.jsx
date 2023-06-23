import Item from "../componentes/Item/Item"
import busos from "../data/busos"
import "../pages/pages.scss"

function Busos() {
  return (
    <div className="pages">
        <div className="Itemlist">{busos.map( (ItemInArray) => ( <Item  key={ItemInArray.id} id={ItemInArray.id} title={ItemInArray.title} precio={ItemInArray.precio} description={ItemInArray.descripcion} descuento={ItemInArray.descuento} img={ItemInArray.img} />))}</div>
    </div>
  )
}

export default Busos;