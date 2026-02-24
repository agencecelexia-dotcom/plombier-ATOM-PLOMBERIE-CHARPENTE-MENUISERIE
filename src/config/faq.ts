import type { FAQ } from "@/types";
import { siteConfig } from "@/config/site";
import { clientConfig } from "@/config/client.config";

export const faqGeneral: FAQ[] = [
  {
    question: "Quels sont vos délais d'intervention en urgence ?",
    answer:
      `Pour les urgences plomberie (fuite d'eau, canalisation bouchée), nous intervenons en moins de ${clientConfig.chiffres.delaiIntervention} dans un rayon de ${clientConfig.contact.zoneKm} km autour de ${siteConfig.address.city}. Appelez-nous au ${siteConfig.phone}.`,
  },
  {
    question: "Vos devis sont-ils gratuits ?",
    answer:
      "Oui, tous nos devis sont gratuits et sans engagement. Nous nous déplaçons pour évaluer vos besoins et vous remettons un devis détaillé sous 48h.",
  },
  {
    question: "Êtes-vous assuré ?",
    answer:
      "Oui, nous disposons d'une assurance décennale et d'une responsabilité civile professionnelle. Vous pouvez nous demander une copie de nos attestations.",
  },
  {
    question: "Quels modes de paiement acceptez-vous ?",
    answer:
      "Nous acceptons le paiement par chèque, virement bancaire et espèces. Un acompte peut être demandé pour les travaux importants.",
  },
];

export const faqDepannage: FAQ[] = [
  {
    question: "Intervenez-vous le week-end et les jours fériés ?",
    answer:
      "Oui, nous intervenons 7 jours sur 7, y compris les jours fériés, pour toutes les urgences plomberie. Un supplément peut s'appliquer pour les interventions en dehors des heures ouvrables.",
  },
  {
    question: "Combien coûte un dépannage en urgence ?",
    answer:
      "Le tarif dépend de la nature de l'intervention. À titre indicatif : débouchage à partir de 89 euros, réparation fuite à partir de 120 euros. Le tarif exact vous est communiqué par téléphone avant intervention.",
  },
  {
    question: "Que faire en cas de fuite d'eau en attendant le plombier ?",
    answer:
      "Coupez immédiatement l'arrivée d'eau générale (vanne d'arrêt), coupez l'électricité dans la zone touchée, épongez l'eau stagnante et contactez-nous au plus vite.",
  },
];

export const faqPlomberie: FAQ[] = [
  {
    question: "Combien coûte l'installation d'un WC suspendu ?",
    answer:
      "Le coût d'installation d'un WC suspendu varie entre 800 et 1 500 euros selon le modèle et la configuration de votre salle de bain. Ce tarif comprend le bâti-support, la cuvette et la pose complète.",
  },
  {
    question: "Comment détectez-vous les fuites cachées ?",
    answer:
      "Nous utilisons des équipements professionnels : caméra d'inspection pour les canalisations, détecteur acoustique et thermographie pour les fuites dans les murs ou sous le sol, sans casse.",
  },
];

export const faqSalleDeBain: FAQ[] = [
  {
    question: "Combien de temps dure une rénovation de salle de bain ?",
    answer:
      "En moyenne, une rénovation complète de salle de bain prend entre 1 et 3 semaines selon l'ampleur des travaux. Nous établissons un planning précis dans le devis.",
  },
  {
    question: "Quelles sont les aides pour une salle de bain PMR ?",
    answer:
      "Selon votre situation, vous pouvez bénéficier de MaPrimeAdapt', des aides de l'ANAH, du crédit d'impôt et des aides de votre caisse de retraite. Nous vous accompagnons dans les démarches.",
  },
  {
    question: "Peut-on remplacer une baignoire par une douche italienne ?",
    answer:
      "Oui, c'est l'un de nos travaux les plus demandés. Nous adaptons l'évacuation, assurons l'étanchéité et posons un receveur extra-plat pour un accès facilité.",
  },
];

export const faqCharpente: FAQ[] = [
  {
    question: "Comment protéger sa charpente des termites à La Réunion ?",
    answer:
      "Le traitement anti-termites est indispensable à La Réunion. Nous appliquons un traitement préventif lors de la construction et curatif si votre charpente est déjà attaquée. Un contrôle régulier tous les 5 ans est recommandé.",
  },
  {
    question: "Quels types de bois utilisez-vous pour les charpentes ?",
    answer:
      "Nous utilisons des bois traités classe 4 adaptés au climat tropical : bois exotiques (teck, ipé) ou résineux traités autoclave. Le choix dépend de votre budget et de la destination (intérieur/extérieur).",
  },
  {
    question: "Votre charpente résiste-t-elle aux cyclones ?",
    answer:
      "Oui, toutes nos charpentes sont conçues selon les normes cycloniques en vigueur à La Réunion (NV65 modifiée). Les assemblages et ancrages sont dimensionnés pour résister aux vents violents.",
  },
];

export const faqMenuiserie: FAQ[] = [
  {
    question: "Quel bois choisir pour une terrasse à La Réunion ?",
    answer:
      "Pour une terrasse à La Réunion, nous recommandons des bois classe 4 ou 5 : bois exotiques (ipé, cumaru) ou bois composites. Ces essences résistent à l'humidité, aux UV et aux insectes sans traitement particulier.",
  },
  {
    question: "Fabriquez-vous des menuiseries sur mesure ?",
    answer:
      "Oui, chaque projet est unique. Nous réalisons portes, fenêtres, escaliers, placards et aménagements intérieurs sur mesure, adaptés à vos dimensions et vos envies. Rdv sur place pour prise de mesures.",
  },
  {
    question: "Quel est le délai pour une menuiserie sur mesure ?",
    answer:
      "Le délai varie selon la complexité du projet : comptez 2 à 4 semaines pour des fenêtres ou portes, 3 à 6 semaines pour un escalier sur mesure. Nous vous communiquons un délai précis lors du devis.",
  },
];

export const faqChauffeEau: FAQ[] = [
  {
    question: "Quand faut-il remplacer son chauffe-eau ?",
    answer:
      "Un chauffe-eau doit généralement être remplacé au bout de 10 à 15 ans, ou en cas de fuite au niveau de la cuve, de baisse de performance ou de bruits inhabituels.",
  },
  {
    question: "Chauffe-eau solaire ou thermodynamique à La Réunion ?",
    answer:
      "À La Réunion, le chauffe-eau solaire est souvent le meilleur choix grâce au fort ensoleillement. Il couvre 70 à 90% de vos besoins en eau chaude. Le thermodynamique est une bonne alternative si votre toiture ne permet pas l'installation de panneaux.",
  },
];
