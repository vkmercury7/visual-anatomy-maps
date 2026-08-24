import { ArrowRight } from "lucide-react";
import { MapStack } from "./map-stack";
import { Reveal } from "./reveal";
import { PRODUCT } from "@/lib/landing-config";

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden px-5 pb-20 pt-12 sm:pt-16">
      <div aria-hidden className="anatomy-grid pointer-events-none absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-accent px-3.5 py-1.5 text-[0.62rem] font-extrabold tracking-[0.16em] text-accent-foreground">
            <span className="size-1.5 rounded-full bg-primary" />
            ANATOMIA DE UM JEITO MAIS VISUAL
          </span>

          <h1 className="mt-7 text-[2rem] font-extrabold leading-[1.12] tracking-tight text-ink sm:text-[2.6rem] lg:text-[3.05rem]">
            Pare de tentar decorar Anatomia em páginas e páginas de conteúdo.
          </h1>

          <p className="mt-6 font-[family-name:var(--font-display)] text-[1.7rem] leading-tight text-primary sm:text-4xl">
            200 Mapas Visuais de Anatomia
          </p>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">
            Os principais conteúdos de Anatomia organizados visualmente para facilitar sua
            compreensão, consulta e revisão.
          </p>

          <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[0.7rem] font-bold tracking-[0.2em] text-ink/70">
            <span>VISUALIZE</span>
            <span className="text-primary/50">•</span>
            <span>ENTENDA</span>
            <span className="text-primary/50">•</span>
            <span>REVISE</span>
          </p>

          <a
            href="#oferta"
            className="group mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-extrabold tracking-wide text-primary-foreground shadow-[var(--shadow-card)] transition-all hover:-translate-y-0.5 hover:bg-wine-deep active:translate-y-0 active:scale-[0.99] sm:inline-flex sm:w-auto"
          >
            QUERO ACESSAR OS 200 MAPAS
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="mt-3.5 text-xs text-muted-foreground">
            {PRODUCT.format} • Acesso completo por{" "}
            <strong className="font-bold text-ink">{PRODUCT.price}</strong>
          </p>
        </Reveal>

        <Reveal delay={120}>
          <MapStack priority />
        </Reveal>
      </div>
    </section>
  );
}
