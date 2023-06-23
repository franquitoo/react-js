import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import "../cartView/cartView.scss"

function CartView() {

const {cart, removeItem} = useContext(cartContext);   

  return (
    <div className="carritooo">
        <h2>Tu carrito de compras:</h2>
        {
            cart.map(item => <ul key={item.id}>
                <li>
                    <h3>
                    
                    Producto: {item.title}
                    </h3>
                </li>
                <li>
                    <h3>
                    
                    Cantidad: {item.count}
                    </h3>
                </li>
                <li>
                    <h3>
                    
                    total:{item.count * item.price}
                    </h3>
                </li>
                <li>
                    <h5>
                    <button onClick={() =>removeItem(item.id)}>cancelar</button>
                    </h5>   
                </li>
            </ul>)
        }
    </div>
  )
}

export default CartView