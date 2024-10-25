import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlansSection from "./components/PlansSelector";
import Results from "./components/results.tsx";
import NewsCarousel from "./components/NewsCard.tsx";
import Footer from "./components/Footer";
import CoursesAndServices from "./components/CoursesAndServices.tsx";
import HomePage from "./pages/AboutPage.tsx";
import Login from "./pages/Login"; // Importa la página de Login
import './i18n'; // Importar la configuración de i18next

const App = () => {
  return (
    <Router>
      <div>
        <MyNavbar /> {/* Barra de navegación que permanece en todas las páginas */}
        <Routes>
          <Route path="/AboutPage.tsx" element={<HomePage />} />
          <Route path="/login" element={<Login />} /> {/* Ruta de Login */}
          {/* Agrega otras rutas aquí si es necesario */}
        </Routes>

        {/* Asegúrate de que estos componentes solo se muestren en la página principal */}
        <div style={{ marginBottom: "70px" }}>
          <Hero />
        </div>
        <div style={{ marginBottom: "50px" }}>
          <NewsCarousel />
        </div>
        <div style={{ marginBottom: "50px" }}>
          <PlansSection />
        </div>
        <div style={{ marginBottom: "50px" }}>
          <Results />
        </div>
        <div style={{ marginBottom: "50px" }}>
          <CoursesAndServices />
        </div>

        {/* Pie de página */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

