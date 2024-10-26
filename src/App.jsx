import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Writings from "./pages/Writings"; // Page pour tes écrits
import Characters from "./pages/Characters"; // Page pour les personnages favoris
import Blogs from "./pages/Blogs"; // Page pour les inspirations
import About from "./pages/About"; // Page À propos
import Contact from "./pages/Contact"; // Page de contact
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/writings" element={<Writings />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Ajoutez d'autres routes ici */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
