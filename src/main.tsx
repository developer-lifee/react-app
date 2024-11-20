import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { AuthProvider } from './context/AuthContext'; // Importa AuthProvider

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider> {/* Envuelve tu aplicación con AuthProvider */}
      <App />
    </AuthProvider>
  </React.StrictMode>
);
