// src/App.tsx
import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import PlansSection from "./components/PlansSelector";
import Results from "./components/results.tsx";
import NewsCarousel from "./components/NewsCard.tsx";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <div style={{ marginBottom: '50px' }}>
        <Hero />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <NewsCarousel />
      </div>
      <div style={{ marginBottom: '50px' }}>
        <PlansSection />
      </div>
      <Results />
    </div>
  );
};

export default App;
