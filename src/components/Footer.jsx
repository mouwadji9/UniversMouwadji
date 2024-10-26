import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-light text-center text-lg-start mt-4 p-4">
      <div className="container">
        {/* Logo stylisé */}
        <div className="row align-items-center mb-3">
          <div className="col-md-4 text-md-start mb-2 mb-md-0">
            <h5 className="d-flex align-items-center footer-logo">
              <span className="logo-icon" role="img" aria-label="logo">
                🦁
              </span>
              <span className="ms-2 text-primary fw-bold">Mouwadji</span>
              <span className="text-danger fw-bold">Univers</span>
            </h5>
          </div>
          <div className="col-md-8">
            <blockquote
              className="blockquote mb-0 text-muted"
              style={{ fontStyle: "italic", fontSize: "1rem" }}
            >
              “Jamais il ne chasse rassasié, et jamais de la chasse d’autrui il
              n’en mange. Il préfère se suicider que d’être un fardeau.”
              <footer className="blockquote-footer mt-1">Lion ~mouwadji</footer>
            </blockquote>
          </div>
        </div>

        {/* Liens réseaux sociaux avec icônes */}
        <div className="social-links text-center mb-3">
          <h6 className="mb-3">Suivez-moi</h6>
          <a
            href="https://twitter.com/ton_profile"
            className="social-icon btn btn-outline-primary mx-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter /> Twitter
          </a>
          <a
            href="https://instagram.com/ton_profile"
            className="social-icon btn btn-outline-danger mx-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://linkedin.com/in/ton_profile"
            className="social-icon btn btn-outline-info mx-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* Contact et Copyright */}
        <div className="text-center">
          <p>
            Contactez-moi :{" "}
            <a href="mailto:mouwadji.mf@gmail.com">mouwadji.mf@gmail.com</a>
          </p>
          <p>
            &copy; {new Date().getFullYear()} UniversMouwadji. Tous droits
            réservés.
          </p>
        </div>
        <div className="blockquote-footer text-end mt-4">
          Mouhamed Fall ~ Mouwadji
        </div>
      </div>
    </footer>
  );
};

export default Footer;
