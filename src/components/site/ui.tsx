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
    "bg-leaf text-primary-foreground shadow-[0_10px_28px_-12px_oklch(0.42_0.096_150_/_0.7)] hover:bg-sage-deep hover:-translate-y-0.5",
  outline:
    "border border-leaf/30 text-leaf hover:bg-sage hover:-translate-y-0.5 bg-transparent",
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
    ivory: "bg-ivory",
    cream: "bg-cream",
    sage: "bg-sage/60",
    white: "bg-white",
    leaf: "bg-leaf text-primary-foreground",
  } as const;
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 py-20 sm:py-28", tones[tone], className)}
    >
      <div className="container-x">{children}</div>
    </section>
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