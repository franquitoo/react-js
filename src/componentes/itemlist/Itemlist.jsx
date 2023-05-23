import { useState } from "react"
import Item from "../Item/Item"
import "../itemlist/Itemlist.scss"
import productos from "../../data/productos"

function Filterlist({children,items}){

const [Searchword, setSearchword] = useState("hola")


function filterlist(){
  if( Searchword === "") {
    return productos;
  }
  else{
    return productos.filter ((item) => {

        let textTitle = item.title.toLowerCase();
        let word = Searchword.toLowerCase();
        return textTitle.includes(word);
    })
  }
}

function handleSearch(evt){

setSearchword(evt.target.value)

}

 return children(handleSearch,Filterlist());

}

function Itemlist({productos}) {
  return (
    <Filterlist items={productos}>
      {(handleSearch,filterlist) => (
        <>
          <input onChange={handleSearch} />
          <div className="Itemlist"> {filterlist.map( (ItemInArray) => ( <Item  key={ItemInArray.id} id={ItemInArray.id} title={ItemInArray.title} precio={ItemInArray.precio} description={ItemInArray.descripcion} categoria={ItemInArray.categoria} img={ItemInArray.img} />))}</div>
        </>
      )}
    </Filterlist>
  )
}

export default Itemlist

function filterlist(){
  if( Searchword === "") {
    return productos;
  }
  else{
    return productos.filter ((item) => {
        let textTitle = item.title.toLowerCase();
        let word = Searchword.toLowerCase();
        return textTitle.includes(word);
    })
  }
}