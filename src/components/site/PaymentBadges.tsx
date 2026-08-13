import { cn } from "@/lib/utils";

function Badge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "grid h-7 w-11 place-items-center rounded-[0.35rem] border border-black/10 bg-white shadow-[0_2px_6px_-3px_rgba(0,0,0,0.5)]",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Accepted payment provider marks. Decorative, drawn as inline SVG for sharpness. */
export function PaymentBadges({ className, label = true }: { className?: string; label?: boolean }) {
  return (
    <div className={cn("flex flex-col items-center gap-2", className)}>
      {label && (
        <p className="text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          Secure Accepted Payments
        </p>
      )}
      <ul className="flex flex-wrap items-center justify-center gap-1.5" aria-label="Accepted payment methods">
        <li>
          <Badge>
            <svg viewBox="0 0 48 16" className="h-3.5 w-9" role="img" aria-label="Visa">
              <text x="24" y="13" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="14" fontStyle="italic" fontWeight="700" fill="#1A1F71">VISA</text>
            </svg>
          </Badge>
        </li>
        <li>
          <Badge>
            <svg viewBox="0 0 40 24" className="h-5 w-8" role="img" aria-label="Mastercard">
              <circle cx="16" cy="12" r="8" fill="#EB001B" />
              <circle cx="24" cy="12" r="8" fill="#F79E1B" fillOpacity="0.9" />
            </svg>
          </Badge>
        </li>
        <li>
          <Badge className="bg-[#2E77BC]">
            <svg viewBox="0 0 60 16" className="h-3 w-10" role="img" aria-label="American Express">
              <text x="30" y="12" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" fill="#fff">AMEX</text>
            </svg>
          </Badge>
        </li>
        <li>
          <Badge>
            <svg viewBox="0 0 64 16" className="h-3 w-10" role="img" aria-label="Discover">
              <text x="2" y="12" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="700" fill="#231F20">DISC</text>
              <circle cx="52" cy="8" r="6" fill="#F76B1C" />
            </svg>
          </Badge>
        </li>
        <li>
          <Badge>
            <svg viewBox="0 0 64 16" className="h-3 w-10" role="img" aria-label="PayPal">
              <text x="2" y="12" fontFamily="Arial, sans-serif" fontSize="11" fontStyle="italic" fontWeight="700" fill="#003087">Pay</text>
              <text x="28" y="12" fontFamily="Arial, sans-serif" fontSize="11" fontStyle="italic" fontWeight="700" fill="#009CDE">Pal</text>
            </svg>
          </Badge>
        </li>
      </ul>
    </div>
  );
}
