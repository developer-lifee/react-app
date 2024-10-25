import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { GoogleLogin } from "react-google-login";
import AppleLogin from 'react-apple-login';

const clientId = "702842350274-5d254fq60uj8d9aadr1tlm06bulrpvtl.apps.googleusercontent.com";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para el inicio de sesión con email y password
    console.log("Login with:", email, password);
  };

  const handleGoogleLoginSuccess = (response: any) => {
    console.log("Google login success:", response);
  };

  const handleGoogleLoginFailure = (error: any) => {
    console.error("Google login error:", error);
  };

  const handleAppleLoginSuccess = (response: any) => {
    console.log("Apple login success:", response);
  };

  const handleAppleLoginFailure = (error: any) => {
    console.error("Apple login error:", error);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <div className="social-login">
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
        <AppleLogin
          clientId="your-client-id"
          redirectURI="your-redirect-uri"
          responseType="code"
          responseMode="query"
          usePopup={true}
          onSuccess={handleAppleLoginSuccess}
          onError={handleAppleLoginFailure}
          render={(renderProps: any) => (
            <Button onClick={renderProps.onClick} variant="dark">
              Login with Apple
            </Button>
          )}
        />
      </div>
    </div>
  );
};

export default Login;
