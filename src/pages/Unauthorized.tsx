import React from 'react';

const Unauthorized: React.FC = () => {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100">
      <h2>No tienes permiso para acceder a esta página.</h2>
    </div>
  );
};

export default Unauthorized;