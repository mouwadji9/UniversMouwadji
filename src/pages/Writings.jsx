import React, { useState } from "react";
import { FaPenFancy } from "react-icons/fa"; // Import de l'icône
import "./Writings.css";

const Writings = () => {
  const writings = [
    {
      title: "Ô toi, le missionnaire",
      content: `Les rides autour de tes yeux racontent beaucoup sur ta situation...`,
    },
    {
      title: "Musulmans nous sommes",
      content: `Musulmans nous sommes, nous n'avons pour toit que là où se trouve Dieu...`,
    },
    {
      title: "La confiance",
      content: `La confiance en tant que tel je ne le fais à personne, je suis sûr d’une chose...`,
    },
    {
      title: "Notre voix, notre chemin",
      content: `Notre voix, notre chemin, notre destination...`,
    },
    {
      title: "Ô martyr",
      content: `Ô martyr, sans aucun doute, vous êtes mort en sachant que vous avez réussi...`,
    },
  ];

  const [selectedWriting, setSelectedWriting] = useState(writings[0]);

  return (
    <div className="container mt-3">
      <h1 className="border border-success border-3 rounded p-3 text-center mb-4 bg-light shadow-sm">
        Mes Écrits
      </h1>
      <p className="intro-text">
        Mes écrits sont un voyage à travers des réflexions profondes, des poèmes
        et des critiques. Ils explorent la complexité de l'âme humaine, la
        spiritualité, et les questionnements qui façonnent notre existence. Que
        vous cherchiez à comprendre, à vous inspirer ou à méditer, chaque texte
        est une invitation à voir le monde sous un nouvel angle.
      </p>

      <div className="row">
        {/* Colonne des titres des écrits */}
        <div className="col-sm-6 p-3 shadow-sm rounded border border-primary writings-titles">
          <h2 className="text-center">Titres des Écrits</h2>
          <table className="table table-striped">
            <tbody>
              {writings.map((writing, index) => (
                <tr key={index} className="writing-row">
                  <td>
                    <a
                      href="#"
                      onClick={() => setSelectedWriting(writing)}
                      className={
                        selectedWriting.title === writing.title
                          ? "active-title"
                          : "writing-title"
                      }
                    >
                      <FaPenFancy className="me-2 text-primary" />{" "}
                      {writing.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Colonne de contenu sélectionné */}
        <div className="col-sm-6 p-3 shadow-sm rounded border border-dark selected-writing">
          <h2 className="text-center text-dark">{selectedWriting.title}</h2>
          <p>{selectedWriting.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Writings;
