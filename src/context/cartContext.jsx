import { createContext,useState } from "react";

export const cartContext = createContext({cart:[]});

export function CartContextProvider({ children }) {

const [cart, setCart] = useState([]);

const addItem = (product, count) => {
  const newObj = {
    ...product,
    count
  }
  if(isInCart(newObj.id)){
      cart.map(el => {
        if(el.id === newObj.id)  {
          el.count+= newObj.count
        }
        return(el)
        })

    }else {
      setCart([...cart, newObj])
      
    }
  }

  const isInCart = (id) => {
    return cart.some(el => el.id === id)
 }

function countItems(){
    let total = 0;
    cart.forEach( item => {total += item.count})
    return total;
}

function removeItem(){
    setCart(cart.filter(item = item.id !==iddelete));
}
    
return(
    <cartContext.Provider value={{ cart, setCart, addItem, countItems, removeItem}}>
    {children}
    </cartContext.Provider>
)

}

export default CartContextProvider;