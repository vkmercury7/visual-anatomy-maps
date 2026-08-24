import { ArrowRight } from "lucide-react";
import { Reveal } from "./reveal";
import { MapStack } from "./map-stack";
import { CHECKOUT_URL, PRODUCT } from "@/lib/landing-config";

export function Oferta() {
  return (
    <section id="oferta" className="relative overflow-hidden bg-wine-deep px-5 py-20 sm:py-28">
      <div aria-hidden className="anatomy-grid-dark pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-lg">
        <Reveal>
          <div className="mx-auto -mb-16 w-[62%] max-w-[15rem] opacity-95">
            <MapStack />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="relative rounded-3xl border border-border bg-card p-7 text-center shadow-[var(--shadow-card)] sm:p-10">
            <span className="inline-block rounded-full bg-accent px-3.5 py-1.5 text-[0.62rem] font-extrabold tracking-[0.16em] text-accent-foreground">
              ACESSO COMPLETO
            </span>

            <h2 className="mt-6 text-2xl font-bold leading-snug tracking-tight text-ink sm:text-[1.9rem]">
              Leve os 200 Mapas Visuais de Anatomia
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Tenha uma biblioteca visual para consultar e revisar conteúdos de Anatomia de maneira
              muito mais organizada.
            </p>

            <div className="my-8 rounded-2xl border border-border bg-secondary/60 px-5 py-7">
              <p className="text-[0.68rem] font-extrabold tracking-[0.16em] text-ink">
                200 MAPAS VISUAIS DE ANATOMIA
              </p>
              <p className="mt-1 text-xs text-muted-foreground">{PRODUCT.format}</p>
              <p className="mt-5 text-[3.4rem] font-extrabold leading-none tracking-tight text-primary sm:text-[4rem]">
                {PRODUCT.price}
              </p>
              <p className="mt-3 text-xs text-muted-foreground">{PRODUCT.priceNote}</p>
            </div>

            <a
              href={CHECKOUT_URL}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 text-sm font-extrabold tracking-wide text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-wine-deep active:translate-y-0 active:scale-[0.99]"
            >
              QUERO ACESSAR AGORA
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>

            <p className="mt-4 text-xs text-muted-foreground">{PRODUCT.deliveryNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
