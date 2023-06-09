import productos from "../../data/productos";
import { useEffect, useState } from "react";
import Itemlist from "../itemlist/Itemlist";
import "../itemlistcontainer/itemlistcontainer.scss"

function getData(){
  return new Promise ((resolve) =>{
    setTimeout(() => {
    resolve(productos);
   }, 2000);
  });
}

function Itemlistcontainer() {

let [products, setProducts] = useState([]);
console.log(products);

useEffect( () => {
  getData().then((respuesta) => {
    console.log("llegaron los productos",respuesta);
    setProducts(respuesta);
 });
}, [])

  return (
    <div className="itemlistcontainer">
      <Itemlist products={products}/>
    </div>
  )
}

export default Itemlistcontainer