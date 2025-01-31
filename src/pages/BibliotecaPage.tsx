// src/pages/BibliotecaPage.tsx
import React from 'react';
import Biblioteca from '../components/Biblioteca'; // Asegúrate de que el path sea correcto
import PrivateRoute from '../components/PrivateRoute';

const BibliotecaPage: React.FC = () => {
  return (
    <div>
      <Biblioteca />
    </div>
  );
};

export default () => (
  <PrivateRoute roles={['admin', 'user']}>
    <BibliotecaPage />
  </PrivateRoute>
);
