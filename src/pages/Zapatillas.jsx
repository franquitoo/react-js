import Item from "../componentes/Item/Item"
import zapatillas from "../data/zapatillas"
import "../pages/pages.scss"

function Zapatillas() {
  return (
    <div className="pages">
        <div className="Itemlist">{zapatillas.map( (ItemInArray) => ( <Item  key={ItemInArray.id} id={ItemInArray.id} title={ItemInArray.title} precio={ItemInArray.precio} description={ItemInArray.descripcion} descuento={ItemInArray.descuento} img={ItemInArray.img} />))}</div>
    </div>
  )
}

export default Zapatillas;