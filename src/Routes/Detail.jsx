import React from 'react'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

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
            <td>Nom</td>
            <td>Dato 2</td>
            <td>Dato 1</td>
            <td>Dato 2</td>
          </tr>
        </tbody>
        </table>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail