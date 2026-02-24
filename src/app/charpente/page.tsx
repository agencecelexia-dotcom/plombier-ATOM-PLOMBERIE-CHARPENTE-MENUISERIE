import type { Metadata } from "next";
import Link from "next/link";
import { Hammer, RefreshCw, Bug, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { siteConfig } from "@/config/site";
import { faqCharpente } from "@/config/faq";
import { heroImages, pageImages } from "@/config/images";
import { charpente, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Charpente ${siteConfig.address.city} | Construction, rénovation, anti-termites`,
  description: `Charpentier au ${siteConfig.address.city} (La Réunion). Construction charpente traditionnelle, rénovation toiture, traitement anti-termites. Devis gratuit.`,
  path: "/charpente",
});

const solutionIcons = [Hammer, RefreshCw, Bug];

const solutionImages: Record<string, { prompt: string; imageKey: string }> = {
  "Charpente traditionnelle": { prompt: "Belle charpente traditionnelle bois neuve en construction sur maison réunionnaise, fermes et pannes assemblées, bois traité couleur miel, ciel tropical bleu, photo réaliste, ratio 3:2", imageKey: "charpente-traditionnelle" },
  "Rénovation de toiture": { prompt: "Artisan charpentier rénovant une toiture de case créole, remplacement de pièces de bois, vue sur les montagnes de La Réunion, photo réaliste, ratio 3:2", imageKey: "charpente-renovation" },
  "Traitement anti-termites": { prompt: "Traitement anti-termites professionnel sur charpente bois, application de produit protecteur par pulvérisation, bois apparent dans combles, photo réaliste, ratio 3:2", imageKey: "charpente-anti-termites" },
};

const serviceLiesLinks: Record<string, string> = {
  "Menuiserie": "/menuiserie",
  "Plomberie": "/plomberie",
};

export default function CharpentePage() {
  return (
    <ServicePageLayout
      hero={{
        title: charpente.hero.title,
        subtitle: charpente.hero.subtitle,
        imagePlaceholder: {
          prompt: "Magnifique charpente traditionnelle bois sous ciel tropical de La Réunion, maison créole en construction, poutres en bois massif assemblées, artisan au travail, photo réaliste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["charpente"] || undefined,
        },
        badges: charpente.hero.badges,
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Charpente" },
      ]}
      faqs={faqCharpente}
    >
      {/* Prestations */}
      <SectionContainer>
        <SectionHeading
          title={charpente.solutions.title}
          subtitle={charpente.solutions.subtitle}
        />
        <div className="space-y-12">
          {charpente.solutions.items.map((s, i) => {
            const Icon = solutionIcons[i];
            const imgData = solutionImages[s.title];
            return (
              <div key={s.title} className="grid lg:grid-cols-2 gap-8 items-center">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-neutral-900">{s.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <ImagePlaceholder prompt={imgData?.prompt ?? ""} src={pageImages[imgData?.imageKey ?? ""] || undefined} aspectRatio="3/2" alt={s.title} />
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>

      {/* Avantages */}
      <SectionContainer variant="gray">
        <SectionHeading title={charpente.avantages.title} />
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-3">
            {charpente.avantages.items.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="white">
        <SectionHeading title={shared.sections.servicesLies} />
        <div className="flex flex-wrap justify-center gap-4">
          {charpente.servicesLies.map((label) => (
            <Link key={label} href={serviceLiesLinks[label]} className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">{label}</Link>
          ))}
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
