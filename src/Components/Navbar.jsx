import React from 'react'
import { Link, Outlet } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  return (
    <nav className="nav">
      <Link to="/home"      >Home</Link>
      <Link to="/contacto"  >Contact</Link>
      <Link to="/favoritos" >Favs</Link>

      
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}


      <button>Change theme</button>
      <Outlet/>
    </nav>
    
  )
}

export default Navbar