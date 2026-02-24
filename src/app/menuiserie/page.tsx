import type { Metadata } from "next";
import Link from "next/link";
import { DoorOpen, ArrowUpRight, TreePine, BookOpen, CheckCircle } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqMenuiserie } from "@/config/faq";
import { heroImages } from "@/config/images";
import { menuiserie, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Menuiserie ${siteConfig.address.city} | Portes, fenêtres, escaliers bois`,
  description: `Menuisier au ${siteConfig.address.city} (La Réunion). Portes, fenêtres, escaliers, terrasses bois, varangues. Fabrication sur mesure adaptée au climat tropical. Devis gratuit.`,
  path: "/menuiserie",
});

const serviceIcons = [DoorOpen, ArrowUpRight, TreePine, BookOpen];

const serviceLiesLinks: Record<string, string> = {
  "Charpente": "/charpente",
  "Salle de bain": "/renovation-salle-de-bain",
};

export default function MenuiseriePage() {
  return (
    <ServicePageLayout
      hero={{
        title: menuiserie.hero.title,
        subtitle: menuiserie.hero.subtitle,
        imagePlaceholder: {
          prompt: "Atelier menuiserie artisanale, artisan travaillant le bois, établi avec outils, pièces de menuiserie en cours de fabrication, lumière naturelle, ambiance tropicale, photo réaliste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["menuiserie"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Menuiserie" },
      ]}
      faqs={faqMenuiserie}
    >
      {/* Services */}
      <SectionContainer>
        <SectionHeading
          title={menuiserie.services.title}
          subtitle={menuiserie.services.subtitle}
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {menuiserie.services.items.map((s, i) => {
            const Icon = serviceIcons[i];
            return (
              <Card key={s.title}>
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </SectionContainer>

      {/* Avantages */}
      <SectionContainer variant="gray">
        <SectionHeading title={menuiserie.avantages.title} />
        <div className="max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-3">
            {menuiserie.avantages.items.map((item) => (
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
          {menuiserie.servicesLies.map((label) => (
            <Link key={label} href={serviceLiesLinks[label]} className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">{label}</Link>
          ))}
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
