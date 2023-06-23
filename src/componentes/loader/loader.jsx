import React from 'react'
import "../loader/loader.scss"

function Loader() {
  return (
    <div className='loader'>
        <h1 className="cargando">Cargando...</h1>
        <img src="/public/imagenes/esperando.jpg" alt="imagen" />
    </div>
  )
}

export default Loader