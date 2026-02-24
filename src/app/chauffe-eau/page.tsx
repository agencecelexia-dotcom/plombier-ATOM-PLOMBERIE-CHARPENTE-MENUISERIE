import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Zap, Sun, Leaf, Wrench } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { ServicePageLayout } from "@/components/sections/ServicePageLayout";
import { SectionContainer } from "@/components/sections/SectionContainer";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { faqChauffeEau } from "@/config/faq";
import { heroImages } from "@/config/images";
import { chauffeEau, shared } from "@/config/content";

export const metadata: Metadata = generatePageMetadata({
  title: `Chauffe-eau ${siteConfig.address.city} | Solaire, thermodynamique, électrique`,
  description: `Installation et remplacement de chauffe-eau à ${siteConfig.address.city} (La Réunion). Solaire, thermodynamique, électrique. Profitez du soleil réunionnais. Devis gratuit.`,
  path: "/chauffe-eau",
});

const serviceIcons = [Zap, Sun, Leaf, Wrench];

const serviceLiesLinks: Record<string, string> = {
  "Plomberie": "/plomberie",
  "Dépannage plomberie": "/depannage-plomberie",
};

export default function ChauffeEauPage() {
  return (
    <ServicePageLayout
      hero={{
        title: chauffeEau.hero.title,
        subtitle: chauffeEau.hero.subtitle,
        imagePlaceholder: {
          prompt: "Chauffe-eau solaire avec panneaux sur toit de maison réunionnaise, ciel bleu tropical, végétation luxuriante, photo réaliste, ratio 16:9",
          aspectRatio: "16/9",
          src: heroImages["chauffe-eau"] || undefined,
        },
      }}
      breadcrumbs={[
        { label: "Accueil", href: "/" },
        { label: "Chauffe-eau" },
      ]}
      faqs={faqChauffeEau}
    >
      {/* Services */}
      <SectionContainer>
        <SectionHeading
          title={chauffeEau.services.title}
          subtitle={chauffeEau.services.subtitle}
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {chauffeEau.services.items.map((s, i) => {
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

      {/* Comparatif */}
      <SectionContainer variant="gray">
        <SectionHeading
          title={chauffeEau.comparatif.title}
          subtitle={chauffeEau.comparatif.subtitle}
        />
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl border overflow-hidden bg-white">
            <div className="grid grid-cols-4 bg-primary text-primary-foreground text-sm font-bold">
              {chauffeEau.comparatif.headers.map((header) => (
                <div key={header} className={`p-4 ${header !== chauffeEau.comparatif.headers[0] ? "text-center" : ""}`}>{header}</div>
              ))}
            </div>
            {chauffeEau.comparatif.rows.map((row, i) => (
              <div key={row.critere} className={`grid grid-cols-4 text-sm ${i % 2 === 0 ? "bg-muted/30" : ""}`}>
                <div className="p-4 font-medium">{row.critere}</div>
                <div className="p-4 text-center text-muted-foreground">{row.electrique}</div>
                <div className="p-4 text-center font-medium text-accent-500">{row.solaire}</div>
                <div className="p-4 text-center text-muted-foreground">{row.thermo}</div>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* Services liés */}
      <SectionContainer variant="white">
        <SectionHeading title={shared.sections.servicesLies} />
        <div className="flex flex-wrap justify-center gap-4">
          {chauffeEau.servicesLies.map((label) => (
            <Link key={label} href={serviceLiesLinks[label]} className="px-8 py-4 border border-neutral-200 text-neutral-700 font-semibold rounded-lg hover:bg-neutral-50 transition-all">{label}</Link>
          ))}
        </div>
      </SectionContainer>
    </ServicePageLayout>
  );
}
