import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlansSection from "./components/PlansSelector";
import Results from "./components/results.tsx";
import NewsCarousel from "./components/NewsCard.tsx";
import Footer from "./components/Footer";
import CoursesAndServices from "./components/CoursesAndServices.tsx";
import HomePage from "./pages/AboutPage.tsx";



const App = () => {
  return (
    <Router>
      <div>
        <MyNavbar />
        <Routes>
          <Route path="/about-us" element={<HomePage />} />
        </Routes>
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
        <Footer />
      </div>
    </Router>
  );
};

export default App;
