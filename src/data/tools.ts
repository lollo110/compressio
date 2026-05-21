export type Tool = {
  title: string;
  slug: string;
  description: string;
  category: string;
  keywords: string[];
  status: "available" | "planned";
};

export const tools: Tool[] = [
  {
    title: "Compresseur d'images",
    slug: "compresseur-image",
    description:
      "Réduisez le poids de vos images JPG, PNG et WebP sans envoyer vos fichiers sur un serveur.",
    category: "Image",
    keywords: ["compresser image", "réduire taille photo", "convertir webp"],
    status: "available"
  },
  {
    title: "Convertisseur WebP",
    slug: "convertisseur-webp",
    description:
      "Convertissez rapidement des images en WebP pour accélérer vos pages web.",
    category: "Image",
    keywords: ["convertir webp", "image webp", "optimisation image"],
    status: "available"
  },
  {
    title: "Compteur de mots",
    slug: "compteur-de-mots",
    description:
      "Comptez les mots, caractères, phrases et estimez le temps de lecture d'un texte.",
    category: "Texte",
    keywords: ["compteur de mots", "compter caractères", "temps de lecture"],
    status: "available"
  },
  {
    title: "Générateur de mot de passe",
    slug: "generateur-mot-de-passe",
    description:
      "Créez un mot de passe fort et aléatoire avec longueur, chiffres et symboles personnalisés.",
    category: "Sécurité",
    keywords: ["générateur mot de passe", "mot de passe fort", "password generator"],
    status: "available"
  },
  {
    title: "Réducteur PDF",
    slug: "reduire-pdf",
    description:
      "Préparez des documents PDF plus légers pour l'envoi par email ou les démarches en ligne.",
    category: "PDF",
    keywords: ["compresser pdf", "réduire pdf", "pdf léger"],
    status: "planned"
  }
];

export const availableTools = tools.filter((tool) => tool.status === "available");
