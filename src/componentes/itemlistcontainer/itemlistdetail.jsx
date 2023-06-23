import { useContext, useState } from "react";
import ItemCount from "../itemCount/itemCount";
import "../itemlistcontainer/Itemlistcontainer.scss";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

function Itemlistdetail({productos}){

const {addItem,removeItem} = useContext(cartContext)
const [countInCart, setCountInCart] = useState (0);

function onAddToCart(count){
  addItem(productos,count);
  setCountInCart(count);
  alert(`Agregaste ${count} - ${productos.title} al carrito`)
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
      <div className="ternario">
      {
        countInCart === 0?
        <ItemCount stock={productos.stock} className="itemcount" onAddToCart={onAddToCart} />
        :
        <Link className="iralcarrito" to="/componentes/cartView/CartView">Ir al carrito</Link>
      }
      </div>
    </div>
  </div>
)
}

export default Itemlistdetail
