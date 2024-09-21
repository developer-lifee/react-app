// src/App.tsx
import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlansSection from "./components/PlansSelector";
import Results from "./components/results.tsx";
import NewsCarousel from "./components/NewsCard.tsx";
import Footer from "./components/Footer";
import CoursesAndServices from "./components/CoursesAndServices.tsx";

const App = () => {
  return (
    <div>
      <MyNavbar />
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
  );
};

export default App;
