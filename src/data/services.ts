export interface AdminService {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  icon: string;
  order: number;
}

export const services: AdminService[] = [
  {
    id: "depannage-urgent",
    slug: "depannage-plomberie",
    title: "Dépannage urgent",
    shortDescription: "Intervention rapide pour toutes vos urgences plomberie à La Réunion.",
    fullDescription: "Fuite d'eau, canalisation bouchée, dégât des eaux... Notre équipe intervient en urgence 7j/7 dans le sud de La Réunion. Diagnostic sur place et réparation immédiate dans la majorité des cas.",
    features: ["Intervention rapide", "Disponible 7j/7", "Diagnostic sur place", "Réparation immédiate", "Devis gratuit"],
    icon: "Siren",
    order: 1,
  },
  {
    id: "plomberie-generale",
    slug: "plomberie",
    title: "Plomberie générale",
    shortDescription: "Installation, remplacement et mise aux normes de vos équipements.",
    fullDescription: "Robinetterie, tuyauterie, raccordements, WC, éviers, recherche de fuite... Nous intervenons pour tous vos travaux de plomberie, de l'installation neuve à la mise aux normes de vos installations existantes.",
    features: ["Robinetterie et tuyauterie", "Raccordements", "Recherche de fuite", "Mise aux normes", "Installation neuve"],
    icon: "Wrench",
    order: 2,
  },
  {
    id: "salle-de-bain",
    slug: "renovation-salle-de-bain",
    title: "Salle de bain",
    shortDescription: "Rénovation complète, douche italienne, adaptation PMR.",
    fullDescription: "De la conception à la réalisation, nous prenons en charge votre projet de rénovation de salle de bain. Douche italienne, remplacement baignoire, accessibilité PMR, meuble vasque... Un interlocuteur unique du début à la fin.",
    features: ["Douche italienne", "Remplacement baignoire", "Adaptation PMR", "Meuble vasque", "Carrelage"],
    icon: "Bath",
    order: 3,
  },
  {
    id: "charpente",
    slug: "charpente",
    title: "Charpente",
    shortDescription: "Construction, rénovation et traitement de charpente bois.",
    fullDescription: "Réalisation de charpentes traditionnelles et industrielles, rénovation de toiture, traitement anti-termites et fongicide, pose de couverture. Intervention sur maisons individuelles et bâtiments à La Réunion.",
    features: ["Charpente traditionnelle", "Rénovation toiture", "Traitement anti-termites", "Pose de couverture", "Normes cycloniques"],
    icon: "Hammer",
    order: 4,
  },
  {
    id: "menuiserie",
    slug: "menuiserie",
    title: "Menuiserie",
    shortDescription: "Portes, fenêtres, escaliers et aménagements bois sur mesure.",
    fullDescription: "Fabrication et pose de menuiseries intérieures et extérieures : portes, fenêtres, volets, escaliers, placards, terrasses bois. Travail artisanal et matériaux adaptés au climat tropical.",
    features: ["Portes et fenêtres", "Escaliers sur mesure", "Terrasses et varangues", "Placards et dressings", "Bois traité tropical"],
    icon: "DoorOpen",
    order: 5,
  },
  {
    id: "chauffe-eau",
    slug: "chauffe-eau",
    title: "Chauffe-eau",
    shortDescription: "Installation, remplacement et entretien de chauffe-eau.",
    fullDescription: "Remplacement de chauffe-eau électrique, installation de chauffe-eau solaire ou thermodynamique pour réduire votre facture énergétique. Détartrage et entretien pour prolonger la durée de vie de votre équipement.",
    features: ["Chauffe-eau électrique", "Chauffe-eau solaire", "Ballon thermodynamique", "Détartrage", "Installation"],
    icon: "Droplets",
    order: 6,
  },
];
