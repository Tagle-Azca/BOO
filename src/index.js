import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Inicio from './Pages/Inicio';
import Login from './Pages/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Inicio />
  </React.StrictMode>
);

reportWebVitals();
