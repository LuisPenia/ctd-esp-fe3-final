import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  
  const [imagen, setImagen] = useState ('../../public/images/switchC.png');

  const alternarImagen = () => {
    if (imagen === '../../public/images/switchC.png') {
      setImagen('../../public/images/switchO.png'); // Cambiar a la segunda imagen
    } else {
      setImagen('../../public/images/switchC.png'); // Cambiar a la primera imagen
    }
  };

  return (
    <nav>
      <Link to="/home"      >Home</Link>
      <Link to="/contacto"  >Contact</Link>
      <Link to="/favoritos" >Favs</Link>

      <button id="alternar-boton">
        <img src={imagen} onClick={alternarImagen} />
      </button>

      <Outlet/>
    </nav>
    
  )
}

export default Navbar