import { useEffect, useState } from "react";
import { Activity } from "lucide-react";
import { PRODUCT } from "@/lib/landing-config";
import { cn } from "@/lib/utils";

const links = [
  { href: "#conteudo", label: "Conteúdo" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/85 backdrop-blur-md shadow-[0_1px_0_oklch(0.3_0.03_30/0.04)]"
          : "border-transparent bg-background/60 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5">
        <a href="#topo" className="flex min-w-0 items-center gap-2.5">
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Activity className="size-4" strokeWidth={2.2} />
          </span>
          <span className="truncate text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-ink">
            Mapas <span className="text-primary">de Anatomia</span>
          </span>
        </a>

        <nav className="flex items-center gap-7">
          <ul className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#oferta"
            className="shrink-0 rounded-full bg-primary px-4 py-2.5 text-[0.68rem] font-extrabold tracking-[0.1em] text-primary-foreground transition-all hover:bg-wine-deep active:scale-[0.97]"
          >
            ACESSAR AGORA
          </a>
        </nav>
      </div>
      <span className="sr-only">{PRODUCT.name}</span>
    </header>
  );
}
