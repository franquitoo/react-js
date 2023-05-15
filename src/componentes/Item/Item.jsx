import productos from "../../data/productos";
import "./Item.css";
import Button from "../Button/Button";
import ItemCount from "../itemCount/ItemCount";
import Itemlistcontainer from "../itemlistcontainer/Itemlistcontainer";

function Item({}){
  return (
    <div className="item-card">
      <div className="item-card_header">
        <h2>{props.title}</h2>
      </div>
      <div className="item-card_img">
        <img src={props.img} alt="imagen"></img>
      </div>
      <div className="item-card_detail">
        <h4>$ {props.precio}</h4>
        <small>{props.categoria}</small>
      </div>
      <div>
         <Button color="purple">Ver detalle</Button>
         <ItemCount stock={10} />
      </div>
    </div>
  );
}

export default Item;