import { useEffect, useState } from "react";
import { Search, Heart, Brain, Wind, Bone } from "lucide-react";
import { Reveal } from "./reveal";
import mapaCerebro from "@/assets/mapa-cerebro.jpg";
import mapaPulmoes from "@/assets/mapa-pulmoes.jpg";
import mapaEsqueleto from "@/assets/mapa-esqueleto.jpg";
import mapa1 from "@/assets/mapa-1.jpg";

/** Demonstração visual da organização do produto (não é uma busca real). */
const CONSULTAS = [
  {
    termo: "Coração",
    icon: Heart,
    sistema: "Sistema Cardiovascular",
    img: mapa1,
    temas: ["Câmaras cardíacas", "Valvas", "Circulação"],
  },
  {
    termo: "Sistema Nervoso",
    icon: Brain,
    sistema: "Neuroanatomia",
    img: mapaCerebro,
    temas: ["Encéfalo", "Medula espinal", "Nervos cranianos"],
  },
  {
    termo: "Pulmões",
    icon: Wind,
    sistema: "Sistema Respiratório",
    img: mapaPulmoes,
    temas: ["Lobos pulmonares", "Vias aéreas", "Pleuras"],
  },
  {
    termo: "Sistema Esquelético",
    icon: Bone,
    sistema: "Osteologia",
    img: mapaEsqueleto,
    temas: ["Crânio", "Coluna vertebral", "Membros"],
  },
];

export function Biblioteca() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % CONSULTAS.length), 3600);
    return () => clearInterval(id);
  }, []);

  const atual = CONSULTAS[i]!;
  const Icon = atual.icon;

  return (
    <section className="border-y border-border bg-wine-soft/40 px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-[2rem]">
            Encontre rapidamente o que precisa revisar.
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
            {/* barra */}
            <div className="flex items-center gap-3 border-b border-border px-5 py-4">
              <Search className="size-4 shrink-0 text-primary" />
              <div className="min-w-0 flex-1">
                <p className="text-[0.6rem] font-bold tracking-[0.16em] text-muted-foreground">
                  O QUE VOCÊ PRECISA REVISAR HOJE?
                </p>
                <p key={atual.termo} className="swap-in truncate text-sm font-semibold text-ink">
                  {atual.termo}
                  <span className="ml-0.5 inline-block h-4 w-px translate-y-0.5 bg-primary caret-blink" />
                </p>
              </div>
            </div>

            {/* resultado */}
            <div key={atual.sistema} className="swap-in grid gap-5 p-5 sm:grid-cols-[7rem_1fr] sm:p-6">
              <div className="overflow-hidden rounded-xl border border-border bg-secondary/50">
                <img
                  src={atual.img}
                  alt={`Mapa visual — ${atual.sistema}`}
                  width={800}
                  height={1040}
                  loading="lazy"
                  className="h-32 w-full object-cover object-top sm:h-full"
                />
              </div>
              <div className="min-w-0">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-[0.6rem] font-bold tracking-[0.14em] text-accent-foreground">
                  <Icon className="size-3.5" strokeWidth={1.8} />
                  {atual.sistema.toUpperCase()}
                </span>
                <p className="mt-4 text-sm font-bold text-ink">Mapas relacionados</p>
                <ul className="mt-3 space-y-2">
                  {atual.temas.map((t) => (
                    <li
                      key={t}
                      className="flex items-center gap-2.5 rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-xs font-semibold text-ink"
                    >
                      <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-6 flex justify-center gap-2">
            {CONSULTAS.map((c, idx) => (
              <button
                key={c.termo}
                onClick={() => setI(idx)}
                aria-label={`Ver ${c.termo}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-7 bg-primary" : "w-3 bg-border hover:bg-primary/40"
                }`}
              />
            ))}
          </div>
          <p className="mt-5 text-center text-xs leading-relaxed text-muted-foreground">
            Demonstração da organização do material. Os mapas ficam agrupados por tema para
            facilitar a consulta.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
