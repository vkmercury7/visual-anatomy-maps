import mapa1 from "@/assets/mapa-coracao.jpg";
import mapa2 from "@/assets/mapa-digestorio.jpg";
import mapa3 from "@/assets/mapa-3.jpg";
import mapaCerebro from "@/assets/mapa-cerebro.jpg";
import mapaPulmoes from "@/assets/mapa-pulmoes.jpg";
import mapaEsqueleto from "@/assets/mapa-esqueleto.jpg";
import { cn } from "@/lib/utils";

/** Imagens dos mapas — substitua os arquivos em src/assets para trocar o mockup. */
export const MAPS = [
  { src: mapaCerebro, label: "Sistema Nervoso", alt: "Mapa visual do sistema nervoso" },
  { src: mapaPulmoes, label: "Sistema Respiratório", alt: "Mapa visual do sistema respiratório" },
  { src: mapaEsqueleto, label: "Sistema Esquelético", alt: "Mapa visual do sistema esquelético" },
  { src: mapa1, label: "Sistema Cardiovascular", alt: "Mapa visual do sistema cardiovascular" },
  { src: mapa2, label: "Sistema Muscular", alt: "Mapa visual do sistema muscular" },
  { src: mapa3, label: "Sistema Digestório", alt: "Mapa visual do sistema digestório" },
];

/** Composição de páginas sobrepostas com etiquetas de categoria. */
export function MapStack({
  className,
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  const [front, mid, back] = MAPS as [(typeof MAPS)[number], (typeof MAPS)[number], (typeof MAPS)[number], ...(typeof MAPS)[number][]];

  return (
    <div className={cn("relative mx-auto w-full max-w-[21rem] sm:max-w-[27rem]", className)}>
      {/* halo suave */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-10 rounded-[3rem] bg-[radial-gradient(60%_55%_at_50%_45%,var(--wine-soft),transparent_75%)]"
      />

      <div className="relative float-slow">
        {/* páginas de trás */}
        <div className="absolute -left-8 top-8 w-[76%] -rotate-[7deg] overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] sm:-left-12">
          <img
            src={back.src}
            alt=""
            width={800}
            height={1040}
            loading="lazy"
            className="w-full opacity-95"
          />
        </div>
        <div className="absolute -right-6 top-4 w-[70%] rotate-[6deg] overflow-hidden rounded-xl border border-border bg-card shadow-[var(--shadow-soft)] sm:-right-10">
          <img
            src={mid.src}
            alt=""
            width={800}
            height={1040}
            loading="lazy"
            className="w-full opacity-95"
          />
        </div>

        {/* página principal */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <span className="text-[0.6rem] font-bold tracking-[0.2em] text-muted-foreground">
              MAPA VISUAL
            </span>
            <span className="text-[0.6rem] font-bold tracking-[0.2em] text-primary">ANATOMIA</span>
          </div>
          <img
            src={front.src}
            alt={front.alt}
            width={800}
            height={1040}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : undefined}
            className="w-full"
          />
        </div>
      </div>

      {/* etiquetas */}
      <span className="absolute -left-2 bottom-16 rounded-full border border-border bg-card/95 px-3 py-1.5 text-[0.6rem] font-bold tracking-[0.14em] text-ink shadow-[var(--shadow-soft)] backdrop-blur sm:-left-8">
        CARDIOVASCULAR
      </span>
      <span className="absolute -right-2 top-24 rounded-full border border-border bg-card/95 px-3 py-1.5 text-[0.6rem] font-bold tracking-[0.14em] text-ink shadow-[var(--shadow-soft)] backdrop-blur sm:-right-8">
        NEUROANATOMIA
      </span>
      <span className="absolute -bottom-3 right-4 rounded-full bg-primary px-3.5 py-1.5 text-[0.6rem] font-bold tracking-[0.14em] text-primary-foreground shadow-[var(--shadow-card)]">
        200 MAPAS
      </span>
    </div>
  );
}
