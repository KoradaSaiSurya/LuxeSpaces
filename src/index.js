import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HelmetProvider } from 'react-helmet-async';  // 👈 add this

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HelmetProvider>   {/* 👈 wrap App inside HelmetProvider */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>
);
