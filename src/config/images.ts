/**
 * Mapping des images du site — Images pour tous les emplacements.
 *
 * Les constantes partagees permettent de remplir UN chemin
 * et toutes les pages qui reutilisent cette image se mettent a jour.
 */

// ============================================================
// Images partagees (1 fichier → plusieurs emplacements)
// ============================================================

/** Hero generique — heroes blog, avis-clients, contact, a-propos, realisations + section cta-bandeau */
const HERO_GENERIQUE = "/images/heroes/generique-plombier.jpeg";

/** Hero plomberie + page plomberie-tuyauterie */
const IMG_PLOMBERIE_HERO = "/images/heroes/plomberie.jpeg";

/** Hero renovation-sdb + page renovation-complete */
const IMG_RENOVATION_SDB = "/images/heroes/renovation-sdb.jpeg";

/** Page douche-italienne */
const IMG_DOUCHE_ITALIENNE = "/images/pages/renovation-douche-italienne.jpeg";

/** Page PMR */
const IMG_SDB_PMR = "/images/pages/renovation-pmr.jpeg";

/** Section urgence-card + realisation depannage-before */
const IMG_FUITE_EAU = "/images/sections/urgence-card.png";

// ============================================================
// Hero pages
// ============================================================
export const heroImages: Record<string, string> = {
  "accueil":              "/images/heroes/accueil.jpeg",
  "depannage-plomberie":  "/images/heroes/depannage-plomberie.jpeg",
  "plomberie":            IMG_PLOMBERIE_HERO,
  "renovation-sdb":       IMG_RENOVATION_SDB,
  "charpente":            "/images/heroes/charpente.jpeg",
  "menuiserie":           "/images/heroes/menuiserie.jpeg",
  "chauffe-eau":          "/images/heroes/chauffe-eau.jpeg",
  "blog":                 HERO_GENERIQUE,
  "avis-clients":         HERO_GENERIQUE,
  "contact":              HERO_GENERIQUE,
  "a-propos":             HERO_GENERIQUE,
  "realisations":         HERO_GENERIQUE,
};

// ============================================================
// Sections
// ============================================================
export const sectionImages: Record<string, string> = {
  "cta-bandeau":          HERO_GENERIQUE,
  "urgence-card":         IMG_FUITE_EAU,
  "projet-card":          "/images/sections/projet-card.jpeg",
};

// ============================================================
// Pages specifiques
// ============================================================
export const pageImages: Record<string, string> = {
  // A propos
  "a-propos-fondateur":          "/images/pages/a-propos-fondateur.jpeg",
  "a-propos-equipe":             "/images/pages/a-propos-equipe.jpeg",
  // Plomberie
  "plomberie-robinetterie":      "/images/pages/plomberie-robinetterie.jpeg",
  "plomberie-tuyauterie":        IMG_PLOMBERIE_HERO,
  "plomberie-recherche-fuite":   "/images/pages/plomberie-recherche-fuite.jpeg",
  "plomberie-mise-aux-normes":   "/images/pages/plomberie-mise-aux-normes.jpeg",
  // Renovation salle de bain
  "renovation-douche-italienne": IMG_DOUCHE_ITALIENNE,
  "renovation-complete":         IMG_RENOVATION_SDB,
  "renovation-pmr":              IMG_SDB_PMR,
  // Charpente
  "charpente-traditionnelle":    "/images/pages/charpente-traditionnelle.jpeg",
  "charpente-renovation":        "/images/pages/charpente-renovation.jpeg",
  "charpente-anti-termites":     "/images/pages/charpente-anti-termites.jpeg",
  // Menuiserie
  "menuiserie-portes-fenetres":  "/images/pages/menuiserie-portes-fenetres.jpeg",
  "menuiserie-escaliers":        "/images/pages/menuiserie-escaliers.jpeg",
  "menuiserie-terrasses":        "/images/pages/menuiserie-terrasses.jpeg",
  "menuiserie-amenagements":     "/images/pages/menuiserie-amenagements.jpeg",
};

// ============================================================
// Realisations avant/apres
// ============================================================
export const realisationImages: Record<string, string> = {
  "sdb-tampon-before":                    "/images/realisations/sdb-tampon-before.jpeg",
  "sdb-tampon-after":                     "/images/realisations/sdb-tampon-after.jpeg",
  "cuisine-saint-pierre-before":          "/images/realisations/cuisine-saint-pierre-before.jpeg",
  "cuisine-saint-pierre-after":           "/images/realisations/cuisine-saint-pierre-after.jpeg",
  "chauffe-eau-entre-deux-before":        "/images/realisations/chauffe-eau-entre-deux-before.jpeg",
  "chauffe-eau-entre-deux-after":         "/images/realisations/chauffe-eau-entre-deux-after.jpeg",
  "charpente-petite-ile-before":          "/images/realisations/charpente-petite-ile-before.jpeg",
  "charpente-petite-ile-after":           "/images/realisations/charpente-petite-ile-after.jpeg",
  "sdb-pmr-saint-louis-before":           "/images/realisations/sdb-pmr-saint-louis-before.jpeg",
  "sdb-pmr-saint-louis-after":            IMG_SDB_PMR,
  "menuiserie-escalier-tampon-before":    "/images/realisations/menuiserie-escalier-tampon-before.jpeg",
  "menuiserie-escalier-tampon-after":     "/images/realisations/menuiserie-escalier-tampon-after.jpeg",
  "douche-saint-joseph-before":           "/images/realisations/douche-saint-joseph-before.jpeg",
  "douche-saint-joseph-after":            IMG_DOUCHE_ITALIENNE,
  "charpente-renovation-cilaos-before":   "/images/realisations/charpente-renovation-cilaos-before.jpeg",
  "charpente-renovation-cilaos-after":    "/images/realisations/charpente-renovation-cilaos-after.jpeg",
  "depannage-saint-pierre-before":        IMG_FUITE_EAU,
  "depannage-saint-pierre-after":         "/images/realisations/depannage-saint-pierre-after.jpeg",
  "terrasse-bois-tampon-before":          "/images/realisations/terrasse-bois-tampon-before.jpeg",
  "terrasse-bois-tampon-after":           "/images/realisations/terrasse-bois-tampon-after.jpeg",
};
