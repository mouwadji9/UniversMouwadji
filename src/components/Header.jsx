import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaFeatherAlt,
  FaStar,
  FaBlog,
  FaInfoCircle,
  FaEnvelope,
} from "react-icons/fa";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-sm">
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
          <span className="ms-2 text-primary">Mouwadji</span>
          <span className="text-danger">Univers</span>
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
            <li className="nav-item ms-3 me-3">
              {" "}
              {/* Ajoutez me-3 ici */}
              <Link className="nav-link custom-nav-link" to="/">
                <FaHome className="me-1" /> Accueil
              </Link>
            </li>
            <li className="nav-item me-3">
              {" "}
              {/* Ajoutez me-3 ici */}
              <Link className="nav-link custom-nav-link" to="/Blogs">
                <FaBlog className="me-1" /> Mes Blogs
              </Link>
            </li>
            <li className="nav-item me-3">
              {" "}
              {/* Ajoutez me-3 ici */}
              <Link className="nav-link custom-nav-link" to="/about">
                <FaInfoCircle className="me-1" /> À Propos
              </Link>
            </li>
            <li className="nav-item me-3">
              {" "}
              {/* Ajoutez me-3 ici */}
              <Link className="nav-link custom-nav-link" to="/contact">
                <FaEnvelope className="me-1" /> Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
