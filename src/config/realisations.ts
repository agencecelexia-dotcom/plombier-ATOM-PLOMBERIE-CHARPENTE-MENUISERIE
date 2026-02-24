import type { Realisation } from "@/types";

export const realisations: Realisation[] = [
  {
    id: "sdb-tampon",
    title: "Rénovation salle de bain complète",
    category: "Salle de bain",
    city: "Le Tampon",
    description:
      "Transformation d'une salle de bain vétuste en espace moderne avec douche italienne, meuble vasque et miroir LED.",
    beforePrompt:
      "Vieille salle de bain tropicale, baignoire jaunâtre, carrelage fissuré, robinetterie rouillée, photo réaliste brute, ratio 4:3",
    afterPrompt:
      "Même salle de bain rénovée, douche italienne carrelage gris anthracite, meuble vasque bois clair, miroir LED, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "cuisine-saint-pierre",
    title: "Réfection plomberie cuisine",
    category: "Plomberie",
    city: "Saint-Pierre",
    description:
      "Remplacement complet de la tuyauterie et installation d'un évier encastré avec robinet col de cygne.",
    beforePrompt:
      "Vieille cuisine évier inox usé, tuyauterie apparente oxydée, robinet qui goutte, photo réaliste, ratio 4:3",
    afterPrompt:
      "Cuisine moderne évier encastré granit noir, robinet col de cygne chromé, tuyauterie neuve cachée, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "chauffe-eau-entre-deux",
    title: "Installation chauffe-eau solaire",
    category: "Chauffe-eau",
    city: "L'Entre-Deux",
    description:
      "Installation d'un chauffe-eau solaire en remplacement d'un vieux cumulus électrique. Économies d'énergie garanties.",
    beforePrompt:
      "Vieux chauffe-eau électrique rouillé encrassé dans local technique tropical, tuyaux oxydés, photo réaliste, ratio 4:3",
    afterPrompt:
      "Chauffe-eau solaire neuf avec panneaux sur toit créole, ballon de stockage propre, tuyauterie cuivre neuve, ciel bleu tropical, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "charpente-petite-ile",
    title: "Construction charpente traditionnelle",
    category: "Charpente",
    city: "Petite-Île",
    description:
      "Réalisation d'une charpente traditionnelle en bois traité pour une maison individuelle neuve.",
    beforePrompt:
      "Maison en construction murs en parpaings sans toit, ferraillage apparent, chantier réunionnais, ciel tropical, photo réaliste, ratio 4:3",
    afterPrompt:
      "Belle charpente traditionnelle bois neuve montée sur maison, fermes et pannes assemblées, bois traité couleur miel, toit en cours de couverture, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "sdb-pmr-saint-louis",
    title: "Salle de bain PMR",
    category: "Salle de bain",
    city: "Saint-Louis",
    description:
      "Adaptation d'une salle de bain pour personne à mobilité réduite avec douche plain-pied et barres d'appui.",
    beforePrompt:
      "Salle de bain étroite avec baignoire haute, accès difficile, carrelage glissant, photo réaliste, ratio 4:3",
    afterPrompt:
      "Salle de bain PMR adaptée, barre d'appui chromée, siège douche rabattable, receveur plain-pied antidérapant, espace circulation large, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "menuiserie-escalier-tampon",
    title: "Escalier bois sur mesure",
    category: "Menuiserie",
    city: "Le Tampon",
    description:
      "Conception et réalisation d'un escalier tournant en bois massif avec garde-corps ouvragé.",
    beforePrompt:
      "Ouverture de trémie dans dalle béton, intérieur maison réunionnaise en chantier, escalier provisoire échelle, photo réaliste, ratio 4:3",
    afterPrompt:
      "Magnifique escalier tournant bois massif vernis, garde-corps ouvragé, marches larges, intérieur maison réunionnaise lumineuse, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "douche-saint-joseph",
    title: "Douche italienne sur mesure",
    category: "Salle de bain",
    city: "Saint-Joseph",
    description:
      "Création d'une douche italienne avec receveur extra-plat, carrelage grand format et niche murale éclairée.",
    beforePrompt:
      "Salle de bain avec baignoire classique blanche, murs peints écaillés, sol vinyle usé, photo réaliste, ratio 4:3",
    afterPrompt:
      "Douche italienne ouverte, receveur extra-plat, carrelage grand format gris clair, pommeau pluie chromé, niche murale éclairée, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "charpente-renovation-cilaos",
    title: "Rénovation charpente case créole",
    category: "Charpente",
    city: "Cilaos",
    description:
      "Rénovation complète de la charpente d'une case créole traditionnelle avec traitement anti-termites.",
    beforePrompt:
      "Charpente bois ancienne case créole abîmée, poutres rongées par termites, tuiles cassées, intérieur visible, photo réaliste, ratio 4:3",
    afterPrompt:
      "Charpente case créole entièrement rénovée, bois traité neuf, assemblages traditionnels, couverture tôle neuve, case créole colorée, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "depannage-saint-pierre",
    title: "Réparation fuite urgente",
    category: "Plomberie",
    city: "Saint-Pierre",
    description:
      "Intervention d'urgence pour une fuite sur canalisation d'eau dans un appartement.",
    beforePrompt:
      "Fuite d'eau importante sur tuyau cuivre sous évier, gouttes d'eau, sol mouillé, urgence, photo réaliste, ratio 4:3",
    afterPrompt:
      "Tuyauterie cuivre neuve sous évier, raccords neufs chromés, sol sec, réparation propre, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
  {
    id: "terrasse-bois-tampon",
    title: "Terrasse bois et varangue",
    category: "Menuiserie",
    city: "Le Tampon",
    description:
      "Construction d'une terrasse bois et varangue avec bois traité classe 4, adaptée au climat tropical.",
    beforePrompt:
      "Jardin tropical pelouse et terre battue, arrière de maison réunionnaise sans terrasse, vue sur montagne, photo réaliste, ratio 4:3",
    afterPrompt:
      "Belle terrasse bois exotique neuve avec varangue couverte, garde-corps bois, mobilier de jardin, végétation tropicale, vue montagne, photo réaliste, ratio 4:3",
    aspectRatio: "4/3",
  },
];
