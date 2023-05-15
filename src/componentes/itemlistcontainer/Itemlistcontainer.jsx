import productos from "../../data/productos";

function Itemlistcontainer() {
  return (
    <div>
      Itemlistcontainer{productos.map( (ItemInArray) => (
       <Item 
        key={ItemInArray.id}
        id={ItemInArray.id}
        title={ItemInArray.title}
        precio={ItemInArray.precio}
        description={ItemInArray.descripcion}
        categoria={ItemInArray.categoria}
        img={ItemInArray.img}
        />))}
    </div>
  )
}

export default Itemlistcontainer