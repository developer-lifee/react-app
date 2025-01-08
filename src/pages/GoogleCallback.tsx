import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../util/axiosConfig';

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const token = query.get('token');

    if (token) {
      api.post('/auth/google/callback', { token })
        .then(response => {
          const yourAppToken = response.data.access_token;
          localStorage.setItem('token', yourAppToken);
          const decodedToken = parseJwt(yourAppToken);
          
          const userData = {
            email: decodedToken.email,
            role: decodedToken.role,
          };
          localStorage.setItem('user', JSON.stringify(userData));

          if (decodedToken.isRegistered) {
            navigate('/');  // Changed from /dashboard to /
          } else {
            navigate('/register?token=' + yourAppToken);
          }
        })
        .catch(error => {
          console.error('Error during Google authentication:', error);
          navigate('/login');
        });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return <div>Loading...</div>;
};

function parseJwt(token: string) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}

export default GoogleCallback;
