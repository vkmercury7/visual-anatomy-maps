import { useState } from "react";
import {
  Heart,
  Brain,
  Wind,
  Bone,
  Activity,
  Utensils,
  Droplets,
  Baby,
  Plus,
} from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

const sistemas = [
  {
    icon: Heart,
    name: "Sistema Cardiovascular",
    temas: ["Coração", "Grandes vasos", "Circulação"],
  },
  { icon: Brain, name: "Sistema Nervoso", temas: ["Encéfalo", "Medula espinal", "Nervos"] },
  { icon: Wind, name: "Sistema Respiratório", temas: ["Pulmões", "Vias aéreas", "Diafragma"] },
  { icon: Bone, name: "Sistema Esquelético", temas: ["Crânio", "Coluna", "Membros"] },
  { icon: Activity, name: "Sistema Muscular", temas: ["Tronco", "Membros", "Face"] },
  { icon: Utensils, name: "Sistema Digestório", temas: ["Estômago", "Intestinos", "Fígado"] },
  { icon: Droplets, name: "Sistema Urinário", temas: ["Rins", "Ureteres", "Bexiga"] },
  { icon: Baby, name: "Sistema Reprodutor", temas: ["Órgãos internos", "Órgãos externos"] },
];

export function Sistemas() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="conteudo" className="px-5 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-[2rem]">
            Explore a Anatomia por sistemas
          </h2>
          <p className="mx-auto mt-4 max-w-md text-center text-sm leading-relaxed text-muted-foreground">
            Uma biblioteca visual organizada para acompanhar seus estudos e revisões.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sistemas.map(({ icon: Icon, name, temas }, i) => {
            const isOpen = open === name;
            return (
              <Reveal as="li" key={name} delay={Math.min(i, 5) * 60}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : name)}
                  aria-expanded={isOpen}
                  className={cn(
                    "group h-full w-full rounded-2xl border bg-card p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-card)]",
                    isOpen ? "border-primary/35 shadow-[var(--shadow-soft)]" : "border-border",
                  )}
                >
                  <span className="flex items-start justify-between gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" strokeWidth={1.6} />
                    </span>
                    <Plus
                      className={cn(
                        "size-4 text-muted-foreground transition-transform duration-300",
                        isOpen && "rotate-45 text-primary",
                      )}
                    />
                  </span>
                  <span className="mt-4 block text-sm font-bold leading-snug text-ink">{name}</span>
                  <span
                    className={cn(
                      "grid transition-all duration-300",
                      isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <span className="overflow-hidden">
                      <span className="flex flex-wrap gap-1.5">
                        {temas.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-border bg-secondary/70 px-2 py-1 text-[0.65rem] font-semibold text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </span>
                    </span>
                  </span>
                </button>
              </Reveal>
            );
          })}
        </ul>

        <Reveal>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            E diversos outros conteúdos dentro dos 200 Mapas Visuais.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
