export interface AdminTestimonial {
  id: string;
  clientName: string;
  clientRole?: string;
  quote: string;
  rating: number;
  projectType: string;
  date: string;
}

export const testimonials: AdminTestimonial[] = [
  {
    id: "1",
    clientName: "Marie-Line P.",
    clientRole: "Propriétaire au Tampon",
    quote: "Intervention très rapide pour une fuite dans ma cuisine. Travail propre et soigné, je recommande vivement Atom Plomberie !",
    rating: 5,
    projectType: "Dépannage urgent",
    date: "2025-10",
  },
  {
    id: "2",
    clientName: "Thierry R.",
    clientRole: "Propriétaire à Saint-Pierre",
    quote: "Excellente prestation pour la rénovation complète de ma salle de bain. Jean Eddy est à l'écoute et de bon conseil.",
    rating: 5,
    projectType: "Salle de bain",
    date: "2025-09",
  },
  {
    id: "3",
    clientName: "Nathalie B.",
    clientRole: "Propriétaire à Petite-Île",
    quote: "Très satisfaite de la pose de ma charpente. Équipe sérieuse et respectueuse des délais. Merci !",
    rating: 5,
    projectType: "Charpente",
    date: "2025-08",
  },
  {
    id: "4",
    clientName: "David M.",
    clientRole: "Propriétaire à L'Entre-Deux",
    quote: "Bon travail pour le remplacement de mon chauffe-eau solaire. Un peu d'attente pour le rendez-vous mais résultat impeccable.",
    rating: 4,
    projectType: "Chauffe-eau",
    date: "2025-07",
  },
  {
    id: "5",
    clientName: "Sophie L.",
    clientRole: "Propriétaire au Tampon",
    quote: "Menuiserie sur mesure pour mes placards et ma terrasse bois. Résultat magnifique, finitions parfaites.",
    rating: 5,
    projectType: "Menuiserie",
    date: "2025-11",
  },
];
