import React, { useState } from 'react';

const Writings = () => {
  const writings = [
    { title: "Ô toi, le missionnaire", content: `Les rides autour de tes yeux racontent beaucoup sur ta situation...` },
    { title: "Musulmans nous sommes", content: `Musulmans nous sommes, nous n'avons pour toit que là où se trouve Dieu...` },
    { title: "La confiance", content: `La confiance en tant que tel je ne le fais à personne, je suis sûr d’une chose...` },
    { title: "Notre voix, notre chemin", content: `Notre voix, notre chemin, notre destination...` },
    { title: "Ô martyr", content: `Ô martyr, sans aucun doute, vous êtes mort en sachant que vous avez réussi...` },
    // Ajoute d'autres écrits ici
  ];

  const [selectedWriting, setSelectedWriting] = useState(writings[0]);

  return (
    <div className="container mt-3">
      <h1 className="border border-success border-3 rounded p-2 text-center mb-3">Mes Écrits</h1>
      <p>
  Mes écrits sont un voyage à travers des réflexions profondes, des poèmes et des critiques. Ils explorent la complexité de l'âme humaine, la spiritualité, et les questionnements qui façonnent notre existence. Que vous cherchiez à comprendre, à vous inspirer ou à méditer, chaque texte est une invitation à voir le monde sous un nouvel angle.
</p>

      <div className="row">
        {/* Colonne des titres des écrits en table */}
        <div
          className="col-sm-6 p-3"
          style={{
            border: '2px solid #007bff',
            borderRadius: '8px',
          }}
        >
          <h2 className="text-center">Titres des Écrits</h2>
          <table className="table table-striped">
            <tbody>
              {writings.map((writing, index) => (
                <tr key={index}>
                  <td>
                    <a
                      href="#"
                      onClick={() => setSelectedWriting(writing)}
                      style={{
                        color: selectedWriting.title === writing.title ? '#007bff' : '#333',
                        textDecoration: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      {writing.title}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Colonne de contenu sélectionné */}
        <div
          className="col-sm-6 p-3"
          style={{
            border: '2px solid #343a40',
            borderRadius: '8px',
            backgroundColor: '#f8f9fa',
          }}
        >
          <h2 style={{ color: '#343a40' }} className="text-center" >{selectedWriting.title}</h2>
          <p style={{ color: '#333' }}>{selectedWriting.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Writings;
