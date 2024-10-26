import React from 'react';
import publications from '../data/PublicationsData';

const Home = () => {
  return (
    <div className="container mt-4">
      <h1 className="border border-success border-3 rounded p-2 text-center mb-3">Bienvenue sur MouwadjiUnivers</h1>
      <div>
      <p>
        Je m'appelle Mouhamed Fall, mais mon nom de plume est Mouwadji.
        <br />
        Penseur, écrivain, critiqueur, j'ai une passion profonde pour la réflexion et l'écriture,
        que j'explore pleinement durant mes moments de libre.
      </p>

      <p>
        Je m'intéresse particulièrement à la psychologie et à la compréhension des comportements humains. 
        Mon objectif est de découvrir pourquoi les gens agissent comme ils le font et dans quels contextes.
        <br />
        J'aime également la synergologie, cet art d'analyser les personnes à travers leurs gestes.
      </p>

      <p>
        Je suis aussi développeur, diplômé en programmation informatique. Comme tout développeur,
        j'avance grâce à l'autoapprentissage.
        <br />
        Avec mes connaissances et mon expérience, j'ai à cœur de partager ce savoir avec ceux qui souhaitent apprendre.
      </p>

      <p>
        Le développement personnel me passionne. Fort de mon expérience dans ce domaine,
        je crois que, comme le dit le proverbe, "c'est en forgeant qu'on devient forgeron".
      </p>

      <p>
        Dans le domaine de l'islam, beaucoup ignorent encore les bases de cette religion,
        qu'ils soient musulmans ou non-musulmans. Certains prient sans connaître ce qui est obligatoire
        ou facultatif, ou comment rectifier une erreur dans leurs pratiques.
        <br />
        J'ai donc créé un blog pour offrir un apprentissage accessible à tous.
      </p>

      <p>
        Je suis très critique vis-à-vis des actualités mondiales. Ainsi, toute information importante 
        et digne d’analyse critique trouvera sa place dans mes publications.
      </p>

      <p>
        Enfin, j'aime offrir des conseils dans divers domaines pour éviter aux autres les erreurs que
        j'ai pu commettre et pour leur ouvrir les portes vers des opportunités que j'ai pu saisir.
      </p>
    </div>

      <h2 className="border border-success border-3 rounded p-2 text-center mt-3">Nos Blogs Thématiques</h2>
      <div className="row">
        {/* Blog Écrits */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Blog Écrits</h5>
              <p className="card-text">Des poèmes, des réflexions philosophiques, et des pensées personnelles. Un espace pour partager mes écrits et méditations.</p>
              <a href="/blog/ecrits" className="btn btn-primary">Découvrir</a>
            </div>
          </div>
        </div>

        {/* Blog Psychologie */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Blog Psychologie</h5>
              <p className="card-text">Analyses et conseils pour mieux comprendre les aspects psychologiques de la vie, développer la résilience, et améliorer le bien-être.</p>
              <a href="/blog/psychologie" className="btn btn-primary">Découvrir</a>
            </div>
          </div>
        </div>

        {/* Blog Développement Personnel */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Blog Développement Personnel</h5>
              <p className="card-text">Des conseils pour grandir, surmonter les défis, et atteindre un meilleur épanouissement personnel.</p>
              <a href="/blog/developpement-personnel" className="btn btn-primary">Découvrir</a>
            </div>
          </div>
        </div>

        {/* Blog Religion */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Connaître l'Islam</h5>
              <p className="card-text">Un guide pour aider les musulmans à comprendre les obligations, les interdictions, et le sens des actes religieux. Explorez les bases de l'Islam et les raisons qui se cachent derrière chaque action.</p>
              <a href="/blog/religion" className="btn btn-primary">Découvrir</a>
            </div>
          </div>
        </div>

        {/* Blog Codage */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Blog Codage</h5>
              <p className="card-text">Articles sur la programmation et le développement, pour tous les niveaux. Des ressources pour apprendre à coder.</p>
              <a href="/blog/codage" className="btn btn-primary">Découvrir</a>
            </div>
          </div>
        </div>

        {/* Blog Les Nouvelles Informations */}
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Blog Les Nouvelles Informations</h5>
              <p className="card-text">Un regard critique sur l'actualité mondiale. Analyses et commentaires sur les événements qui marquent notre époque.</p>
              <a href="/blog/nouvelles" className="btn btn-primary">Découvrir</a>
            </div>
          </div>
        </div>
      </div>

      <h2 className="border border-success border-3 rounded p-2 text-center mt-2">Dernières Publications</h2>
      <div className="row">
        {publications.map((publication) => (
          <div className="col-md-4 mb-4" key={publication.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{publication.title}</h5>
                <p className="card-text">{publication.excerpt}</p>
                <a href={publication.link} className="btn btn-primary">Lire la suite</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
