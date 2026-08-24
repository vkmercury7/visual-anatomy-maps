import { createFileRoute } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Heart,
  Brain,
  Wind,
  Bone,
  Activity,
  Utensils,
  Layers,
  FolderTree,
  Smartphone,
  BookOpen,
  Check,
  X,
} from "lucide-react";
import mapa1 from "@/assets/mapa-1.jpg";
import mapa2 from "@/assets/mapa-2.jpg";
import mapa3 from "@/assets/mapa-3.jpg";

// Substitua pela URL real do checkout:
const CHECKOUT_URL = "CHECKOUT_URL";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "200 Mapas Visuais de Anatomia | Material digital R$ 23,90" },
      {
        name: "description",
        content:
          "Os principais conteúdos de Anatomia organizados visualmente para facilitar sua compreensão, consulta e revisão. Material digital por R$ 23,90.",
      },
      { property: "og:title", content: "200 Mapas Visuais de Anatomia" },
      {
        property: "og:description",
        content:
          "Uma biblioteca visual de Anatomia organizada por temas para consulta e revisão. Material digital, R$ 23,90.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const sistemas = [
  { icon: Heart, name: "Sistema Cardiovascular" },
  { icon: Brain, name: "Sistema Nervoso" },
  { icon: Wind, name: "Sistema Respiratório" },
  { icon: Bone, name: "Sistema Esquelético" },
  { icon: Activity, name: "Sistema Muscular" },
  { icon: Utensils, name: "Sistema Digestório" },
];

const beneficios = [
  {
    icon: Layers,
    title: "200 Mapas Visuais",
    text: "Conteúdos de Anatomia apresentados de forma visual e organizada.",
  },
  {
    icon: FolderTree,
    title: "Organizados por temas",
    text: "Encontre com facilidade o assunto que deseja consultar.",
  },
  {
    icon: Smartphone,
    title: "100% digital",
    text: "Acesse o material pelo celular, tablet ou computador.",
  },
  {
    icon: BookOpen,
    title: "Feito para consulta e revisão",
    text: "Use como material complementar durante seus estudos.",
  },
];

const faq = [
  {
    q: "O material é físico?",
    a: "Não. Os 200 Mapas Visuais são um produto digital.",
  },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim. O material digital pode ser visualizado pelo celular, tablet ou computador.",
  },
  {
    q: "Para quem é o material?",
    a: "Para estudantes que estudam Anatomia e procuram um material visual complementar para consulta e revisão.",
  },
  {
    q: "Os mapas substituem aulas e livros?",
    a: "Não. Os mapas são materiais complementares de estudo e revisão.",
  },
];

function Mockup() {
  return (
    <div className="relative mx-auto w-full max-w-[22rem] sm:max-w-[26rem]">
      <div className="absolute -left-4 top-6 hidden w-[78%] rotate-[-6deg] overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] sm:block">
        <img src={mapa2} alt="" width={800} height={1040} loading="lazy" className="w-full" />
      </div>
      <div className="absolute -right-3 top-3 hidden w-[72%] rotate-[5deg] overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] sm:block">
        <img src={mapa3} alt="" width={800} height={1040} loading="lazy" className="w-full" />
      </div>
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-muted-foreground">
            MAPA VISUAL
          </span>
          <span className="text-[0.65rem] font-semibold tracking-[0.18em] text-primary">
            ANATOMIA
          </span>
        </div>
        <img
          src={mapa1}
          alt="Exemplo de mapa visual de Anatomia"
          width={800}
          height={1040}
          className="w-full"
        />
      </div>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <a href="#topo" className="text-sm font-extrabold tracking-[0.16em] text-ink">
            MAPAS <span className="text-primary">DE ANATOMIA</span>
          </a>
          <nav className="flex items-center gap-6">
            <a
              href="#conteudo"
              className="hidden text-sm font-medium text-muted-foreground transition-colors hover:text-primary sm:block"
            >
              Ver conteúdo
            </a>
            <a
              href="#oferta"
              className="rounded-full bg-primary px-4 py-2 text-xs font-bold tracking-wide text-primary-foreground transition-all hover:bg-wine-deep active:scale-[0.98]"
            >
              Acessar agora
            </a>
          </nav>
        </div>
      </header>

      {/* 1 — HERO */}
      <section id="topo" className="px-5 pb-16 pt-14 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <div className="fade-up">
            <span className="inline-block rounded-full border border-border bg-accent px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-accent-foreground">
              ANATOMIA DE UM JEITO MAIS VISUAL
            </span>
            <h1 className="mt-6 text-3xl leading-[1.15] font-extrabold tracking-tight text-ink sm:text-4xl lg:text-[2.9rem]">
              Pare de tentar decorar Anatomia em páginas e páginas de conteúdo.
            </h1>
            <p className="mt-5 font-[family-name:var(--font-display)] text-2xl text-primary sm:text-3xl">
              200 Mapas Visuais de Anatomia
            </p>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
              Os principais conteúdos de Anatomia organizados visualmente para facilitar sua
              compreensão, consulta e revisão.
            </p>
            <p className="mt-6 text-xs font-semibold tracking-[0.22em] text-ink/70">
              VISUALIZE • ENTENDA • REVISE
            </p>
            <a
              href="#oferta"
              className="mt-8 flex w-full items-center justify-center rounded-xl bg-primary px-7 py-4 text-sm font-extrabold tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:bg-wine-deep active:scale-[0.99] sm:w-auto sm:inline-flex"
            >
              QUERO ACESSAR OS 200 MAPAS
            </a>
            <p className="mt-3 text-xs text-muted-foreground">Material digital • R$ 23,90</p>
          </div>
          <div className="fade-up">
            <Mockup />
          </div>
        </div>
      </section>

      {/* 2 — PROBLEMA → SOLUÇÃO */}
      <section className="border-y border-border bg-secondary/50 px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
            Anatomia tem muita informação. Organizar visualmente faz diferença.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
              <span className="text-[0.65rem] font-bold tracking-[0.18em] text-muted-foreground">
                ESTUDO TRADICIONAL
              </span>
              <ul className="mt-6 space-y-4">
                {[
                  "Textos extensos",
                  "Informações espalhadas",
                  "Difícil localizar rapidamente um conteúdo",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm text-muted-foreground">
                    <X className="mt-0.5 size-4 shrink-0 text-muted-foreground/60" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-primary/25 bg-card p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-card)]">
              <span className="text-[0.65rem] font-bold tracking-[0.18em] text-primary">
                MAPAS VISUAIS
              </span>
              <ul className="mt-6 space-y-4">
                {[
                  "Conteúdo organizado",
                  "Estrutura visual",
                  "Consulta rápida",
                  "Informações agrupadas por tema",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-sm font-medium text-ink">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3 — O QUE VOCÊ ENCONTRA */}
      <section id="conteudo" className="px-5 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Explore Anatomia por sistemas
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
            Os mapas organizam diferentes conteúdos para facilitar sua consulta e revisão.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {sistemas.map(({ icon: Icon, name }) => (
              <div
                key={name}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 md:hover:-translate-y-1 md:hover:border-primary/30 md:hover:shadow-[var(--shadow-soft)]"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 text-sm font-bold text-ink">{name}</h3>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            E diversos outros conteúdos dentro dos 200 Mapas Visuais.
          </p>
        </div>
      </section>

      {/* 4 — O QUE VOCÊ RECEBE */}
      <section className="border-y border-border bg-secondary/50 px-5 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <Mockup />
          <div>
            <h2 className="text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
              Uma biblioteca visual de Anatomia sempre à mão.
            </h2>
            <div className="mt-10 space-y-7">
              {beneficios.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-primary">
                    <Icon className="size-4" strokeWidth={1.7} />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-ink">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-10 text-xs leading-relaxed text-muted-foreground/80">
              Material educacional complementar. Não substitui aulas, livros-texto ou orientação
              docente.
            </p>
          </div>
        </div>
      </section>

      {/* 5 — OFERTA FINAL */}
      <section id="oferta" className="bg-wine-deep px-5 py-20 sm:py-24">
        <div className="mx-auto max-w-lg rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)] sm:p-10">
          <span className="inline-block rounded-full bg-accent px-3 py-1 text-[0.65rem] font-bold tracking-[0.16em] text-accent-foreground">
            ACESSO COMPLETO
          </span>
          <h2 className="mt-6 text-2xl font-bold leading-snug tracking-tight text-ink sm:text-3xl">
            Tenha acesso aos 200 Mapas Visuais de Anatomia
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Uma biblioteca visual para consultar e revisar conteúdos de Anatomia de maneira
            organizada.
          </p>
          <div className="my-8 rounded-2xl border border-border bg-secondary/60 px-6 py-7">
            <p className="text-xs font-bold tracking-[0.16em] text-ink">
              200 MAPAS VISUAIS DE ANATOMIA
            </p>
            <p className="mt-1 text-xs text-muted-foreground">Material digital</p>
            <p className="mt-5 text-5xl font-extrabold tracking-tight text-primary sm:text-6xl">
              R$ 23,90
            </p>
            <p className="mt-2 text-xs text-muted-foreground">Pagamento único</p>
          </div>
          <a
            href={CHECKOUT_URL}
            className="flex w-full items-center justify-center rounded-xl bg-primary px-8 py-4 text-sm font-extrabold tracking-wide text-primary-foreground transition-all hover:bg-wine-deep active:scale-[0.99]"
          >
            QUERO ACESSAR AGORA
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Acesso ao material digital após a confirmação do pagamento.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center text-2xl font-bold tracking-tight text-ink">
            Perguntas frequentes
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faq.map(({ q, a }) => (
              <AccordionItem key={q} value={q} className="border-border">
                <AccordionTrigger className="text-left text-sm font-semibold text-ink hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-10 text-center">
        <p className="text-xs font-bold tracking-[0.16em] text-ink">MAPAS DE ANATOMIA</p>
        <p className="mt-2 text-xs text-muted-foreground">
          Material digital complementar de estudo • R$ 23,90
        </p>
      </footer>
    </div>
  );
}
