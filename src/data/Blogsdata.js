// data.js

export const categories = [
  { id: 1, name: "Écrits", publications: [1, 7, 8, 9, 10] },
  { id: 2, name: "Psychologie", publications: [2, 11] },
  { id: 3, name: "Développement personnel", publications: [3, 12] },
  { id: 4, name: "L'islam", publications: [4, 13] },
  { id: 5, name: "Codage", publications: [5, 14] },
  { id: 6, name: "Nouvelles", publications: [6, 15] },
  { id: 7, name: "Personnages favoris", publications: [16] },
];

export const publications = [
  {
    id: 1,
    title: "Ô toi, le missionnaire",
    excerpt: "Une réflexion profonde sur les sacrifices et...",
    link: "/writings/missionnaire",
    category: "Écrits",
    contentDetails: [
      {
        title: "le missionnaire",
        section: `
Ô toi, le missionnaire,
Les rides autour de tes yeux racontent beaucoup sur ta situation,
Les nuits blanches qui se succèdent car tu ne peux dormir,
Tu ne peux dormir à cause du fardeau qui repose sur tes épaules.

Ô toi, le missionnaire,
Le visage pâle qui en dit long sur ta santé,
Le manque d'appétit, sachant que tu es responsable de tous ces gens,
Le manque de désir pour soi, car la réussite de ta mission est prioritaire.

Ô toi, le missionnaire,
Les cheveux blancs qui en disent long sur ta mentalité,
Le stress qui parfois dépasse les limites,
Le cœur qui ne cesse de battre vite.

Ô toi, le missionnaire,
Les oreilles n'entendent que les pleurs, les plaintes et les trahisons,
La bouche qui ne cesse de rendre justice et de consoler,
Le nez dont la respiration ne cesse de souffler fort.

Ô toi, le missionnaire,
Ceux pour qui tu te bats ne connaissent pas ta situation,
Ceux pour qui tu te bats ne connaissent pas ton fardeau,
Ceux pour qui tu te bats ne connaissent que leurs désirs.

Ô toi, le missionnaire,
Ta mission n'est pas facile car lorsque tu crées un puits, certains viennent le détruire,
Lorsque tu crées des routes, certains posent des obstacles pour que les gens puissent être blessés,
Lorsque tu crées des hôpitaux, d'autres y introduisent du poison.

Ô toi, le missionnaire,
C’est ton pouvoir qu’ils veulent,
C’est ton statut qu’ils veulent,
Ce sont tes biens qu’ils veulent.

Ô toi, le missionnaire,
Leur but n'est point d'aider, mais d’assouvir leur désir de supériorité,
Leur but n'est point la paix, mais de montrer leur pouvoir à travers leurs cruautés,
Leur but n'est point de servir, mais d’être servi.

Ô toi, le missionnaire,
Sache que comme ceux qui t’ont précédé, là où l'injustice règne, il existera toujours des gens justes qui se manifesteront,
Sache que l’histoire a démontré que quelle que soit la dureté, la vérité, la justice a toujours triomphé,
Sache que la patience a été l’amie des vainqueurs.

Ô toi, le missionnaire,
N'abandonne jamais, car tu insulterais la mémoire des martyrs et de leurs familles qui t'ont fait confiance,
Ne baisse jamais les bras face à l’ennemi, car à ce moment-là, la mort est préférable à te regarder en face,
Ne désespère jamais, car celui qui croit en Dieu ne peut désespérer, sachant que c’est lui le maître des maîtres.

Ô toi, le missionnaire,
Sache que le chemin des héros a été marqué par les traîtres et leurs pièges,
Sache que ces plans et ces trahisons ont forgé ces héros,
Sache que tant qu'il y aura des gens qui te haïront, il existera des gens prêts à donner leur vie pour toi.

Ô missionnaire
        `,
        photos: ["photo1.jpg", "photo2.jpg"],
      },
    ],
  },
  {
    id: 7,
    title: "Musulmans nous sommes",
    excerpt: "Nous n’avons pour toit que là où se trouve Dieu...",
    link: "/writings/musulmans",
    category: "Écrits",
    contentDetails: [
      {
        title: "Notre foi",
        section: "Musulmans nous sommes, attachés à la vérité et la justice...",
        photos: ["photo4.jpg"],
      },
    ],
  },
  {
    id: 8,
    title: "La confiance",
    excerpt: "La confiance en tant que telle, je ne la fais à personne...",
    link: "/writings/confiance",
    category: "Écrits",
    contentDetails: [
      {
        title: "Loyauté",
        section: "La confiance est une valeur rare et précieuse...",
        photos: ["photo5.jpg"],
      },
    ],
  },
  {
    id: 9,
    title: "Fi(e) toi à tes paroles",
    excerpt:
      "Ce n'est pas parce que tout le monde le dit que cela doit être vrai...",
    link: "/writings/fie-toi",
    category: "Écrits",
    contentDetails: [
      {
        title: "Vérité",
        section: "La force de croire en ses propres convictions...",
        photos: ["photo6.jpg"],
      },
    ],
  },
  {
    id: 10,
    title: "Notre voix, notre chemin, notre destination",
    excerpt: "Nous marchons avec ceux qui sont prêts à donner leur vie...",
    link: "/writings/voix-chemin",
    category: "Écrits",
    contentDetails: [
      {
        title: "Détermination",
        section: "Le courage de poursuivre notre propre chemin...",
        photos: ["photo7.jpg"],
      },
    ],
  },
  {
    id: 11,
    title: "Exploration de l'Esprit",
    excerpt: "Analyse des processus mentaux...",
    link: "/psychology/exploration",
    category: "Psychologie",
    contentDetails: [
      {
        title: "Comprendre la psychologie",
        section: "Les bases de la psychologie...",
        photos: ["photo8.jpg"],
      },
    ],
  },
  {
    id: 12,
    title: "Se dépasser chaque jour",
    excerpt: "Conseils pour un meilleur épanouissement personnel...",
    link: "/development/self-growth",
    category: "Développement personnel",
    contentDetails: [
      {
        title: "Surmonter les obstacles",
        section: "Techniques pour vaincre les défis...",
        photos: ["photo9.jpg"],
      },
    ],
  },
  {
    id: 13,
    title: "Les fondements de l'Islam",
    excerpt: "Un guide pour mieux comprendre la religion...",
    link: "/islam/fondements",
    category: "L'islam",
    contentDetails: [
      {
        title: "Les cinq piliers",
        section: "Explication des piliers de l'Islam...",
        photos: ["photo10.jpg"],
      },
    ],
  },
  {
    id: 14,
    title: "Introduction à React",
    excerpt: "Comprendre les bases de React pour débutants...",
    link: "/coding/react-intro",
    category: "Codage",
    contentDetails: [
      {
        title: "Les composants",
        section: "Introduction aux composants React...",
        photos: ["photo11.jpg"],
      },
    ],
  },
  {
    id: 15,
    title: "Analyse des Actualités",
    excerpt: "Une perspective critique sur les événements mondiaux...",
    link: "/news/world-analysis",
    category: "Nouvelles",
    contentDetails: [
      {
        title: "Actualité internationale",
        section: "Focus sur les derniers événements...",
        photos: ["photo12.jpg"],
      },
    ],
  },
];

export const people = [
  {
    id: 1,
    name: "Alioune Sarr",
    role: "Philosophe",
    image:
      "http://ts2.mm.bing.net/th?id=OIP.AJ7-iOhQDIyv0ryBXRVl3wHaFj&pid=15.1",
    details:
      "Alioune Sarr est un philosophe influent, connu pour ses écrits sur la moralité et l'éthique.",
    contentDetails: [
      {
        title: "Biographie",
        section: "Né au Sénégal, il a influencé la pensée moderne...",
        photos: ["bio-photo1.jpg"],
      },
      {
        title: "Philosophie et éthique",
        section: "Sa philosophie explore la justice et la moralité...",
        photos: ["philosophy-photo1.jpg", "philosophy-photo2.jpg"],
      },
    ],
  },
  {
    id: 2,
    name: "Fatou Ndiaye",
    role: "Poète",
    image: "https://via.placeholder.com/100",
    details:
      "Fatou Ndiaye est une poète qui explore des thèmes de la vie quotidienne avec une profondeur unique.",
    contentDetails: [
      {
        title: "Œuvres majeures",
        section: "Des poèmes inspirés de la vie quotidienne...",
        photos: ["poetry-photo1.jpg"],
      },
    ],
  },
  {
    id: 3,
    name: "Cheikh Ba",
    role: "Historien",
    image: "https://via.placeholder.com/100",
    details:
      "Cheikh Ba est un historien dont les travaux mettent en lumière des événements méconnus du passé.",
    contentDetails: [
      {
        title: "Études historiques",
        section: "Analyse des grandes périodes de l'histoire...",
        photos: ["history-photo1.jpg"],
      },
    ],
  },
];

export default {
  categories,
  publications,
  people,
};
