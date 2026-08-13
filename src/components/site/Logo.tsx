import { cn } from "@/lib/utils";
import { BRAND } from "@/config/site";

/** Modern health-tech mark: a pulse line inside a rounded hex. */
export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span className={cn("flex min-w-0 items-center gap-2.5", className)}>
      <span
        className={cn(
          "grid h-9 w-9 shrink-0 place-items-center rounded-xl shadow-[0_10px_20px_-14px_rgba(14,63,36,0.9)]",
          tone === "dark" ? "bg-gradient-to-br from-leaf to-leaf-deep" : "bg-primary-foreground/15 ring-1 ring-primary-foreground/25",
        )}
      >
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M2 13h4l2-5 3 9 2.5-6 1.8 2h6.7"
            stroke="currentColor"
            className="text-primary-foreground"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span
        className={cn(
          "truncate font-display text-xl tracking-tight",
          tone === "dark" ? "text-charcoal" : "text-primary-foreground",
        )}
      >
        {BRAND.name}
      </span>
    </span>
  );
}
