import { createContext,useState } from "react";

export const cartContext = createContext({cart:[]});

export function cartContextProvider({ children }) {

const [cart, setCart] = useState([]);

function addItem(product, count){
    const newCart = {...cart};
    newCart.push({...product,count});
    setCart(newCart);
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