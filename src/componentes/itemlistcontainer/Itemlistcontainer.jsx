import productos from "../../data/productos";
import { useEffect, useState } from "react";

function getData(){
  return new Promise(resolve =>{
    setTimeout(() => {resolve(productos)},2000)
  })
}

function Itemlistcontainer() {

let [products, setProducts] = useState([]);

useEffect( () => {
  getData().then((respuesta) => {
    console.log("llegaron los productos",respuesta);
    setProducts(respuesta);
 });
}, [])

  return (
    <div>
      Itemlistcontainer{products.map( (ItemInArray) => (
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