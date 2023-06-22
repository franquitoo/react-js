import { useState } from "react";
import "./ItemCount.scss";


function ItemCount({stock, onAddToCart}) {

const [count, SetCount] = useState(1);

function Sumar(){
   if(count < stock) SetCount(count + 1)
}

function Restar(){
    if(count > 1) SetCount(count - 1)
}

  return (
    <div className="counter">
        <div className="counterdiv">
            <button className="counterbtn" onClick={Restar}>-</button>
            <p className="counternum">{count}</p>
            <button className="counterbtn" onClick={Sumar}>+</button>
        </div>
        <div className="counterdivcarrito">
            <button onClick={ () =>{onAddToCart(count)} } className="counterbtn">Agregar al carrito</button>
        </div>
    </div>
  )
}

export default ItemCount