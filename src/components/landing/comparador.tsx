import { useState } from "react";
import { Heart, MoveHorizontal } from "lucide-react";
import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

function PanelTradicional({ split = false }: { split?: boolean }) {
  return (
    <div className="h-full bg-secondary/60">
      <div className={cn("p-6 sm:p-8", split && "w-[52%]")}>
      <span className="text-[0.6rem] font-bold tracking-[0.2em] text-muted-foreground">
        CONTEÚDO TRADICIONAL
      </span>
      <h3 className="mt-3 text-sm font-bold text-ink">Coração — texto corrido</h3>
      <div className="mt-5 space-y-3">
        {[100, 96, 92, 98, 88, 94, 90, 84, 97, 91, 86].map((w, i) => (
          <span
            key={i}
            className="block h-2 rounded-full bg-ink/12"
            style={{ width: `${w}%` }}
            aria-hidden
          />
        ))}
      </div>
      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
        Informação espalhada em vários parágrafos, difícil de localizar rapidamente durante a
        revisão.
      </p>
      </div>
    </div>
  );
}

function PanelMapa({ split = false }: { split?: boolean }) {
  return (
    <div className={cn("h-full bg-card", split && "flex justify-end")}>
      <div className={cn("p-6 sm:p-8", split && "w-[48%]")}>
      <span className="text-[0.6rem] font-bold tracking-[0.2em] text-primary">MAPA VISUAL</span>
      <h3 className="mt-3 text-sm font-bold text-ink">Coração — estrutura organizada</h3>

      <div className="mt-5 grid grid-cols-[auto_1fr] items-center gap-4">
        <span className="flex size-16 items-center justify-center rounded-2xl border border-primary/20 bg-accent text-primary">
          <Heart className="size-8" strokeWidth={1.4} />
        </span>
        <div className="space-y-2">
          {["Átrios", "Ventrículos", "Valvas"].map((t) => (
            <div key={t} className="flex items-center gap-2">
              <span className="h-px w-5 bg-primary/40" aria-hidden />
              <span className="rounded-md border border-border bg-secondary/70 px-2.5 py-1 text-[0.68rem] font-semibold text-ink">
                {t}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-2.5">
        {["Circulação", "Irrigação", "Inervação", "Relações"].map((t) => (
          <div
            key={t}
            className="rounded-lg border border-border bg-secondary/50 px-3 py-2.5 text-[0.68rem] font-semibold text-ink"
          >
            {t}
            <span className="mt-1.5 block h-1 w-2/3 rounded-full bg-primary/25" aria-hidden />
          </div>
        ))}
      </div>
      </div>
    </div>
  );
}

export function Comparador() {
  const [pos, setPos] = useState(50);
  const [mobileView, setMobileView] = useState<"trad" | "mapa">("mapa");

  return (
    <section id="como-funciona" className="border-y border-border bg-secondary/40 px-5 py-20">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-center text-2xl font-bold leading-snug tracking-tight text-ink sm:text-[2rem]">
            Anatomia tem muita informação.{" "}
            <span className="text-primary">Organizar visualmente muda a forma de revisar.</span>
          </h2>
        </Reveal>

        {/* Mobile: toggle */}
        <Reveal className="mt-10 md:hidden">
          <div
            role="tablist"
            aria-label="Comparar formatos"
            className="mx-auto grid max-w-xs grid-cols-2 gap-1 rounded-full border border-border bg-card p-1"
          >
            {(
              [
                ["trad", "TRADICIONAL"],
                ["mapa", "MAPA VISUAL"],
              ] as const
            ).map(([key, label]) => (
              <button
                key={key}
                role="tab"
                aria-selected={mobileView === key}
                onClick={() => setMobileView(key)}
                className={cn(
                  "rounded-full py-2.5 text-[0.62rem] font-extrabold tracking-[0.12em] transition-all",
                  mobileView === key
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground",
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-soft)]">
            <div key={mobileView} className="swap-in">
              {mobileView === "trad" ? <PanelTradicional /> : <PanelMapa />}
            </div>
          </div>
        </Reveal>

        {/* Desktop: comparador deslizante */}
        <Reveal className="mt-12 hidden md:block">
          <div className="relative min-h-[28rem] select-none overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-card)]">
            <PanelTradicional split />
            <div
              className="absolute inset-0"
              style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
              aria-hidden
            >
              <PanelMapa split />
            </div>
            <div
              className="pointer-events-none absolute inset-y-0 w-px bg-primary/70"
              style={{ left: `${pos}%` }}
              aria-hidden
            >
              <span className="absolute left-1/2 top-1/2 flex size-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary/25 bg-card text-primary shadow-[var(--shadow-card)]">
                <MoveHorizontal className="size-4" />
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={pos}
              onChange={(e) => setPos(Number(e.target.value))}
              aria-label="Comparar conteúdo tradicional e mapa visual"
              className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            />
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Arraste para comparar os dois formatos.
          </p>
        </Reveal>

        <Reveal>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
            Em vez de procurar uma informação em vários parágrafos, visualize os principais pontos
            organizados em um único material.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
