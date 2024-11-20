import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');

    if (token) {
      // Guardar el token en localStorage
      localStorage.setItem('token', token);

      // Decodificar el token y guardar el usuario
      const decodedToken: any = parseJwt(token);

      const userData = {
        email: decodedToken.email,
        role: decodedToken.role,
        // Agrega otros campos si los hay
      };

      localStorage.setItem('user', JSON.stringify(userData));

      // Redirigir al usuario
      navigate('/');
    } else {
      // Manejar error de autenticación
      navigate('/login');
    }
  }, [navigate]);

  return <div>Cargando...</div>;
};

// Función para decodificar el token JWT
function parseJwt(token: string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace('-', '+').replace('_', '/');
  return JSON.parse(window.atob(base64));
}

export default GoogleCallback;
