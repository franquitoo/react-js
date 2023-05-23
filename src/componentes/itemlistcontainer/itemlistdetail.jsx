import { useEffect, useState } from "react";
import productos from "../../data/productos";
import 

function getItemData(){
    return new Promise ( (resolve) => {
        setTimeout(()=>{
            resolve(productos[0]);
        },2000);
    })
}

function itemlistdetail() {

// ESTADO //

const [product, setProduct] = useState({});

// EFECTO //

useEffect( () => {
    getItemData().then((respuesta) => {
        setProduct(respuesta);
     });
}, [])

  return (
    <div>itemlistdetail</div>
  )
}

export default itemlistdetail
