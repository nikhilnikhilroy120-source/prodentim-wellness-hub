import { Link } from "@tanstack/react-router";
import { LEGAL_LINKS, NAV_LINKS } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-cream">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-leaf text-[0.7rem] font-bold text-primary-foreground">
              Pd
            </span>
            <span className="font-display text-xl text-charcoal">ProDentim</span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Advanced oral probiotics — a unique blend of 3.5 billion probiotic strains and
            nutrients designed to support the health of your teeth and gums.
          </p>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            This website contains affiliate links. If you purchase through one of our links,
            we may receive a commission at no additional cost to you.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-charcoal">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-leaf"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="text-sm font-semibold text-charcoal">Legal</h2>
          <ul className="mt-4 space-y-2.5">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-leaf"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-border/70">
        <div className="container-x flex flex-col gap-3 py-6 text-xs leading-relaxed text-muted-foreground">
          <p>
            Statements on this website have not been evaluated by the Food and Drug
            Administration. Products are not intended to diagnose, treat, cure or prevent any
            disease.
          </p>
          <p>© {new Date().getFullYear()} ProDentim affiliate resource. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}