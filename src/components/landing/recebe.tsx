import { Layers, FolderTree, Smartphone, BookOpen } from "lucide-react";
import { Reveal } from "./reveal";
import { MapStack } from "./map-stack";
import { PRODUCT } from "@/lib/landing-config";

const beneficios = [
  {
    icon: Layers,
    title: "200 Mapas Visuais",
    text: "Conteúdos de Anatomia apresentados de maneira visual e organizada.",
  },
  {
    icon: FolderTree,
    title: "Organizados por temas",
    text: "Encontre rapidamente o assunto que deseja consultar ou revisar.",
  },
  {
    icon: Smartphone,
    title: "Material digital",
    text: "Utilize pelo celular, tablet ou computador.",
  },
  {
    icon: BookOpen,
    title: "Consulta e revisão",
    text: "Use os mapas como apoio durante os estudos e antes das avaliações.",
  },
];

export function Recebe() {
  return (
    <section className="px-5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <MapStack />
        </Reveal>

        <Reveal delay={80} className="order-1 lg:order-2">
          <h2 className="text-2xl font-bold leading-snug tracking-tight text-ink sm:text-[2rem]">
            Uma biblioteca visual de Anatomia sempre à mão.
          </h2>

          <ul className="mt-10 space-y-7">
            {beneficios.map(({ icon: Icon, title, text }) => (
              <li key={title} className="flex gap-4">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-primary shadow-[var(--shadow-soft)]">
                  <Icon className="size-[18px]" strokeWidth={1.7} />
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-ink">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-xs leading-relaxed text-muted-foreground/80">
            {PRODUCT.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
