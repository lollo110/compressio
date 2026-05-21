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
  },
  {
    title: "Comment calculer la TVA facilement",
    slug: "comment-calculer-tva-facilement",
    description:
      "Méthode simple pour calculer la TVA, passer d'un prix HT à un prix TTC et retrouver un montant HT depuis un prix TTC.",
    publishedAt: "2026-05-21",
    readingTime: "4 min",
    category: "Finance",
    intro:
      "Le calcul de la TVA revient souvent dans les devis, factures, achats professionnels et comparaisons de prix. Avec quelques formules simples, vous pouvez passer rapidement du HT au TTC ou du TTC au HT.",
    sections: [
      {
        title: "Calculer le TTC depuis un prix HT",
        paragraphs: [
          "Pour calculer un prix TTC, ajoutez la TVA au montant HT. Avec un taux de TVA de 20 %, un produit à 100 € HT donne 20 € de TVA et 120 € TTC.",
          "La formule est simple : prix TTC = prix HT x (1 + taux de TVA). Pour 20 %, cela revient à multiplier par 1,20."
        ],
        bullets: [
          "100 € HT avec 20 % de TVA = 120 € TTC.",
          "100 € HT avec 10 % de TVA = 110 € TTC.",
          "100 € HT avec 5,5 % de TVA = 105,50 € TTC."
        ]
      },
      {
        title: "Retrouver le HT depuis un prix TTC",
        paragraphs: [
          "Le calcul inverse consiste à diviser le prix TTC par 1 plus le taux de TVA. Pour un taux de 20 %, divisez par 1,20.",
          "Cette méthode est utile quand vous avez un ticket, un prix affiché ou un achat TTC et que vous voulez connaître la base HT."
        ]
      },
      {
        title: "Utiliser le bon taux",
        paragraphs: [
          "Le taux de TVA dépend du type de produit ou de service. En France, les taux courants sont 20 %, 10 %, 5,5 % et 2,1 %.",
          "Pour une facture officielle, vérifiez toujours le taux applicable à votre activité ou demandez confirmation à un comptable."
        ]
      }
    ],
    faq: [
      {
        question: "Quelle est la formule pour calculer la TVA ?",
        answer:
          "TVA = prix HT x taux de TVA. Le prix TTC correspond au prix HT plus le montant de TVA."
      },
      {
        question: "Comment calculer le HT depuis le TTC ?",
        answer:
          "Divisez le prix TTC par 1 plus le taux de TVA. Pour un taux de 20 %, divisez le TTC par 1,20."
      }
    ]
  },
  {
    title: "Comment créer un QR code gratuit",
    slug: "comment-creer-qr-code-gratuit",
    description:
      "Guide pratique pour créer un QR code gratuit, choisir le bon contenu, éviter les erreurs de lisibilité et télécharger une image propre.",
    publishedAt: "2026-05-21",
    readingTime: "4 min",
    category: "Marketing",
    intro:
      "Un QR code permet de partager rapidement une URL, un texte, un contact ou une information depuis une affiche, une carte, un menu ou une page imprimée.",
    sections: [
      {
        title: "Choisir le contenu du QR code",
        paragraphs: [
          "Le plus souvent, un QR code contient une URL. Il peut aussi contenir un texte court, une adresse email, un numéro de téléphone ou une information de contact.",
          "Pour un usage professionnel, privilégiez une URL courte et stable. Si l'adresse change souvent, utilisez une page intermédiaire que vous pourrez modifier plus tard."
        ],
        bullets: [
          "URL de site ou landing page.",
          "Menu de restaurant ou catalogue.",
          "Carte de visite, affiche, flyer ou notice."
        ]
      },
      {
        title: "Garder un bon contraste",
        paragraphs: [
          "Un QR code doit rester facile à scanner. Le contraste entre le code et le fond est essentiel, surtout si vous l'imprimez.",
          "Évitez les couleurs trop proches, les fonds chargés ou les tailles trop petites. Testez toujours le QR code avec plusieurs téléphones avant de le diffuser."
        ]
      },
      {
        title: "Télécharger et tester",
        paragraphs: [
          "Après génération, téléchargez le QR code en PNG et ouvrez-le dans son contexte final. Sur une affiche, il doit être assez grand pour être scanné à distance.",
          "Si le QR code mène vers un site, vérifiez aussi que la page chargée est rapide et adaptée au mobile."
        ]
      }
    ],
    faq: [
      {
        question: "Un QR code gratuit expire-t-il ?",
        answer:
          "Un QR code statique n'expire pas. Il continue à fonctionner tant que le contenu qu'il contient, par exemple une URL, reste valide."
      },
      {
        question: "Quelle taille choisir pour un QR code ?",
        answer:
          "Pour un usage web, 256 à 512 px suffit souvent. Pour l'impression, utilisez une image plus grande et testez la lisibilité."
      }
    ]
  },
  {
    title: "Comment choisir un mot de passe fort",
    slug: "comment-choisir-mot-de-passe-fort",
    description:
      "Conseils simples pour choisir un mot de passe fort, éviter les erreurs courantes et protéger ses comptes en ligne.",
    publishedAt: "2026-05-21",
    readingTime: "4 min",
    category: "Sécurité",
    intro:
      "Un bon mot de passe doit être long, unique et difficile à deviner. La longueur compte souvent plus que la complexité apparente.",
    sections: [
      {
        title: "Privilégier la longueur",
        paragraphs: [
          "Un mot de passe de 16 caractères ou plus est généralement plus solide qu'un mot court rempli de symboles. Plus il est long, plus il est difficile à tester automatiquement.",
          "Pour les comptes importants, utilisez un mot de passe généré aléatoirement et stocké dans un gestionnaire fiable."
        ],
        bullets: [
          "Utilisez au moins 16 caractères pour les comptes importants.",
          "Mélangez majuscules, minuscules, chiffres et symboles.",
          "Évitez les dates, prénoms, mots du dictionnaire et suites simples."
        ]
      },
      {
        title: "Utiliser un mot de passe unique",
        paragraphs: [
          "Le même mot de passe ne doit jamais être réutilisé sur plusieurs sites. Si un service est compromis, les autres comptes deviennent vulnérables.",
          "Un gestionnaire de mots de passe permet de créer et retenir des mots de passe uniques sans effort."
        ]
      },
      {
        title: "Ajouter la double authentification",
        paragraphs: [
          "La double authentification ajoute une couche de protection, même si le mot de passe est découvert.",
          "Activez-la en priorité sur vos emails, comptes bancaires, réseaux sociaux, outils professionnels et services cloud."
        ]
      }
    ],
    faq: [
      {
        question: "Un mot de passe généré est-il plus sûr ?",
        answer:
          "Oui, s'il est assez long et aléatoire. Il évite les habitudes humaines faciles à deviner."
      },
      {
        question: "Faut-il changer ses mots de passe souvent ?",
        answer:
          "Il vaut surtout mieux utiliser des mots de passe uniques et les changer en cas de fuite ou de doute."
      }
    ]
  }
];

export const getArticleBySlug = (slug: string) => articles.find((article) => article.slug === slug);
