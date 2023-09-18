import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//import Onboard1 from './Pages/Onboard1';//
//import Onboard2 from './Pages/Onboard2';
//import Register from './Pages/Register';//
import Login from './Pages/Login';
//import Register2 from './Pages/Register2';
import Levels from './Pages/Levels';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Levels/>
  </React.StrictMode>
);

reportWebVitals();
