// HomePage.tsx
import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Hero from "../components/Hero";
import NewsCarousel from "../components/NewsCard";
import PlansSection from "../components/PlansSelector";
import Results from "../components/results";
import CoursesAndServices from "../components/CoursesAndServices";

const HomePage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const welcome = queryParams.get('welcome');
  const userId = queryParams.get('userId');

  return (
    <div>
      {welcome && userId && (
        <div className="alert alert-success">
          Welcome! Your user ID is {userId}.
        </div>
      )}
      <Hero />
      <NewsCarousel />
      <PlansSection />
      <Results />
      <CoursesAndServices />
    </div>
  );
};

export default HomePage;
