import React, { useContext } from 'react'
import Card from '../Components/Card'
import { UserContext } from '../Components/utils/UserContext';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { usuarios } = useContext(UserContext);

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {usuarios.map(usuario => (
            <Card key={usuario.id} item={usuario} />
        ))}
      </div>
    </main>
  )
}

export default Home