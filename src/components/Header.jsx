import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css"; // Ajouter un fichier CSS pour styles personnalisés

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
        {/* Logo stylisé */}
        <Link
          className="navbar-brand fw-bold d-flex align-items-center"
          to="/"
          style={{ fontSize: "1.5rem" }}
        >
          <span className="logo-icon" role="img" aria-label="logo">
            🌍
          </span>
          <span className="ms-2" style={{ color: "#3498db" }}>
            Mouwadji
          </span>
          <span style={{ color: "#e74c3c" }}>Univers</span>
        </Link>

        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Accueil
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/writings">
                Mes Écrits
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/characters">
                Personnages Favoris
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Blogs">
                Mes Blogs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                À Propos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
