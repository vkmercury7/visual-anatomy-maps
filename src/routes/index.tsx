import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Comparador } from "@/components/landing/comparador";
import { Sistemas } from "@/components/landing/sistemas";
import { Biblioteca } from "@/components/landing/biblioteca";
import { Recebe } from "@/components/landing/recebe";
import { Oferta } from "@/components/landing/oferta";
import { FaqSection } from "@/components/landing/faq-section";
import { MobileCta } from "@/components/landing/mobile-cta";
import { PRODUCT } from "@/lib/landing-config";

const title = "200 Mapas Visuais de Anatomia | Material digital R$ 23,90";
const description =
  "Os principais conteúdos de Anatomia organizados visualmente para facilitar sua compreensão, consulta e revisão. Material digital por R$ 23,90.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: PRODUCT.name,
          description,
          offers: {
            "@type": "Offer",
            price: "23.90",
            priceCurrency: "BRL",
            availability: "https://schema.org/InStock",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Comparador />
        <Sistemas />
        <Biblioteca />
        <Recebe />
        <Oferta />
        <FaqSection />
      </main>
      <footer className="border-t border-border px-5 py-10 pb-24 text-center md:pb-10">
        <p className="text-[0.68rem] font-extrabold tracking-[0.18em] text-ink">
          MAPAS DE ANATOMIA
        </p>
        <p className="mt-2 text-xs text-muted-foreground">
          {PRODUCT.format} complementar de estudo • {PRODUCT.price}
        </p>
      </footer>
      <MobileCta />
    </div>
  );
}
