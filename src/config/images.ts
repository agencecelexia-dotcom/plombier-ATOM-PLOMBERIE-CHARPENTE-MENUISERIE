/**
 * Mapping des images du site — 33 images uniques pour 46 emplacements.
 *
 * Les constantes partagees permettent de remplir UN chemin
 * et toutes les pages qui reutilisent cette image se mettent a jour.
 */

// ============================================================
// Images partagees (1 fichier → plusieurs emplacements)
// ============================================================

/** #7 — 21:9 — heroes blog, avis-clients, contact, a-propos, realisations + section cta-bandeau */
const HERO_GENERIQUE = "/images/heroes/generique-plombier.jpeg";

/** #3 — 16:9 — hero plomberie + page plomberie-tuyauterie */
const IMG_PLOMBERIE_HERO = "/images/heroes/plomberie.jpeg";

/** #4 — 16:9 — hero renovation-sdb + page renovation-complete + realisation sdb-after */
const IMG_RENOVATION_SDB = "/images/heroes/renovation-sdb.jpeg";

/** #15 — 4:3 — page douche-italienne + realisation douche-after */
const IMG_DOUCHE_ITALIENNE = "/images/pages/renovation-douche-italienne.jpeg";

/** #16 — 4:3 — page PMR + realisation sdb-pmr-after */
const IMG_SDB_PMR = "/images/pages/renovation-pmr.jpeg";

/** #17 — 3:2 — page charpente-traditionnelle + realisation charpente-renovation-after */
const IMG_CHAUDIERE_GAZ = "/images/pages/chauffage-chaudiere-gaz.jpeg";

/** #19 — 3:2 — page charpente-anti-termites + realisation menuiserie-escalier-after */
const IMG_PLANCHER_CHAUFFANT = "/images/pages/chauffage-plancher-chauffant.jpeg";

/** #8 — 4:3 — section urgence-card + realisation depannage-before */
const IMG_FUITE_EAU = "/images/sections/urgence-card.png";

// ============================================================
// Hero pages (12 emplacements → 7 images uniques)
// ============================================================
export const heroImages: Record<string, string> = {
  "accueil":              "/images/heroes/accueil.jpeg",
  "depannage-plomberie":  "/images/heroes/depannage-plomberie.jpeg",
  "plomberie":            IMG_PLOMBERIE_HERO,
  "renovation-sdb":       IMG_RENOVATION_SDB,
  "charpente":            "/images/heroes/chauffage.jpeg",
  "menuiserie":           HERO_GENERIQUE,
  "chauffe-eau":          "/images/heroes/chauffe-eau.jpeg",
  "blog":                 HERO_GENERIQUE,
  "avis-clients":         HERO_GENERIQUE,
  "contact":              HERO_GENERIQUE,
  "a-propos":             HERO_GENERIQUE,
  "realisations":         HERO_GENERIQUE,
};

// ============================================================
// Sections (3 emplacements → 2 images uniques)
// ============================================================
export const sectionImages: Record<string, string> = {
  "cta-bandeau":          HERO_GENERIQUE,
  "urgence-card":         IMG_FUITE_EAU,
  "projet-card":          "/images/sections/projet-card.jpeg",
};

// ============================================================
// Pages specifiques (16 emplacements → 10 images uniques)
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
  // Charpente (reutilise les images existantes)
  "charpente-traditionnelle":    IMG_CHAUDIERE_GAZ,
  "charpente-renovation":        "/images/pages/chauffage-pac.jpeg",
  "charpente-anti-termites":     IMG_PLANCHER_CHAUFFANT,
  // Menuiserie (reutilise les images existantes)
  "menuiserie-portes-fenetres":  "/images/pages/plomberie-mise-aux-normes.jpeg",
  "menuiserie-escaliers":        "/images/pages/a-propos-fondateur.jpeg",
  "menuiserie-terrasses":        "/images/pages/a-propos-equipe.jpeg",
  "menuiserie-amenagements":     "/images/pages/plomberie-robinetterie.jpeg",
};

// ============================================================
// Realisations avant/apres (20 emplacements → 14 images uniques)
// ============================================================
export const realisationImages: Record<string, string> = {
  "sdb-tampon-before":                    "/images/realisations/sdb-villeurbanne-before.jpeg",
  "sdb-tampon-after":                     "/images/realisations/sdb-villeurbanne-after.png",
  "cuisine-saint-pierre-before":          "/images/realisations/cuisine-lyon3-before.png",
  "cuisine-saint-pierre-after":           "/images/realisations/cuisine-lyon3-after.jpeg",
  "chauffe-eau-entre-deux-before":        "/images/realisations/chauffe-eau-caluire-before.png",
  "chauffe-eau-entre-deux-after":         "/images/realisations/chauffe-eau-caluire-after.png",
  "charpente-petite-ile-before":          "/images/realisations/pac-bron-before.jpeg",
  "charpente-petite-ile-after":           "/images/realisations/pac-bron-after.png",
  "sdb-pmr-saint-louis-before":           "/images/realisations/sdb-pmr-lyon6-before.jpeg",
  "sdb-pmr-saint-louis-after":            IMG_SDB_PMR,
  "menuiserie-escalier-tampon-before":    "/images/realisations/plancher-chauffant-ecully-before.png",
  "menuiserie-escalier-tampon-after":     IMG_PLANCHER_CHAUFFANT,
  "douche-saint-joseph-before":           "/images/realisations/douche-lyon7-before.png",
  "douche-saint-joseph-after":            IMG_DOUCHE_ITALIENNE,
  "charpente-renovation-cilaos-before":   "/images/realisations/chaudiere-tassin-before.png",
  "charpente-renovation-cilaos-after":    IMG_CHAUDIERE_GAZ,
  "depannage-saint-pierre-before":        IMG_FUITE_EAU,
  "depannage-saint-pierre-after":         "/images/realisations/depannage-lyon2-after.png",
  "terrasse-bois-tampon-before":          "/images/realisations/sdb-complete-oullins-before.png",
  "terrasse-bois-tampon-after":           IMG_RENOVATION_SDB,
};
