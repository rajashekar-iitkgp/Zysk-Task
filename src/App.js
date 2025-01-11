// src/App.js
import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import HeroSection from "./components/HeroSection";
import Logo from "./components/Logo";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Trail from "./components/Trail";
import Touch from "./components/Touch";
import FAQComponent from "./components/FAQ";
function App() {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <HeroSection />
      <Logo />
      <Feature />
      <FAQComponent />
      <Touch />
      <Trail />
      <Footer />
    </div>
  );
}

export default App;
