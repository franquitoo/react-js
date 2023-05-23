import productos from "../../data/productos";
import "./Item.scss";
import Button from "../Button/Button";
import ItemCount from "../itemCount/ItemCount";
import Itemlistcontainer from "../itemlistcontainer/Itemlistcontainer";

function Item({title,img,precio,categoria}){
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
          <small>{categoria}</small>
        </div>
        <div className="itemdiv">
          <Button color="red">Ver detalle</Button>
          <ItemCount stock={10} />
        </div>
      </div>
    </div>
  );
}

export default Item;