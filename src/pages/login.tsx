import React, { useContext, useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { AuthContext } from '../context/AuthContext';
import { FaGoogle, FaApple } from 'react-icons/fa'; // Import icons
import '../styles/login.css';

const Login = () => {
  const { handleLogin, handleAppleLogin } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      localStorage.setItem('token', token);
      navigate('/dashboard'); // Change to your preferred route
    }
  }, [navigate]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    try {
      const user = await handleLogin(email, password);
      // Redirigir basado en el rol del usuario
      if (user.role === 'admin') {
        navigate('/forms');
      } else {
        navigate('/quiz');
      }
    } catch (error) {
      setError('Login failed. Please try again.');
      console.error('Login failed', error);
    }
  };

  const goToRegister = () => {
    navigate('/register'); // Navigate to the register page
  };

  return (
    <div className="login-page d-flex align-items-center min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <div className="login-card p-4 rounded shadow-sm">
              <h2 className="text-center mb-4">Login</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-4">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </Form.Group>

                <Button variant="primary" type="submit" className="w-100 mb-3">
                  Login
                </Button>
              </Form>
              <Button variant="secondary" className="w-100 mb-3" onClick={goToRegister}>
                Create User
              </Button>
              <Row>
                <Col>
                  <Button
                    variant="danger"
                    className="w-100 mb-3 d-flex align-items-center justify-content-center"
                    onClick={() => {
                      window.location.href = 'https://api.icegeneralcontractors.com/api/auth/google/';
                    }}
                  >
                    <FaGoogle className="me-2" /> Login with Google
                  </Button>
                </Col>
                <Col>
                  <Button variant="dark" className="w-100 mb-3 d-flex align-items-center justify-content-center" onClick={handleAppleLogin}>
                    <FaApple className="me-2" /> Login with Apple
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );

};

export default Login;
