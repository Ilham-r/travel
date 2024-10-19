import React from "react";
import Hero from "./sections/Hero";
import Recent from "./sections/Recentview";
import Destinations from "./sections/Destinations";
import Hotels from "./sections/Hotels";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Recent />
      <Destinations />
      <Hotels />
    </>
  );
};

export default HomePage;
