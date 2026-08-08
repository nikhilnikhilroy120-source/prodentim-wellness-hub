import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { PRODUCT_CHECKOUT_URL } from "@/config/site";
import { cn } from "@/lib/utils";

type Tone = "primary" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide uppercase text-[0.78rem] min-h-12 px-7 transition-all duration-300 focus-visible:outline-2";

const tones: Record<Tone, string> = {
  primary:
    "bg-gradient-to-b from-[oklch(0.46_0.1_150)] to-leaf text-primary-foreground shadow-[0_14px_30px_-14px_oklch(0.28_0.062_152_/_0.85)] hover:from-leaf hover:to-[oklch(0.34_0.09_150)] hover:-translate-y-0.5 hover:shadow-[0_18px_38px_-16px_oklch(0.28_0.062_152_/_0.9)]",
  outline:
    "border border-leaf/25 bg-white/70 text-leaf backdrop-blur-sm hover:bg-sage hover:-translate-y-0.5 hover:border-leaf/45",
  ghost: "text-leaf hover:text-sage-deep",
};

export function BuyButton({
  children,
  tone = "primary",
  className,
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <a
      href={PRODUCT_CHECKOUT_URL}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={cn(base, tones[tone], className)}
    >
      {children}
    </a>
  );
}

export function AnchorButton({
  to,
  children,
  tone = "outline",
  className,
}: {
  to: string;
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const isHash = to.startsWith("#") || to.startsWith("/#");
  if (isHash) {
    return (
      <a href={to} className={cn(base, tones[tone], className)}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={cn(base, tones[tone], className)}>
      {children}
    </Link>
  );
}

export function Section({
  id,
  children,
  tone = "ivory",
  className,
}: {
  id?: string;
  children: ReactNode;
  tone?: "ivory" | "cream" | "sage" | "white" | "leaf";
  className?: string;
}) {
  const tones = {
    ivory: "bg-ivory light-wash",
    cream: "bg-cream light-wash",
    sage: "bg-gradient-to-b from-sage/70 via-sage/40 to-ivory",
    white: "bg-gradient-to-b from-white via-ivory/70 to-white",
    leaf: "bg-leaf text-primary-foreground",
  } as const;
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 overflow-hidden py-20 sm:py-28 organic-grain",
        tones[tone],
        className,
      )}
    >
      <Botanical />
      <div className="container-x relative">{children}</div>
    </section>
  );
}

/**
 * Extremely subtle blurred leaf silhouettes used to give sections a natural,
 * photographic atmosphere. Purely decorative.
 */
export function Botanical({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full text-sage-deep opacity-[0.13] blur-[2px]",
        className,
      )}
    >
      <g fill="currentColor">
        <path d="M-40 60c120-70 250-40 300 40 45 72 8 150-70 168-92 21-186-38-230-208z" opacity="0.55" />
        <path d="M1240 540c-130 60-260 22-300-62-36-76 10-150 90-160 94-12 180 56 210 222z" opacity="0.5" />
        <path d="M980 -30c70 60 90 150 44 214-42 58-118 60-158 4-46-64-24-160 114-218z" opacity="0.4" />
        <path d="M120 620c-60-62-70-152-20-212 46-54 122-50 158 8 42 68 12 162-138 204z" opacity="0.35" />
      </g>
    </svg>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow mb-4">{children}</p>;
}

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("reveal", className)}
      data-visible={visible ? "true" : "false"}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}