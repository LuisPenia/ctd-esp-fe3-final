import React, { useContext, useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ThemeContext } from './utils/ThemeContext';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

    const {theme, toggleTheme} = useContext(ThemeContext);
    const [imagen, setImagen] = useState ('../../public/images/switchC.png');

    const alternarImagen = () => {
      if (imagen === '../../public/images/switchC.png') {
        setImagen('../../public/images/switchO.png'); // Cambiar a la segunda imagen
      } else {
        setImagen('../../public/images/switchC.png'); // Cambiar a la primera imagen
      }
    };

  return (
    
    <nav className = {`nav${theme}`}>
      <Link to="/home"      >Home</Link>
      <Link to="/contacto"  >Contact</Link>
      <Link to="/favoritos" >Favs</Link>

      <button id="alternar-boton" onClick={toggleTheme}>
        <img src={imagen} onClick={alternarImagen} />
      </button>

      <Outlet/>
    </nav>  
  )

}

export default Navbar