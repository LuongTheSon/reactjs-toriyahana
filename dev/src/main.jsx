import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import FoodContextProvider from '@/context/FoodContext';
import '@css/common.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FoodContextProvider>
      <App />
    </FoodContextProvider>
  </BrowserRouter>
);
