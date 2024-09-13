// src/App.tsx
import MyNavbar from "./components/Navbar";
import Hero from "./components/Hero";
import NewsSection from "./components/NewsSection";
import PlansSection from "./components/PlansSelector";
import SearchSection from "./components/SearchSection";
import Results from "./components/results.tsx";

const App = () => {
  return (
    <div>
      <MyNavbar />
      <Hero />
      <NewsSection />
      <PlansSection />
      <SearchSection />
      <Results />
    </div>
  );
};

export default App;
