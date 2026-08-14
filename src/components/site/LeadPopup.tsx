import { useEffect, useState } from "react";
import { X, Sparkles } from "lucide-react";
import { PRODUCT_CHECKOUT_URL } from "@/config/site";
import { supabase } from "@/integrations/supabase/client";

const FLAG = "npl_lead_popup_seen";

/**
 * Non-intrusive lead capture popup. Shows once per browser session, on exit
 * intent (desktop) or after a short delay, and is always dismissible.
 */
export function LeadPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(FLAG)) return;

    const show = () => {
      if (sessionStorage.getItem(FLAG)) return;
      sessionStorage.setItem(FLAG, "1");
      setOpen(true);
    };
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };
    const timer = window.setTimeout(show, 25000);
    document.addEventListener("mouseout", onLeave);
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-popup-title"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/45 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-3xl border border-leaf/15 bg-gradient-to-b from-ivory to-cream p-7 text-center shadow-[0_40px_80px_-40px_oklch(0.28_0.062_152_/_0.9)]"
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close offer popup"
          className="absolute right-4 top-4 flex size-9 items-center justify-center rounded-full border border-leaf/20 bg-white/80 text-charcoal transition-colors hover:bg-sage"
        >
          <X size={18} />
        </button>

        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-sage text-leaf">
          <Sparkles size={22} />
        </span>

        {done ? (
          <>
            <h2 id="lead-popup-title" className="mt-4 text-2xl text-charcoal">
              You're on the list!
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Your discount is waiting on the official checkout page.
            </p>
            <a
              href={PRODUCT_CHECKOUT_URL}
              target="_blank"
              rel="nofollow sponsored noopener noreferrer"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-b from-[oklch(0.46_0.1_150)] to-leaf px-6 text-[0.78rem] font-semibold uppercase tracking-wide text-primary-foreground"
            >
              Claim Discount
            </a>
          </>
        ) : (
          <>
            <h2 id="lead-popup-title" className="mt-4 text-2xl leading-snug text-charcoal">
              Get Exclusive Dental Care Tips &amp; Special Discounts!
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Enter your email below or skip to continue browsing.
            </p>
            <form
              className="mt-5 space-y-3"
              onSubmit={async (e) => {
                e.preventDefault();
                setError(null);
                setSaving(true);
                const { error: insertError } = await supabase
                  .from("leads")
                  .insert({ email: email.trim().toLowerCase(), source: "lead_popup" });
                setSaving(false);
                if (insertError) {
                  setError("Something went wrong. Please try again.");
                  return;
                }
                setDone(true);
              }}
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                aria-label="Email address"
                className="min-h-12 w-full rounded-full border border-leaf/20 bg-white/85 px-5 text-sm text-charcoal outline-none placeholder:text-muted-foreground focus-visible:border-leaf"
              />
              <button
                type="submit"
                disabled={saving}
                className="min-h-12 w-full rounded-full bg-gradient-to-b from-[oklch(0.46_0.1_150)] to-leaf px-6 text-[0.78rem] font-semibold uppercase tracking-wide text-primary-foreground transition-all hover:-translate-y-0.5 disabled:opacity-60"
              >
                {saving ? "Saving…" : "Claim Discount"}
              </button>
              {error ? (
                <p className="text-xs text-destructive" role="alert">
                  {error}
                </p>
              ) : null}
            </form>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="mt-4 text-sm text-muted-foreground underline underline-offset-4 hover:text-leaf"
            >
              No thanks, continue to website
            </button>
          </>
        )}
      </div>
    </div>
  );
}
