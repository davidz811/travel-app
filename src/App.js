import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Destinations from "./components/Destinations";
import About from "./components/About";
import DestinationName from "./components/DestinationName";
import CarouselComp from "./components/CarouselComp";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Destinations />
      <About />
      <DestinationName />
      <CarouselComp />
      <Footer />
    </div>
  );
}

export default App;
