/** @format */
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './components/app/App';
import './index.css';

createRoot(document.getElementById('root')).render(
  // debug mode
  // <React.StrictMode>
  //   <BrowserRouter>
  //     <App />
  //   </BrowserRouter>
  // </React.StrictMode>

  // production mode
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
