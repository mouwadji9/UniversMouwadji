import React, { useState, useEffect } from "react";
import { categories, publications } from "../data/Blogsdata";
import {
  FaBook,
  FaBrain,
  FaUserGraduate,
  FaMosque,
  FaCode,
  FaGlobe,
  FaStar,
} from "react-icons/fa"; // Icônes des catégories
import "./Blogs.css";

const Blogs = ({ selectedCategoryApp, setSelectedCategoryApp }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    selectedCategoryApp || categories[0]
  );
  const [activePublication, setActivePublication] = useState(null);

  useEffect(() => {
    // Définit la publication par défaut lors du changement de catégorie
    const defaultPublication = publications.find(
      (pub) => pub.category === selectedCategory.name
    );
    setActivePublication(defaultPublication);
  }, [selectedCategory]);

  useEffect(() => {
    // Met à jour la catégorie sélectionnée lorsque selectedCategoryApp change
    if (selectedCategoryApp) {
      const category = categories.find(
        (cat) => cat.name === selectedCategoryApp
      );
      setSelectedCategory(category);
      setSelectedCategoryApp(null); // Réinitialise la sélection pour éviter les conflits
    }
  }, [selectedCategoryApp]);

  const filteredPublications = publications.filter(
    (pub) => pub.category === selectedCategory.name
  );

  return (
    <div className="container mt-4">
      <h1 className="border border-success border-3 rounded p-3 text-center mb-4 bg-light shadow-sm">
        Nos Blogs Thématiques
      </h1>

      {/* Navbar des catégories */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded mb-4 shadow-sm">
        <div className="navbar-nav mx-auto justify-content-center">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              className={`nav-link custom-nav-link me-2 ${
                selectedCategory.id === category.id ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory(category);
              }}
            >
              {categoryIcons[category.name]} {category.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Contenu des publications */}
      <div className="row">
        {/* Colonne des titres */}
        <div className="col-md-4 shadow-sm rounded p-3 border border-primary bg-light">
          <h3 className="text-center ">{selectedCategory.name}</h3>
          <ul className="list-group list-group-flush mt-3">
            {filteredPublications.map((pub) => (
              <li
                key={pub.id}
                className={`list-group-item ${
                  activePublication?.id === pub.id ? "active" : ""
                }`}
                onClick={() => setActivePublication(pub)}
                style={{ cursor: "pointer" }}
              >
                {pub.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne des détails */}
        <div className="col-md-8 shadow-sm rounded p-3 border border-dark bg-light">
          {activePublication ? (
            <div>
              <h4 className="text-dark">{activePublication.title}</h4>
              <p className="text-muted">{activePublication.excerpt}</p>
              <ul>
                {activePublication.contentDetails.map((detail, idx) => (
                  <li key={idx}>
                    <h5>{detail.title}</h5>
                    <div className="content-section">
                      {detail.section.split("\n").map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </div>
                    <div className="mt-3">
                      {detail.photos.map((photo, i) => (
                        <img
                          key={i}
                          src={photo}
                          alt="illustration"
                          className="content-photo"
                        />
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>Sélectionnez une publication pour voir les détails.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

// Dictionnaire d'icônes pour les catégories
const categoryIcons = {
  Écrits: <FaBook className="text-primary me-2" />,
  Psychologie: <FaBrain className="text-danger me-2" />,
  "Développement personnel": <FaUserGraduate className="text-success me-2" />,
  "L'islam": <FaMosque className="text-info me-2" />,
  Codage: <FaCode className="text-dark me-2" />,
  Nouvelles: <FaGlobe className="text-primary me-2" />,
  "Personnages favoris": <FaStar className="text-warning me-2" />,
};
