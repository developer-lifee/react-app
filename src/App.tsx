import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/login";
import Register from "./pages/register"; // Import Register component
import Quiz from "./pages/quiz";
import Forms from "./pages/forms";
import BibliotecaPage from './pages/BibliotecaPage';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute
import './i18n';

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <main style={{ marginBottom: '70px' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} /> {/* Add register route */}
          {/* Rutas protegidas */}
          <Route path="/quiz" element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          } />
          <Route path="/forms" element={
            <PrivateRoute>
              <Forms />
            </PrivateRoute>
          } />
          {/* Rutas públicas */}
          <Route path="/biblioteca" element={<BibliotecaPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
