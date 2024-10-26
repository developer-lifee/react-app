// HomePage.tsx
import Hero from "../components/Hero";
import NewsCarousel from "../components/NewsCard";
import PlansSection from "../components/PlansSelector";
import Results from "../components/results";
import CoursesAndServices from "../components/CoursesAndServices";

const HomePage = () => (
  <div>
    <Hero />
    <NewsCarousel />
    <PlansSection />
    <Results />
    <CoursesAndServices />
  </div>
);

export default HomePage;
