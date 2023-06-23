import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../../data/productos";
import Itemlistdetail from "../itemlistcontainer/itemlistdetail";
import "../itemdetailcontainer/itemdetailcontainer.scss";
import Loader from "../loader/loader";
import { cartContext } from "../../context/cartContext";

function ItemDetailContainer({}) {

    const [product, setProduct] = useState(null) ;
    const context = useContext(cartContext);
    const id = useParams().id;  

    const getProducto = () => {                      
        return new Promise((resolve, reject) => {    
            setTimeout(() => {    
                return resolve(productos)            
            }, 2000)
        })
    }
    useEffect(() => {
        const myProduct = async () => {             
        try {
            const res = await getProducto()         
            const info = res.find(e => e.id === parseInt(id))                                                 
            setProduct(info) 
        } catch (error) {
            console.log(error)
        }
    }
    myProduct();  
    }, [id]);

if (product){

    return (
        <div className="itemdetail">
            <Itemlistdetail productos={product}></Itemlistdetail> 
        </div>
    )

}

    return <Loader/>
};

export default ItemDetailContainer; 