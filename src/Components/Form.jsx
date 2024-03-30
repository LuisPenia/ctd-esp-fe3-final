/*
import React from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones

  return (
    <div>
      <form>
      </form>
    </div>
  );
};

export default Form;
*/

//import React from 'react'

import { useState } from "react"
import Card from "./Card"

const Form = () => {

  const [show, setShow] = useState(false)
  const [superado, setSuperado] = useState(false)

  const [pc, setPc] = useState ({
    marca: '',
    modelo: ''
  })

  const regexmarca = /^(?! )[^\n]{5,}$/
    /*
    ^     : Coincide con el inicio de la cadena.
    (?! ) : Utiliza una afirmación negativa para asegurarse de que la cadena no comience con un espacio en blanco.
    [^\n] : Coincide con cualquier carácter (incluido espacio en blanco).
    {5,}  : Asegura que haya al menos 3 caracteres.
    $     : Coincide con el final de la cadena.
    */

  const regexmodelo = /^[^\n]{6,}$/
  /*
    ^     : Coincide con el inicio de la cadena.
    [^\n] : Coincide con cualquier carácter (incluido espacio en blanco).
    {6,}  : Asegura que haya al menos 6 caracteres.
    $     : Coincide con el final de la cadena.
  */

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    if(superado){window.location.reload()}

    if (!(regexmarca.test(pc.marca) && regexmodelo.test(pc.modelo))){
      setShow(true)
    } else {
      setShow(false)
      setSuperado(true)
    }
    
  }

  console.log('show ' + show )

  return (
    
    <>

    <form onSubmit={manejarEnvio}>
      <p>
        {/*<label>Marca : </label>*/}
        <input type="text" onChange = {(event) => setPc ({...pc, marca: event.target.value})} placeholder="Nombre"/>
        
      </p>
      {/*show&&!regexmarca.test(pc.marca) ? <a>Marca: Al menos 3 Caracteres que no comiencen por Espacio-Vacio</a> : <p>________________________________________</p>*/}
      <p>
        {/*<label>Modelo: </label>*/}
        <input type="text" onChange = {(event) => setPc ({...pc, modelo: event.target.value})} placeholder="email"/>
      </p>
      {/*show&&!regexmodelo.test(pc.modelo) ? <a>Modelo: Al menos 6 Caracteres</a> : <p>________________________________________</p>*/}
      <p>
        {!superado && <button>Enviar</button>}
        {superado && <button>Limpiar</button>}
      </p>
    </form>
      
    {show && <h4> “Por favor chequea que la información sea correcta” </h4>}
    {/*!show && <Card superado={superado} marca={pc.marca} modelo={pc.modelo}/>*/}
      
    </>

  )
}

export default Form









