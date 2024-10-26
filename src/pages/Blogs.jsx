// Blogs.js
import React, { useState } from "react";
import { categories, publications, people } from "../data/Blogsdata";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  // Filtre les publications par catégorie sélectionnée
  const filteredPublications = publications.filter(
    (pub) => pub.category === selectedCategory.name
  );

  return (
    <div className="container mt-4">
      <h1 className="border border-success border-3 rounded p-2 text-center mb-3">
        Nos Blogs Thématiques
      </h1>

      {/* Navbar des catégories */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded mb-4">
        <div className="navbar-nav mx-auto justify-content-center">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              className={`nav-link ${
                selectedCategory.id === category.id ? "active" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategory(category);
              }}
            >
              {category.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Contenu des publications */}
      <div className="row">
        {/* Colonne des titres */}
        <div className="col-md-4">
          <h3 className="border border-success border-3 rounded p-2 text-center mb-3">
            {selectedCategory.name}
          </h3>
          <ul
            className="list-group"
            style={{
              maxHeight: "300px", // Limite la hauteur à 300px
              overflowY: "auto", // Active le défilement vertical si nécessaire
              padding: "0.5rem",
              border: "1px solid #ddd",
              borderRadius: "4px",
              backgroundColor: "#f9f9f9",
            }}
          >
            {filteredPublications.map((pub) => (
              <li
                key={pub.id}
                className="list-group-item"
                onClick={() =>
                  setSelectedCategory({
                    ...selectedCategory,
                    activePublication: pub,
                  })
                }
                style={{ cursor: "pointer" }}
              >
                {pub.title}
              </li>
            ))}
          </ul>
        </div>

        {/* Colonne des détails */}
        <div className="col-md-8">
          {selectedCategory.activePublication ? (
            <div className="border p-3 rounded">
              <h4>{selectedCategory.activePublication.title}</h4>
              <p>{selectedCategory.activePublication.excerpt}</p>
              <ul>
                {selectedCategory.activePublication.contentDetails.map(
                  (detail, idx) => (
                    <li key={idx}>
                      <h5>{detail.title}</h5>
                      {/* Conteneur défilant pour les sections longues */}
                      <div
                        style={{
                          maxHeight: "300px", // Limite la hauteur à 300px
                          overflowY: "auto", // Active le défilement vertical si nécessaire
                          padding: "0.5rem",
                          border: "1px solid #ddd",
                          borderRadius: "4px",
                          backgroundColor: "#f9f9f9",
                        }}
                      >
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
                            alt=""
                            style={{ width: "100px", marginRight: "10px" }}
                          />
                        ))}
                      </div>
                    </li>
                  )
                )}
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
