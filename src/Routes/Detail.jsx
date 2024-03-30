import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  
  const param = useParams();
  const [dentista, setDentista] = useState({});
  console.log("id: " + param.id)

  
  useEffect (() => {
    // Hacer la solicitud HTTP para obtener los datos JSON
    fetch('https://jsonplaceholder.typicode.com/users/'+ param.id)
      .then(response => response.json())
      .then(data => setDentista(data))
      console.log("dentista" + dentista)
      //.catch(error => console.error('Error al obtener datos:', error));
  }, []);
  
  console.log(dentista)

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
        <table>
        <thead>
          <tr>
            <td>NOMBRE</td>
            <td>EMAIL</td>
            <td>TELEFONO</td>
            <td>WEB</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{dentista.name}</td>
            <td>{dentista.email}</td>
            <td>{dentista.phone}</td>
            <td>{dentista.website}</td>
          </tr>
        </tbody>
        </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail