export type Article = {
  title: string;
  slug: string;
  description: string;
  publishedAt: string;
  readingTime: string;
  category: string;
  intro: string;
  sections: {
    title: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
};

export const articles: Article[] = [
  {
    title: "Comment compresser une image sans perdre en qualité",
    slug: "comment-compresser-image-sans-perdre-qualite",
    description:
      "Méthode simple pour réduire le poids d'une image JPG, PNG ou WebP tout en gardant un rendu propre pour le web, l'email et les réseaux sociaux.",
    publishedAt: "2026-05-20",
    readingTime: "4 min",
    category: "Optimisation image",
    intro:
      "Compresser une image ne veut pas dire la rendre floue. En choisissant le bon format, la bonne qualité et une largeur adaptée, il est possible d'obtenir un fichier beaucoup plus léger avec une différence visuelle presque invisible.",
    sections: [
      {
        title: "Choisir le bon format",
        paragraphs: [
          "Pour une photo, WebP ou JPG sont généralement les meilleurs choix. WebP donne souvent un meilleur rapport qualité poids pour le web. PNG reste utile pour les visuels avec transparence, mais il peut produire des fichiers plus lourds.",
          "Si votre image doit être affichée sur un site, commencez par WebP. Si vous devez l'envoyer à une personne ou à un service qui n'accepte pas WebP, choisissez JPG."
        ],
        bullets: [
          "WebP : recommandé pour les pages web modernes.",
          "JPG : bon choix universel pour les photos.",
          "PNG : utile pour logos, captures et transparence."
        ]
      },
      {
        title: "Régler la qualité sans exagérer",
        paragraphs: [
          "Une qualité entre 70 % et 85 % suffit souvent pour un affichage web. Au-dessus de 90 %, le poids augmente vite alors que le gain visuel devient faible.",
          "Pour les images de produits ou les photos importantes, commencez à 82 %. Pour une illustration secondaire, 70 % à 78 % peut être largement suffisant."
        ]
      },
      {
        title: "Réduire les dimensions",
        paragraphs: [
          "Une image de smartphone peut dépasser 3000 px de large, alors qu'un article ou une fiche produit n'a souvent pas besoin de plus de 1200 à 1600 px.",
          "Réduire la largeur maximale est souvent le levier le plus efficace pour diminuer le poids d'une image sans dégrader son apparence sur écran."
        ]
      }
    ],
    faq: [
      {
        question: "Quelle qualité choisir pour une image web ?",
        answer:
          "Une qualité entre 70 % et 85 % donne généralement un bon équilibre entre netteté et poids de fichier."
      },
      {
        question: "Est-ce que WebP fonctionne partout ?",
        answer:
          "WebP est supporté par les navigateurs modernes. Pour des systèmes anciens ou certains formulaires, JPG reste parfois plus compatible."
      }
    ]
  },
  {
    title: "WebP ou JPG : quel format choisir pour vos images ?",
    slug: "webp-ou-jpg-quel-format-choisir",
    description:
      "Comparaison claire entre WebP et JPG pour choisir le bon format d'image selon votre site, vos emails et vos usages quotidiens.",
    publishedAt: "2026-05-20",
    readingTime: "3 min",
    category: "Formats image",
    intro:
      "WebP et JPG servent tous les deux à afficher des photos légères, mais ils ne répondent pas exactement aux mêmes besoins. Le bon choix dépend surtout de l'endroit où l'image sera utilisée.",
    sections: [
      {
        title: "WebP pour les sites web",
        paragraphs: [
          "WebP est souvent le meilleur choix pour accélérer une page. Il permet d'obtenir des fichiers plus légers que JPG avec une qualité visuelle très correcte.",
          "Pour un blog, une landing page, une boutique ou une galerie, convertir les images en WebP peut réduire le temps de chargement et améliorer l'expérience mobile."
        ]
      },
      {
        title: "JPG pour la compatibilité",
        paragraphs: [
          "JPG reste très utile quand l'image doit être envoyée à un service, un client ou une administration. C'est un format reconnu partout.",
          "Si vous ne savez pas où l'image sera ouverte, JPG est le choix le plus sûr. Pour un usage strictement web, WebP est souvent plus intéressant."
        ]
      },
      {
        title: "Le choix pratique",
        paragraphs: [
          "Utilisez WebP pour publier sur un site et JPG pour partager un fichier très compatible. Dans les deux cas, compresser l'image avant publication évite de charger ou d'envoyer un fichier inutilement lourd."
        ],
        bullets: [
          "Site web : WebP en priorité.",
          "Email ou formulaire : JPG si le format WebP n'est pas accepté.",
          "Image avec transparence : PNG ou WebP selon le contexte."
        ]
      }
    ],
    faq: [
      {
        question: "WebP est-il meilleur que JPG ?",
        answer:
          "Pour le web, WebP est souvent plus léger à qualité proche. JPG reste meilleur pour la compatibilité maximale."
      }
    ]
  },
  {
    title: "Réduire le poids d'une photo pour l'envoyer par email",
    slug: "reduire-poids-photo-email",
    description:
      "Astuces simples pour alléger une photo avant de l'envoyer par email ou via un formulaire, sans installer de logiciel.",
    publishedAt: "2026-05-20",
    readingTime: "3 min",
    category: "Email",
    intro:
      "Une photo trop lourde peut bloquer un email, ralentir l'envoi ou dépasser la limite d'un formulaire. Avant de l'envoyer, il suffit souvent de réduire sa largeur et de choisir une qualité raisonnable.",
    sections: [
      {
        title: "Pourquoi une photo est trop lourde",
        paragraphs: [
          "Les smartphones produisent des photos de grande taille, parfois prévues pour l'impression ou le recadrage. Pour un email, cette définition est rarement nécessaire.",
          "Une photo de plusieurs mégaoctets peut être réduite fortement tout en restant lisible et nette sur écran."
        ]
      },
      {
        title: "Réglages recommandés pour email",
        paragraphs: [
          "Pour envoyer une photo par email, une largeur maximale de 1200 px et une qualité autour de 75 % à 82 % conviennent dans la plupart des cas.",
          "Si le destinataire doit imprimer la photo, gardez une qualité plus élevée. Si l'objectif est simplement de la consulter, réduisez davantage."
        ],
        bullets: [
          "Largeur maximale : 1200 px pour un usage courant.",
          "Format : JPG pour la compatibilité.",
          "Qualité : 75 % à 82 %."
        ]
      },
      {
        title: "Vérifier avant d'envoyer",
        paragraphs: [
          "Après compression, ouvrez rapidement le fichier téléchargé. Vérifiez que le texte éventuel reste lisible et que les détails importants sont visibles."
        ]
      }
    ],
    faq: [
      {
        question: "Quel poids viser pour une photo envoyée par email ?",
        answer:
          "Un fichier entre 200 Ko et 1 Mo est souvent suffisant pour une consultation sur écran, selon le contenu de la photo."
      }
    ]
  }
];

export const getArticleBySlug = (slug: string) => articles.find((article) => article.slug === slug);
