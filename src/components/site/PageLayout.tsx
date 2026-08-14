import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Botanical, LeafEdge } from "./ui";

export function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-ivory light-wash">
      <Header />
      <main>
        <div className="relative overflow-hidden border-b border-border bg-gradient-to-b from-sage via-sage-mid/60 to-cream organic-grain">
          <Botanical />
          <LeafEdge />
          <div className="container-x relative py-14 sm:py-20">
            <Link to="/" className="text-sm font-medium text-leaf hover:underline">
              ← Back to home
            </Link>
            <h1 className="mt-4 text-4xl text-charcoal sm:text-5xl">{title}</h1>
            {intro && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {intro}
              </p>
            )}
          </div>
        </div>
        <div className="relative overflow-hidden bg-gradient-to-b from-cream via-ivory to-sage/40 organic-grain">
          <LeafEdge className="opacity-70" />
          <div className="container-x relative max-w-3xl py-14 sm:py-20">
            <div className="space-y-8 text-[0.98rem] leading-relaxed text-muted-foreground [&_h2]:text-2xl [&_h2]:text-charcoal [&_li]:mb-2 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
              {children}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}