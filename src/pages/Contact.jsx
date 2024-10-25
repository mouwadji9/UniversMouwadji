import React, { useState } from 'react';
import './Contact.css'; // Create a separate CSS file for additional styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message envoyé');
  };

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <h1 className="mb-4 title">Contactez Mouwadji</h1>
      
      <div className="text-center mb-4 contact-info">
        <p><strong>Téléphone :</strong> 613-618-3790</p>
        <p><strong>Email :</strong> <a href="mailto:mouwadji.mf@gmail.com">mouwadji.mf@gmail.com</a></p>
        <p><strong>GitHub :</strong> <a href="https://github.com/mouwadji7" target="_blank" rel="noopener noreferrer">mouwadji7</a></p>
        <p><strong>Twitter :</strong> <a href="https://twitter.com/mouwadji9" target="_blank" rel="noopener noreferrer">@mouwadji9</a></p>
        <p><strong>Snapchat :</strong> mouwadji</p>
        <p><strong>LinkedIn :</strong> <a href="https://www.linkedin.com/in/mouwadji9" target="_blank" rel="noopener noreferrer">mouwadji9</a></p>
      </div>
      
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nom</label>
          <input 
            type="text" 
            className="form-control text-center" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control text-center" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea 
            className="form-control text-center" 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            rows="4" 
            required 
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100 submit-button">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
