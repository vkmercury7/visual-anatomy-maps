import { useEffect, useState } from "react";
import { PRODUCT } from "@/lib/landing-config";
import { cn } from "@/lib/utils";

/** Barra fixa no mobile: aparece após o hero e some na seção de oferta. */
export function MobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const oferta = document.getElementById("oferta");
      const pastHero = window.scrollY > window.innerHeight * 0.85;
      const atOffer = oferta ? oferta.getBoundingClientRect().top < window.innerHeight * 0.9 : false;
      setVisible(pastHero && !atOffer);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md transition-all duration-300 md:hidden",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-full opacity-0",
      )}
    >
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-ink">
            {PRODUCT.shortName} • <span className="text-primary">{PRODUCT.price}</span>
          </p>
          <p className="truncate text-[0.65rem] text-muted-foreground">{PRODUCT.format}</p>
        </div>
        <a
          href="#oferta"
          className="shrink-0 rounded-xl bg-primary px-6 py-3 text-xs font-extrabold tracking-[0.1em] text-primary-foreground active:scale-[0.97]"
        >
          ACESSAR
        </a>
      </div>
    </div>
  );
}
