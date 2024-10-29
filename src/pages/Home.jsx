import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaFeatherAlt,
  FaBrain,
  FaUserGraduate,
  FaMosque,
  FaCode,
  FaGlobe,
  FaStar,
} from "react-icons/fa";
import { publications, categories } from "../data/Blogsdata";

const Home = ({ setSelectedCategoryApp }) => {
  const navigate = useNavigate();

  const handleDiscoverClick = (category) => {
    setSelectedCategoryApp(category);
    navigate("/blogs"); // Navigate to /blogs without reloading
  };

  // Fetch one publication per category
  const featuredPublications = categories.map((category) => {
    const publication = publications.find((pub) =>
      category.publications.includes(pub.id)
    );
    return { ...publication, category: category.name };
  });

  return (
    <div className="container mt-4">
      <h1 className="border border-success border-3 rounded p-3 text-center mb-5 bg-light shadow-sm">
        Bienvenue dans Mon Univers d'Apprentissage et d'Exploration
      </h1>

      <div className="mb-5 text-center">
        <p className="lead">
          Je m’appelle <strong>Mouhamed Fall</strong>, connu sous le nom de
          plume <strong>Mouwadji</strong>. En tant que penseur, écrivain et
          développeur, cet espace est mon invitation à explorer des réflexions
          inspirantes et des ressources significatives.
        </p>
        <p className="text-muted">
          Ici, vous trouverez des blogs dans plusieurs catégories, chacun conçu
          pour inspirer, enseigner et élargir votre compréhension dans des
          domaines variés.
        </p>
      </div>

      <h2 className="border border-success border-3 rounded p-3 text-center mb-5 bg-light shadow-sm">
        Catégories de Blogs
      </h2>
      <div className="row my-4">
        {/* Blog Écrits */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <FaFeatherAlt size={40} className="text-primary mb-3" />
              <h5 className="card-title">Écrits</h5>
              <p className="card-text">
                Explorez mes réflexions écrites sur divers sujets, des
                observations personnelles aux réflexions philosophiques.
              </p>
              <button
                onClick={() => handleDiscoverClick("Écrits")}
                className="btn btn-outline-primary"
              >
                Découvrir
              </button>
            </div>
          </div>
        </div>

        {/* Blog Psychologie */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <FaBrain size={40} className="text-danger mb-3" />
              <h5 className="card-title">Psychologie</h5>
              <p className="card-text">
                Découvrez les subtilités du comportement humain et de la
                psychologie, un domaine qui me passionne profondément.
              </p>
              <button
                onClick={() => handleDiscoverClick("Psychologie")}
                className="btn btn-outline-danger"
              >
                Découvrir
              </button>
            </div>
          </div>
        </div>

        {/* Blog Développement Personnel */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <FaUserGraduate size={40} className="text-success mb-3" />
              <h5 className="card-title">Développement Personnel</h5>
              <p className="card-text">
                Plongez dans mon parcours de développement personnel, avec des
                conseils pratiques pour votre croissance.
              </p>
              <button
                onClick={() => handleDiscoverClick("Développement Personnel")}
                className="btn btn-outline-success"
              >
                Découvrir
              </button>
            </div>
          </div>
        </div>

        {/* Blog L'Islam */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <FaMosque size={40} className="text-info mb-3" />
              <h5 className="card-title">L’Islam</h5>
              <p className="card-text">
                Pour ceux qui recherchent une meilleure compréhension des
                enseignements islamiques, ce blog offre des conseils
                accessibles.
              </p>
              <button
                onClick={() => handleDiscoverClick("L'Islam")}
                className="btn btn-outline-info"
              >
                Découvrir
              </button>
            </div>
          </div>
        </div>

        {/* Blog Codage */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <FaCode size={40} className="text-dark mb-3" />
              <h5 className="card-title">Codage</h5>
              <p className="card-text">
                En tant que développeur diplômé, je partage ici des astuces de
                codage et des aperçus de mon parcours en programmation.
              </p>
              <button
                onClick={() => handleDiscoverClick("Codage")}
                className="btn btn-outline-dark"
              >
                Découvrir
              </button>
            </div>
          </div>
        </div>

        {/* Blog Nouvelles */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <FaGlobe size={40} className="text-primary mb-3" />
              <h5 className="card-title">Nouvelles</h5>
              <p className="card-text">
                Restez informé avec mes analyses critiques de l’actualité
                mondiale, proposant des perspectives sur les événements majeurs.
              </p>
              <button
                onClick={() => handleDiscoverClick("Nouvelles")}
                className="btn btn-outline-primary"
              >
                Découvrir
              </button>
            </div>
          </div>
        </div>

        {/* Blog Personnages Favoris */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm h-100">
            <div className="card-body text-center">
              <FaStar size={40} className="text-warning mb-3" />
              <h5 className="card-title">Personnages Favoris</h5>
              <p className="card-text">
                Découvrez les figures qui m’ont inspiré, avec leurs histoires et
                les leçons qu’elles m’ont transmises.
              </p>
              <button
                onClick={() => handleDiscoverClick("Personnages Favoris")}
                className="btn btn-outline-warning"
              >
                Découvrir
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="border border-success border-3 rounded p-3 text-center mb-5 bg-light shadow-sm">
        Ma Mission
      </h2>
      <p className="lead mt-3">
        Avec mon expertise et mon engagement envers l'auto-apprentissage, j'ai
        pour objectif de créer une plateforme où le savoir est partagé
        librement, pour que chacun puisse élargir sa vision, éviter les erreurs,
        et saisir de nouvelles opportunités.
      </p>
      <p className="text-muted">
        Rejoignez-moi dans ce voyage, explorez les blogs, et apprenons et
        grandissons ensemble.
      </p>

      <h2 className="border border-success border-3 rounded p-3 text-center mb-5 bg-light shadow-sm">
        Dernières Publications
      </h2>
      <div className="row mt-3">
        {featuredPublications.map((publication) => (
          <div className="col-md-4 mb-4" key={publication.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{publication.title}</h5>
                <p className="card-text">{publication.excerpt}</p>
                <button
                  onClick={() => navigate(publication.link)}
                  className="btn btn-outline-primary"
                >
                  Lire la suite
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
