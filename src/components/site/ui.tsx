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
      rel="nofollow sponsored noopener noreferrer"
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
    ivory: "bg-gradient-to-b from-ivory via-cream to-ivory light-wash",
    cream: "bg-gradient-to-b from-cream via-ivory to-sage/45 light-wash",
    sage: "bg-gradient-to-b from-sage via-sage-mid/70 to-ivory",
    white: "bg-gradient-to-b from-ivory via-cream to-sage/35",
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
      <LeafEdge />
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
        "pointer-events-none absolute inset-0 h-full w-full text-leaf-deep opacity-[0.16] blur-[2px]",
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

/**
 * A single botanical leaf: asymmetric pointed blade, curved midrib and
 * lateral veins so it reads as a real leaf rather than a flat shape.
 */
function Leaf({
  x,
  y,
  rotate,
  scale = 1,
  opacity = 1,
  fill = "url(#leafFill)",
}: {
  x: number;
  y: number;
  rotate: number;
  scale?: number;
  opacity?: number;
  fill?: string;
}) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`} opacity={opacity}>
      {/* blade — slight downward curve at the tip, wider near the base */}
      <path
        d="M0 2C34 -40 96 -50 152 -14C112 34 44 44 0 2Z"
        fill={fill}
      />
      {/* darker underside for depth */}
      <path
        d="M0 2C40 26 106 26 152 -14C112 34 44 44 0 2Z"
        fill="var(--leaf-deep)"
        fillOpacity="0.28"
      />
      {/* midrib */}
      <path
        d="M2 2C50 -8 108 -12 152 -14"
        stroke="var(--ivory)"
        strokeWidth="1.8"
        strokeOpacity="0.5"
        fill="none"
        strokeLinecap="round"
      />
      {/* lateral veins */}
      <g stroke="var(--ivory)" strokeOpacity="0.28" strokeWidth="1.1" fill="none">
        <path d="M26 -1C36 -14 50 -24 66 -29" />
        <path d="M52 -5C62 -18 78 -27 96 -31" />
        <path d="M80 -8C90 -20 106 -27 122 -30" />
        <path d="M26 -1C34 8 48 18 62 22" />
        <path d="M54 -5C62 6 76 15 92 18" />
        <path d="M82 -8C90 2 104 9 118 11" />
      </g>
    </g>
  );
}

function Branch({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 340 620"
      className={cn("pointer-events-none absolute text-leaf", className)}
    >
      <defs>
        <linearGradient id="leafFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--sage-deep)" />
          <stop offset="55%" stopColor="var(--leaf)" />
          <stop offset="100%" stopColor="var(--leaf-deep)" />
        </linearGradient>
      </defs>
      {/* main stem */}
      <path
        d="M18 -10C58 130 92 300 100 620"
        stroke="var(--leaf-deep)"
        strokeWidth="4"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
      />
      {/* petioles */}
      <g stroke="var(--leaf-deep)" strokeWidth="2.4" fill="none" opacity="0.55">
        <path d="M42 74C58 62 74 56 92 54" />
        <path d="M60 204C74 198 90 196 108 198" />
        <path d="M80 344C96 344 112 348 128 356" />
        <path d="M88 474C102 470 116 470 130 474" />
      </g>
      <Leaf x={40} y={74} rotate={-24} scale={0.8} opacity={0.9} />
      <Leaf x={44} y={78} rotate={202} scale={0.52} opacity={0.55} />
      <Leaf x={58} y={204} rotate={-8} scale={0.95} opacity={0.85} />
      <Leaf x={62} y={212} rotate={186} scale={0.5} opacity={0.5} />
      <Leaf x={78} y={344} rotate={18} scale={0.88} opacity={0.8} />
      <Leaf x={86} y={474} rotate={-14} scale={0.66} opacity={0.7} />
      <Leaf x={94} y={566} rotate={28} scale={0.5} opacity={0.6} />
    </svg>
  );
}

/**
 * Layered foliage anchored to the left and right edges of a section. Two
 * depth planes (blurred + crisp) so the leaves read as environment rather
 * than stickers.
 */
export function LeafEdge({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0", className)}>
      {/* far plane — soft, out of focus */}
      <Branch className="-left-28 top-[-10%] h-[86%] opacity-[0.22] blur-[6px] sm:-left-20" />
      <Branch className="-right-28 bottom-[-10%] h-[86%] -scale-x-100 opacity-[0.22] blur-[6px] sm:-right-20" />
      {/* mid plane */}
      <Branch className="-left-16 top-[4%] h-[58%] opacity-[0.3] blur-[2px]" />
      <Branch className="-right-14 bottom-[2%] h-[54%] -scale-x-100 opacity-[0.3] blur-[2px]" />
      {/* near plane — crisp foliage catching the light */}
      <Branch className="-left-6 top-[16%] h-[34%] rotate-[8deg] opacity-[0.42] drop-shadow-[0_18px_24px_rgba(14,63,36,0.18)]" />
      <Branch className="-right-4 bottom-[14%] h-[30%] -rotate-[8deg] -scale-x-100 opacity-[0.42] drop-shadow-[0_18px_24px_rgba(14,63,36,0.18)]" />
    </div>
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
/** Wraps a product visual so the whole image links to the affiliate checkout. */
export function BuyImageLink({
  children,
  className,
  label = "Order ProDentim now",
}: {
  children: ReactNode;
  className?: string;
  label?: string;
}) {
  return (
    <a
      href={PRODUCT_CHECKOUT_URL}
      target="_blank"
      rel="nofollow sponsored noopener noreferrer"
      aria-label={label}
      className={cn("block transition-transform duration-300 hover:scale-[1.02]", className)}
    >
      {children}
    </a>
  );
}

/** Floating mobile-only checkout bar. */
export function StickyCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-leaf-deep/40 bg-gradient-to-b from-leaf to-leaf-deep p-3 shadow-[0_-14px_30px_-20px_rgba(0,0,0,0.7)] lg:hidden">
      <a
        href={PRODUCT_CHECKOUT_URL}
        target="_blank"
        rel="nofollow sponsored noopener noreferrer"
        className="flex min-h-12 w-full items-center justify-center rounded-full bg-gold px-5 text-center text-[0.72rem] font-bold uppercase tracking-wide text-charcoal shadow-lg"
      >
        Claim ProDentim Discount + Free Shipping
      </a>
    </div>
  );
}
