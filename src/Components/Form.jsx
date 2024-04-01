import { useState } from "react"
import Card from "./Card"

const Form = () => {

  const [show, setShow] = useState(false)
  const [superado, setSuperado] = useState(false)

  const [user, setUser] = useState ({
    nombre: '',
    email: ''
  })

  const regexnombre = /^(?! )[^\n]{5,}$/ //Regex Nombre
    /*
    ^     : Coincide con el inicio de la cadena.
    (?! ) : Utiliza una afirmación negativa para asegurarse de que la cadena no comience con un espacio en blanco.
    [^\n] : Coincide con cualquier carácter (incluido espacio en blanco).
    {5,}  : Asegura que haya al menos 3 caracteres.
    $     : Coincide con el final de la cadena.
    */

  const regexemail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ //Regex Email
  /*
    ^       : Coincide con el inicio de la cadena.
    [^\s@]+ : Coincide con uno o más caracteres que no son espacios en blanco ni el símbolo "@", antes del símbolo "@".
    @       : Coincide con el símbolo "@".
    [^\s@]+ : Coincide con uno o más caracteres que no son espacios en blanco ni el símbolo "@", después del símbolo "@".
    \.      : Coincide con el punto "." que separa el dominio.
    [^\s@]+ : Coincide con uno o más caracteres que no son espacios en blanco ni el símbolo "@", después del punto ".".
    $       : Coincide con el final de la cadena.
  */

  const manejarEnvio = (evento) => {
    evento.preventDefault();

    if(superado){window.location.reload()}

    if (!(regexnombre.test(user.nombre) && regexemail.test(user.email))){
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
    
        {/*<label>Marca : </label>*/}
        <input type="text" onChange = {(event) => setUser ({...user, nombre: event.target.value})} placeholder="Nombre"/>
    
      
        {/*<label>Modelo: </label>*/}
        <input type="text" onChange = {(event) => setUser ({...user, email: event.target.value})} placeholder="email"/>
      
      <p>
        {!superado && <button>Enviar</button>}
        {superado && <button>Limpiar</button>}
      </p>
    </form>

    {show && <><h4>Por favor, verifique que la información sea correcta</h4></>}
    {show&&!regexnombre.test(user.nombre) &&  <a><strong>Nombre:  </strong>Al menos 5 Caracteres que no comiencen por Espacio-Vacio</a>}
    {show&&!regexemail.test(user.email) &&    <a><strong>email:   </strong>Ingrese Email valido</a>}
    {superado && <><h4> Muchas gracias {user.nombre}, nos pondremos en contacto contigo a la brevedad.</h4></>}
    
    </>

  )
}

export default Form








