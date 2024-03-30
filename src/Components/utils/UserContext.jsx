import React, { createContext, useState, useEffect } from 'react';

// Creamos el contexto
export const UserContext = createContext();

// Creamos el proveedor del contexto
export const UserProvider = ({ children }) => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    // Hacer la solicitud HTTP para obtener los datos JSON
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsuarios(data))
      .catch(error => console.error('Error al obtener datos:', error));
  }, []);

  return (
    <UserContext.Provider value={{ usuarios }}>
      {children}
    </UserContext.Provider>
  );
};
