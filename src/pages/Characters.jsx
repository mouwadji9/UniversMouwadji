import React, { useState } from "react";
import { FaUser } from "react-icons/fa"; // Import de l'icône utilisateur
import "./Characters.css";

const Characters = () => {
  const people = [
    {
      id: 1,
      name: "Alioune Sarr",
      role: "Philosophe",
      image:
        "http://ts2.mm.bing.net/th?id=OIP.AJ7-iOhQDIyv0ryBXRVl3wHaFj&pid=15.1",
      details:
        "Alioune Sarr est un philosophe influent, connu pour ses écrits sur la moralité et l'éthique...",
    },
    {
      id: 2,
      name: "Fatou Ndiaye",
      role: "Poète",
      image: "data:image/jpeg;base64,...",
      details:
        "Fatou Ndiaye est une poète qui explore des thèmes de la vie quotidienne avec une profondeur unique...",
    },
    {
      id: 3,
      name: "Cheikh Ba",
      role: "Historien",
      image:
        "https://th.bing.com/th/id/OIP.1v1LyOL7jzgNndpyVfDlGAHaFj?w=219&h=180&c=7&r=0&o=5&pid=1.7",
      details:
        "Cheikh Ba est un historien dont les travaux mettent en lumière des événements méconnus du passé...",
    },
  ];

  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <div className="container mt-4">
      <h1 className="section-title">Personnes Favorites</h1>
      <div className="row">
        {/* Colonne avec la liste des personnes */}
        <div className="col-md-4">
          <h2 className="text-primary text-center mb-3">Liste des Personnes</h2>
          <table className="table table-hover table-striped shadow-sm">
            <tbody>
              {people.map((person) => (
                <tr
                  key={person.id}
                  onClick={() => setSelectedPerson(person)}
                  className="person-row"
                >
                  <td className="text-center">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="person-image"
                    />
                  </td>
                  <td>
                    <strong>{person.name}</strong>
                    <br />
                    <span className="text-muted">{person.role}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Colonne avec les détails de la personne sélectionnée */}
        <div className="col-md-8">
          <div className="person-details shadow-sm rounded p-4">
            <h2 className="text-dark text-center">{selectedPerson.name}</h2>
            <img
              src={selectedPerson.image}
              alt={selectedPerson.name}
              className="person-image-large d-block mx-auto mb-3"
            />
            <p className="text-center">
              <FaUser className="text-primary me-2" />
              <strong>Rôle :</strong> {selectedPerson.role}
            </p>
            <p>{selectedPerson.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Characters;
