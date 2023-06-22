
import "./Item.scss";
import Button from "../Button/Button";
import ItemCount from "../itemCount/itemCount";
import { Link } from "react-router-dom";


function Item({title,img,precio,descuento,id}){
  return (
    <div className="item-card">
      <div className="item-card_header">
        <h2 className="itemtitle">{title}</h2>
      </div>
      <div className="item-card_img">
        <img className="itemimg" src={img} alt="imagen"></img>
      </div>
      <div className="cardcont">
        <div className="item-card_detail">
          <h4 className="itemprecio">${precio}</h4>
          {
          descuento ? <small> Descuento: {descuento} % </small> : "sin descuento"
          }
        </div>
        <div className="itemdiv">
          <Button color="red"><Link to={`/detail/${id}}/`}><h5 className="detalle">Ver detalle</h5></Link></Button>
        </div>
      </div>
    </div>
  );
}

export default Item;