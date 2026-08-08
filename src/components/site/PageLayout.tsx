import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Header } from "./Header";
import { Footer } from "./Footer";

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
    <div className="min-h-screen bg-ivory light-wash">
      <Header />
      <main>
        <div className="border-b border-border bg-gradient-to-b from-sage/50 to-cream">
          <div className="container-x py-14 sm:py-20">
            <Link to="/" className="text-sm font-medium text-leaf hover:underline">
              ← Back to ProDentim
            </Link>
            <h1 className="mt-4 text-4xl text-charcoal sm:text-5xl">{title}</h1>
            {intro && (
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                {intro}
              </p>
            )}
          </div>
        </div>
        <div className="container-x max-w-3xl py-14 sm:py-20">
          <div className="space-y-8 text-[0.98rem] leading-relaxed text-muted-foreground [&_h2]:text-2xl [&_h2]:text-charcoal [&_li]:mb-2 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}