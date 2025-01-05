import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import icons
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
  email: string;
  firstName?: string;
  lastName?: string;
}

axios.defaults.baseURL = 'https://api.icegeneralcontractors.com/api';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    nombre: '',
    segundoNombre: '',
    apellidos: '',
    fechaNacimiento: '',
    telefono: '',
    direccion: '',
    ssn: '',
    paisNacimiento: '',
    nacionalidad: '',
    genero: '',
    idioma: '',
    documento: null as File | null,
    documentoTipo: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false); // Add state for password visibility
  const [isTokenValid, setIsTokenValid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    if (token) {
      try {
        const decoded = jwtDecode<DecodedToken>(token);
        setFormData((prev) => ({
          ...prev,
          email: decoded.email || '',
          nombre: decoded.firstName || '',
          apellidos: decoded.lastName || '',
        }));
        setIsTokenValid(true);
      } catch (error) {
        console.error('Invalid token:', error);
      }
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, documento: e.target.files ? e.target.files[0] : null });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    const data = new FormData();
    if (!isTokenValid) {
      data.append('email', formData.email);
      data.append('password', formData.password);
    }
    // data.append('role', 'user'); // Removed role assignment from frontend
    data.append('firstName', formData.nombre);
    data.append('middleName', formData.segundoNombre);
    data.append('lastName', formData.apellidos);
    data.append('dateOfBirth', formData.fechaNacimiento);
    data.append('phoneNumber', formData.telefono);
    data.append('address', formData.direccion);
    data.append('ssn', formData.ssn);
    data.append('countryOfBirth', formData.paisNacimiento);
    data.append('nationality', formData.nacionalidad);
    data.append('gender', formData.genero);
    data.append('preferredLanguage', formData.idioma);
    data.append('documentType', formData.documentoTipo);
    if (formData.documento) {
      data.append('documento', formData.documento, formData.documento.name);
    }

    try {
      // Enviar los datos al backend, incluyendo el archivo
      const endpoint = isTokenValid ? '/users/complete-registration' : '/users';
      const response = await axios.post(endpoint, data);

      const userId = response.data.id;
      navigate(`/?welcome=true&userId=${userId}`);
    } catch (error) {
      setError('Registration failed. Please try again.');
      console.error('Registration failed', error);
    }
  };

  return (
    <div className="register-page d-flex align-items-center min-vh-100">
      <Container>
        <Row className="justify-content-center">
          <Col md={6} lg={5}>
            <div className="register-card p-4 rounded shadow-sm">
              <h2 className="text-center mb-4">Register</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={onSubmit}>
                {!isTokenValid && (
                  <>
                    <Form.Group className="mb-3">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-4">
                      <Form.Label>Password</Form.Label>
                      <div style={{ position: 'relative' }}>
                        <Form.Control
                          type={showPassword ? 'text' : 'password'} // Toggle input type
                          placeholder="Password"
                          name="password"
                          id="password"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <span
                          onClick={togglePasswordVisibility}
                          style={{
                            position: 'absolute',
                            right: '10px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            cursor: 'pointer',
                          }}
                        >
                          {showPassword ? <FaEyeSlash /> : <FaEye />} {/* Toggle icon */}
                        </span>
                      </div>
                    </Form.Group>
                  </>
                )}
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" name="nombre" id="nombre" value={formData.nombre} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Segundo Nombre (si aplica)</Form.Label>
                  <Form.Control type="text" name="segundoNombre" id="segundoNombre" value={formData.segundoNombre} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Apellidos</Form.Label>
                  <Form.Control type="text" name="apellidos" id="apellidos" value={formData.apellidos} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Fecha de Nacimiento</Form.Label>
                  <Form.Control type="date" name="fechaNacimiento" id="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Número de Teléfono</Form.Label>
                  <Form.Control type="text" name="telefono" id="telefono" value={formData.telefono} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Dirección</Form.Label>
                  <Form.Control type="text" name="direccion" id="direccion" value={formData.direccion} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Número de Seguro Social (SSN) (Opcional)</Form.Label>
                  <Form.Control type="text" name="ssn" id="ssn" value={formData.ssn} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>País de Nacimiento</Form.Label>
                  <Form.Control type="text" name="paisNacimiento" id="paisNacimiento" value={formData.paisNacimiento} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Nacionalidad</Form.Label>
                  <Form.Control type="text" name="nacionalidad" id="nacionalidad" value={formData.nacionalidad} onChange={handleChange} required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Seleccione una opción</Form.Label>
                  <Form.Control as="select" name="genero" id="genero" value={formData.genero} onChange={handleChange} required>
                    <option value="">Seleccione</option>
                    <option value="Masculino">Masculino</option>
                    <option value="Femenino">Femenino</option>
                    <option value="Otro">Otro</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Seleccione su idioma preferido para la comunicación</Form.Label>
                  <Form.Control as="select" name="idioma" id="idioma" value={formData.idioma} onChange={handleChange} required>
                    <option value="">Seleccione</option>
                    <option value="English">English</option>
                    <option value="Español">Español</option>
                    <option value="Otro">Otro</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Por favor, suba uno de los documentos siguientes</Form.Label>
                  <Form.Control as="select" name="documentoTipo" id="documentoTipo" value={formData.documentoTipo} onChange={handleChange} required>
                    <option value="">Seleccione</option>
                    <option value="Licencia de Conducir">Licencia de Conducir</option>
                    <option value="Tarjeta verde">Tarjeta verde</option>
                    <option value="Otro Documento de Identificación Gubernamental">Otro Documento de Identificación Gubernamental</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label>Subir Documento</Form.Label>
                  <Form.Control
                    type="file"
                    name="documento"
                    id="documento"
                    accept=".pdf,.jpg,.png"
                    onChange={handleFileChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mb-3">
                  {isTokenValid ? 'Complete Registration' : 'Register'}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;