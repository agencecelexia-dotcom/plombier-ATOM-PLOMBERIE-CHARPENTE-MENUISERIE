export interface AdminProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  location: string;
  year: number;
  featuredImage: string;
  beforeImage: string;
  afterImage: string;
  featured: boolean;
}

export const projects: AdminProject[] = [
  {
    id: "sdb-tampon",
    slug: "renovation-sdb-tampon",
    title: "Rénovation salle de bain complète",
    category: "Salle de bain",
    shortDescription: "Transformation d'une salle de bain vétuste en espace moderne avec douche italienne.",
    fullDescription: "Transformation d'une salle de bain vétuste en espace moderne avec douche italienne, meuble vasque et miroir LED.",
    location: "Le Tampon",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "cuisine-saint-pierre",
    slug: "refection-plomberie-cuisine-saint-pierre",
    title: "Réfection plomberie cuisine",
    category: "Plomberie",
    shortDescription: "Remplacement complet de la tuyauterie et installation d'un évier encastré.",
    fullDescription: "Remplacement complet de la tuyauterie et installation d'un évier encastré avec robinet col de cygne.",
    location: "Saint-Pierre",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
  {
    id: "chauffe-eau-entre-deux",
    slug: "installation-chauffe-eau-solaire-entre-deux",
    title: "Installation chauffe-eau solaire",
    category: "Chauffe-eau",
    shortDescription: "Installation d'un chauffe-eau solaire en remplacement d'un vieux cumulus.",
    fullDescription: "Installation d'un chauffe-eau solaire en remplacement d'un vieux cumulus électrique. Économies d'énergie garanties.",
    location: "L'Entre-Deux",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "charpente-petite-ile",
    slug: "construction-charpente-petite-ile",
    title: "Construction charpente traditionnelle",
    category: "Charpente",
    shortDescription: "Réalisation d'une charpente traditionnelle en bois traité pour une maison neuve.",
    fullDescription: "Réalisation d'une charpente traditionnelle en bois traité pour une maison individuelle neuve.",
    location: "Petite-Île",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "menuiserie-escalier-tampon",
    slug: "escalier-bois-sur-mesure-tampon",
    title: "Escalier bois sur mesure",
    category: "Menuiserie",
    shortDescription: "Conception et réalisation d'un escalier tournant en bois massif.",
    fullDescription: "Conception et réalisation d'un escalier tournant en bois massif avec garde-corps ouvragé.",
    location: "Le Tampon",
    year: 2025,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: true,
  },
  {
    id: "terrasse-bois-tampon",
    slug: "terrasse-bois-varangue-tampon",
    title: "Terrasse bois et varangue",
    category: "Menuiserie",
    shortDescription: "Construction d'une terrasse bois et varangue adaptée au climat tropical.",
    fullDescription: "Construction d'une terrasse bois et varangue avec bois traité classe 4, adaptée au climat tropical.",
    location: "Le Tampon",
    year: 2024,
    featuredImage: "",
    beforeImage: "",
    afterImage: "",
    featured: false,
  },
];
