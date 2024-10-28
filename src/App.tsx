import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Login from "./pages/login";
import Quiz from "./pages/quiz";  // Importa el componente Quiz
import Forms from "./pages/forms";  // Importa el componente Quiz
import './i18n';

const App = () => {
  return (
    <Router>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> {/* Página principal */}
        <Route path="/about-us" element={<AboutPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/quiz" element={<Quiz />} /> {/* Nueva ruta para el Quiz */}
        <Route path="/forms" element={<Forms />} /> {/* Nueva ruta para el Quiz */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
