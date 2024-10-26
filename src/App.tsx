import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/login";
import Quiz from "./pages/Quiz";  // Importa el componente de evaluación
import './i18n'; // Importa la configuración de i18next

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página principal */}
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} /> {/* Nueva ruta para el Quiz */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

