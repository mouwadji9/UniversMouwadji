import React from "react";
import {
  FaFeatherAlt,
  FaBrain,
  FaUserGraduate,
  FaMosque,
  FaCode,
  FaGlobe,
  FaStar,
} from "react-icons/fa"; // Importation des icônes
import "./About.css";

const About = () => {
  return (
    <div className="container mt-5">
      <h1 className="section-title">À Propos de Mouwadji</h1>

      <div className="about-content">
        <p>
          Je suis <strong>Mouhamed Fall</strong>, également connu sous le nom de
          plume <strong>Mouwadji</strong>. D'origine{" "}
          <strong>sénégalaise</strong> et résidant actuellement au{" "}
          <strong>Canada</strong>, je suis un développeur et écrivain passionné.
          Mon parcours reflète une profonde curiosité pour la{" "}
          <strong>technologie</strong>, l'<strong>écriture</strong>, et la{" "}
          <strong>réflexion philosophique</strong>.
        </p>

        <p>
          Fort d'un diplôme en Programmation Informatique du Collège La Cité, je
          maîtrise des technologies comme <em>React, Spring Boot, MongoDB</em>,
          et j'ai acquis une solide expérience en{" "}
          <strong>service à la clientèle</strong> dans des environnements
          dynamiques. Mon travail allie créativité et compétences techniques
          pour créer des solutions qui répondent aux besoins des utilisateurs.
        </p>

        <div className="interests-section shadow-sm rounded p-4">
          <h2 className="text-center mb-4">Ce Que Vous Trouverez Ici</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <FaFeatherAlt className="me-2 text-primary" />{" "}
              <strong>Écrits</strong> - Poèmes et réflexions sur les complexités
              humaines et existentielles.
            </li>
            <li className="list-group-item">
              <FaBrain className="me-2 text-danger" />{" "}
              <strong>Psychologie</strong> - Articles pour explorer les
              comportements et comprendre les motivations.
            </li>
            <li className="list-group-item">
              <FaUserGraduate className="me-2 text-success" />{" "}
              <strong>Développement Personnel</strong> - Conseils pratiques pour
              la croissance personnelle et professionnelle.
            </li>
            <li className="list-group-item">
              <FaMosque className="me-2 text-info" /> <strong>Islam</strong> -
              Des aperçus accessibles sur les principes islamiques pour une
              meilleure compréhension.
            </li>
            <li className="list-group-item">
              <FaCode className="me-2 text-dark" /> <strong>Codage</strong> -
              Tutoriels et astuces de développement pour les passionnés de
              technologie.
            </li>
            <li className="list-group-item">
              <FaGlobe className="me-2 text-primary" />{" "}
              <strong>Nouvelles</strong> - Analyses critiques sur des sujets
              d'actualité influents.
            </li>
            <li className="list-group-item">
              <FaStar className="me-2 text-warning" />{" "}
              <strong>Personnages Favoris</strong> - Réflexions sur des figures
              inspirantes et leurs leçons.
            </li>
          </ul>
        </div>

        <p className="mt-4">
          Mon objectif est de partager des ressources inspirantes et de fournir
          une plateforme pour ceux qui aspirent à une vie enrichissante, que ce
          soit à travers des connaissances techniques ou un développement
          personnel. Explorez mes écrits pour découvrir une nouvelle perspective
          sur le monde.
        </p>
      </div>

      <footer className="blockquote-footer text-end mt-4">
        Mouhamed Fall ~ Mouwadji
      </footer>
    </div>
  );
};

export default About;
