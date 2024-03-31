import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './Components/utils/UserContext';
import { ThemeProvider } from './Components/utils/ThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
        <ThemeProvider>
        <UserProvider>
        <App/>
        </UserProvider>
        </ThemeProvider>
  </BrowserRouter>
);

/*
<BrowserRouter>
<React.StrictMode>
    <App/>
</React.StrictMode>
</BrowserRouter>
*/

