import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
/* import AppleLogin from 'react-apple-login'; */
import '../styles/login.css';

const clientId = "702842350274-5d254fq60uj8d9aadr1tlm06bulrpvtl.apps.googleusercontent.com";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login with:", email, password);
  };

  const handleGoogleLoginSuccess = (response: any) => {
    console.log("Google login success:", response);
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.error("Google login error:", error);
  };

  // Funciones de Apple Login comentadas
  /*
  const handleAppleLoginSuccess = (response: any) => {
    console.log("Apple login success:", response);
  };

  const handleAppleLoginError = (error: any) => {
    console.error("Apple login error:", error);
  };
  */

  return (
    <div className="login-page d-flex align-items-center min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <div className="login-card p-4 rounded shadow-sm">
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleLogin}>
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

              <div className="text-center mb-3">
                <span>or</span>
              </div>

              <div className="social-login d-flex justify-content-between">
                <GoogleLogin
                  clientId={clientId}
                  buttonText="Login with Google"
                  onSuccess={handleGoogleLoginSuccess}
                  onFailure={handleGoogleLoginFailure}
                  cookiePolicy={'single_host_origin'}
                  render={(renderProps) => (
                    <Button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      variant="outline-danger"
                      className="w-100 me-2"
                    >
                      <i className="fab fa-google me-2"></i> Google
                    </Button>
                  )}
                />
                
                {/* Comentado el botón de Apple Login */}
                {/* 
                <AppleLogin
                  clientId="your-client-id"
                  redirectURI="your-redirect-uri"
                  responseType="code"
                  responseMode="query"
                  usePopup={true}
                  onSuccess={handleAppleLoginSuccess}
                  onError={handleAppleLoginError}
                  render={(renderProps) => (
                    <Button
                      onClick={renderProps.onClick}
                      variant="dark"
                      className="w-100"
                    >
                      <i className="fab fa-apple me-2"></i> Apple
                    </Button>
                  )}
                /> 
                */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
