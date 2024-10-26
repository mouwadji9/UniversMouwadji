import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <footer className="bg-light text-center text-lg-start mt-4 p-4">
      <div className="container">
        {/* Logo et citation */}
        <div className="row align-items-center mb-3">
          <div className="col-md-4 text-md-start mb-2 mb-md-0">
            <h5 className="d-flex align-items-center">
              <span className="logo-icon" role="img" aria-label="logo">🦁</span>
              <span className="ms-2" style={{ color: '#3498db', fontWeight: 'bold' }}>Mouwadji</span>
              <span style={{ color: '#e74c3c', fontWeight: 'bold' }}>Univers</span>
            </h5>
          </div>
          <div className="col-md-8">
            <blockquote className="blockquote mb-0" style={{ fontStyle: 'italic', fontSize: '1rem', color: '#7f8c8d' }}>
              “Jamais il ne chasse rassasié, et jamais de la chasse d’autrui il n’en mange. Il préfère se suicider que d’être un fardeau.”
              <footer className="blockquote-footer mt-1">Lion ~mouwadji</footer>
            </blockquote>
          </div>
        </div>

        {/* Liens réseaux sociaux */}
        <div className="text-center mb-3">
          <h6 className="mb-3">Suivez-moi</h6>
          <a href="https://twitter.com/ton_profile" className="btn btn-outline-primary btn-sm mx-1" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com/ton_profile" className="btn btn-outline-danger btn-sm mx-1" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com/in/ton_profile" className="btn btn-outline-info btn-sm mx-1" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        {/* Adresse email et copyright */}
        <div className="text-center">
          <p>Contactez-moi : <a href="mailto:mouwadji.mf@gmail.com">mouwadji.mf@gmail.com</a></p>
          <p>&copy; {new Date().getFullYear()} UniversMouwadji. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
