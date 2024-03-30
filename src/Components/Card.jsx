import React from "react";
import { Link } from 'react-router-dom';

const Card = ({item}) => {

  const addFav = ()=>{
    console.log('botos')
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <Link to={`/detalles/${item.id}`} >
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
          <img className='imagenDentista' src="../../public/images/doctor.jpg"/>
          <p>{item.name}</p>
          <p>{item.username}</p>
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
    </Link>
  );
};

export default Card;
