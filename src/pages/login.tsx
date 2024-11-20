import React, { useContext, useState } from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { AuthContext } from '../context/AuthContext';
import '../styles/login.css';

const Login = () => {
  const { handleLogin, handleGoogleLogin, handleCreateUser } = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (handleLogin) {
      await handleLogin(email, password);
    } else {
      console.error("handleLogin is not defined");
    }
  };

  return (
    <div className="login-page d-flex align-items-center min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <div className="login-card p-4 rounded shadow-sm">
              <h2 className="text-center mb-4">Login</h2>
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
              <Button variant="secondary" className="w-100 mb-3" onClick={handleCreateUser}>
                Create User
              </Button>
              <Button variant="danger" className="w-100" onClick={handleGoogleLogin}>
                Login with Google
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
