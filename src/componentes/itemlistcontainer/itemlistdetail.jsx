import { useEffect, useState } from "react";
import productos from "../../data/productos";
import ItemCount from "../itemCount/itemCount";
import "../itemlistcontainer/Itemlistcontainer.scss";
import { Link } from "react-router-dom";

function getItemData(){
  return new Promise ( (resolve) => {
      setTimeout(()=>{
          resolve(productos[0]);
      },2000);
  })
}

function Itemlistdetail({productos,removeItem},onAddToCart,addItem) {

// ESTADO //

const [product, setProduct] = useState({});
const [countInCart, setCountInCart] = useState (0);
// EFECTO //

useEffect( () => {
  getItemData().then((respuesta) => {
      setProduct(respuesta);
   });
}, [])

function onAddToCart(count){
  addItem(product,count);
  setCountInCart(count)
  console.log(`agregaste ${stock} ${productos.title} al carrito`)
}

return (
  <div className="detail">
    <div>
      <img className="detailimg" src={productos.img} alt="imagen"></img>
    </div>
    <div>
      <h2>{productos.title}</h2>
      <h5>descuento de %{productos.descuento}</h5>
      <h2>${productos.precio}</h2>
      {
        countInCart === 0?
        <ItemCount stock={productos.stock} className="itemcount" onAddToCart={onAddToCart} />
        :
        <Link to="/cart">Ir al carrito</Link>
      }
      <button onClick={ ()=> removeItem(id)}>cancelar</button>
    </div>
  </div>
)
}

export default Itemlistdetail
