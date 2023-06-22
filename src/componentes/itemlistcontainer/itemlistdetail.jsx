import { useEffect, useState } from "react";
import productos from "../../data/productos";
import ItemCount from "../itemCount/itemCount";
import "../itemlistcontainer/Itemlistcontainer.scss";

function getItemData(){
    return new Promise ( (resolve) => {
        setTimeout(()=>{
            resolve(productos[0]);
        },2000);
    })
}

function Itemlistdetail({productos,removeItem},onAddToCart) {

// ESTADO //

const [product, setProduct] = useState({});

// EFECTO //

useEffect( () => {
    getItemData().then((respuesta) => {
        setProduct(respuesta);
     });
}, [])

function onAddToCart(product,stock){
  alert(`agregaste ${stock} ${product.title} al carrito`)
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
        <ItemCount stock={productos.stock} className="itemcount" onAddToCart={onAddToCart} />
        <button onClick={ ()=> removeItem(id)}>cancelar</button>
      </div>
    </div>
  )
}

export default Itemlistdetail
