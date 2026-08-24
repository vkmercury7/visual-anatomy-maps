import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

const faq = [
  { q: "O material é físico?", a: "Não. Os 200 Mapas Visuais são um produto digital." },
  {
    q: "Posso acessar pelo celular?",
    a: "Sim. O material pode ser visualizado pelo celular, tablet ou computador.",
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

export function FaqSection() {
  return (
    <section id="faq" className="px-5 py-20">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <h2 className="text-center text-2xl font-bold tracking-tight text-ink sm:text-[1.9rem]">
            Perguntas frequentes
          </h2>
        </Reveal>
        <Reveal delay={60}>
          <Accordion type="single" collapsible className="mt-8">
            {faq.map(({ q, a }) => (
              <AccordionItem key={q} value={q} className="border-border">
                <AccordionTrigger className="text-left text-sm font-bold text-ink hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
