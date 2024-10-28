import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Writings from "./pages/Writings";
import Characters from "./pages/Characters";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // État pour la catégorie sélectionnée
  const [selectedCategoryApp, setSelectedCategoryApp] = useState(null);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Home setSelectedCategory={setSelectedCategoryApp} />}
        />
        <Route path="/writings" element={<Writings />} />
        <Route path="/characters" element={<Characters />} />
        <Route
          path="/blogs"
          element={
            <Blogs
              selectedCategoryApp={selectedCategoryApp}
              setSelectedCategoryApp={setSelectedCategoryApp}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Ajoutez d'autres routes ici */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
