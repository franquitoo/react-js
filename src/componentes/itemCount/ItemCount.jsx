import { useState } from "react";
import "../itemCount/itemCount.scss";


function itemCount({stock}) {

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
            <button onClick={Restar}>-</button>
            <p>{count}</p>
            <button onClick={Sumar}>+</button>
        </div>
        <div className="counterdivcarrito">
            <button>Agregar al carrito</button>
        </div>
    </div>
  )
}

export default itemCount