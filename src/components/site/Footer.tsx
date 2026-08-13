import { Link } from "@tanstack/react-router";
import { BRAND, LEGAL_LINKS, NAV_LINKS } from "@/config/site";
import { Logo } from "./Logo";
import { PaymentBadges } from "./PaymentBadges";
import { Lock, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-leaf to-leaf-deep text-primary-foreground">
      <div className="container-x grid gap-10 py-16 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/">
            <Logo tone="light" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/75">
            {BRAND.name} — advanced oral probiotics. A unique blend of 3.5 billion probiotic strains and
            nutrients designed to support the health of your teeth and gums.
          </p>
          <p className="mt-6 text-xs leading-relaxed text-primary-foreground/60">
            This website contains affiliate links. If you purchase through one of our links,
            we may receive a commission at no additional cost to you.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-sm font-semibold text-primary-foreground">Explore</h2>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <h2 className="text-sm font-semibold text-primary-foreground">Legal</h2>
          <ul className="mt-4 space-y-2.5">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-x flex flex-col items-center gap-5 py-7 sm:flex-row sm:justify-between">
          <div className="rounded-2xl bg-primary-foreground/95 px-5 py-3">
            <PaymentBadges label={false} />
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-primary-foreground/75">
            <li className="flex items-center gap-2">
              <Lock size={14} /> SSL Secure Checkout
            </li>
            <li className="flex items-center gap-2">
              <ShieldCheck size={14} /> 60-Day Money-Back Guarantee
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-x flex flex-col gap-3 py-6 text-xs leading-relaxed text-primary-foreground/60">
          <p>
            Statements on this website have not been evaluated by the Food and Drug
            Administration. Products are not intended to diagnose, treat, cure or prevent any
            disease.
          </p>
          <p>© {new Date().getFullYear()} {BRAND.name} ({BRAND.domain}). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}