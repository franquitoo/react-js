import Item from "../componentes/Item/Item"
import zapatillas from "../data/zapatillas"

function Zapatillas() {
  return (
    <div>
        <div className="Itemlist">{zapatillas.map( (ItemInArray) => ( <Item  key={ItemInArray.id} id={ItemInArray.id} title={ItemInArray.title} precio={ItemInArray.precio} description={ItemInArray.descripcion} categoria={ItemInArray.categoria} img={ItemInArray.img} />))}</div>
    </div>
  )
}

export default Zapatillas;