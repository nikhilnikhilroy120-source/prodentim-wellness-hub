import { Link } from "@tanstack/react-router";
import { Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/config/site";
import { BuyButton } from "./ui";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <div className="bg-leaf-deep text-primary-foreground">
      <div className="container-x flex items-center justify-center gap-2 py-2 text-center text-[0.68rem] font-semibold uppercase tracking-[0.16em] sm:text-xs">
        <Zap size={13} className="shrink-0" />
        <span>Brand New Probiotics – Specially Designed For Oral Health</span>
      </div>
    </div>
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/60 backdrop-blur-md transition-all duration-300",
        scrolled
          ? "bg-cream/90 py-2 shadow-[0_10px_30px_-24px_rgba(14,63,36,0.8)]"
          : "bg-cream/70 py-4",
      )}
    >
      <div className="container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:flex lg:justify-between">
        <Link to="/" className="min-w-0">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-leaf"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <BuyButton className="px-6 text-[0.7rem]">Buy Now</BuyButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-border text-charcoal lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="container-x lg:hidden">
          <nav
            className="mt-3 flex flex-col gap-1 rounded-2xl border border-border bg-cream p-3 shadow-sm"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-charcoal transition-colors hover:bg-sage/60"
              >
                {l.label}
              </a>
            ))}
            <BuyButton className="mt-2 w-full">Buy Now</BuyButton>
          </nav>
        </div>
      )}
    </header>
    </>
  );
}