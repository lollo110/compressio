export type RelatedLink = {
  title: string;
  description: string;
  href: string;
};

export const popularToolSlugs = [
  "compresseur-image",
  "convertisseur-webp",
  "calculateur-tva",
  "generateur-qr-code"
];

export const articleRelatedLinks: Record<string, RelatedLink[]> = {
  "comment-compresser-image-sans-perdre-qualite": [
    {
      title: "Compresser une image",
      description: "Réduisez le poids d'une image JPG, PNG ou WebP directement dans le navigateur.",
      href: "/outils/compresseur-image"
    },
    {
      title: "Convertir une image en WebP",
      description: "Créez une version WebP plus légère pour vos pages web.",
      href: "/outils/convertisseur-webp"
    }
  ],
  "webp-ou-jpg-quel-format-choisir": [
    {
      title: "Convertisseur WebP",
      description: "Transformez vos images en WebP pour améliorer leur poids.",
      href: "/outils/convertisseur-webp"
    },
    {
      title: "Compresseur d'images",
      description: "Réglez qualité, format et largeur maximale en quelques clics.",
      href: "/outils/compresseur-image"
    }
  ],
  "reduire-poids-photo-email": [
    {
      title: "Compresser une photo",
      description: "Allégez vos photos avant de les envoyer par email ou formulaire.",
      href: "/outils/compresseur-image"
    }
  ],
  "comment-calculer-tva-facilement": [
    {
      title: "Calculateur TVA",
      description: "Calculez un prix HT, TTC et le montant de TVA.",
      href: "/outils/calculateur-tva"
    }
  ],
  "comment-creer-qr-code-gratuit": [
    {
      title: "Générateur de QR code",
      description: "Créez un QR code gratuit et téléchargez-le en PNG.",
      href: "/outils/generateur-qr-code"
    }
  ],
  "comment-choisir-mot-de-passe-fort": [
    {
      title: "Générateur de mot de passe",
      description: "Créez un mot de passe fort avec caractères personnalisés.",
      href: "/outils/generateur-mot-de-passe"
    }
  ]
};

export const toolGuideLinks: Record<string, RelatedLink[]> = {
  "compresseur-image": [
    {
      title: "Comment compresser une image sans perdre en qualité",
      description: "Comprenez les bons réglages de qualité, format et dimensions.",
      href: "/blog/comment-compresser-image-sans-perdre-qualite"
    },
    {
      title: "Réduire le poids d'une photo pour l'envoyer par email",
      description: "Conseils pratiques pour alléger une photo avant envoi.",
      href: "/blog/reduire-poids-photo-email"
    }
  ],
  "convertisseur-webp": [
    {
      title: "WebP ou JPG : quel format choisir ?",
      description: "Comparez les formats pour choisir le plus adapté.",
      href: "/blog/webp-ou-jpg-quel-format-choisir"
    }
  ],
  "calculateur-tva": [
    {
      title: "Comment calculer la TVA facilement",
      description: "Les formules simples pour passer du HT au TTC.",
      href: "/blog/comment-calculer-tva-facilement"
    }
  ],
  "generateur-qr-code": [
    {
      title: "Comment créer un QR code gratuit",
      description: "Les bonnes pratiques pour créer un QR code lisible.",
      href: "/blog/comment-creer-qr-code-gratuit"
    }
  ],
  "generateur-mot-de-passe": [
    {
      title: "Comment choisir un mot de passe fort",
      description: "Longueur, unicité et double authentification.",
      href: "/blog/comment-choisir-mot-de-passe-fort"
    }
  ]
};
