import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, PhoneCall, ExternalLink } from "lucide-react";
import type { ReactNode } from "react";
import { LegalPage } from "@/components/site/PageLayout";
import { CONTACT } from "@/config/site";

const TITLE = "Contact & Support | NutriPulseLab";
const DESCRIPTION =
  "Official ProDentim product and order support: email, 24/7 toll-free phone, international phone and ClickBank order self service.";

function SupportCard({
  icon,
  label,
  value,
  href,
  external,
  meta,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  meta?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="surface-card group flex items-start gap-4 rounded-2xl border border-leaf/15 bg-white/80 p-5 no-underline shadow-[0_16px_38px_-28px_oklch(0.28_0.062_152_/_0.7)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-leaf/35"
    >
      <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-sage text-leaf">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-leaf/70">
          {label}
        </span>
        <span className="mt-1 block break-words text-lg font-semibold text-charcoal group-hover:text-leaf">
          {value}
        </span>
        {meta && <span className="mt-1 block text-sm text-muted-foreground">{meta}</span>}
      </span>
    </a>
  );
}

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <LegalPage
      title="Contact & Support"
      intro="We are an independent affiliate resource. Product support and order support are handled by the official vendor and retailer using the details below."
    >
      <section>
        <h2>Product Support</h2>
        <div className="not-prose mt-4 grid gap-4 sm:grid-cols-2">
          <SupportCard
            icon={<Mail size={20} />}
            label="Product email support"
            value={CONTACT.productEmail}
            href={`mailto:${CONTACT.productEmail}`}
          />
          <SupportCard
            icon={<ExternalLink size={20} />}
            label="Order self service"
            value="www.clkbank.com"
            href={CONTACT.orderSelfServiceUrl}
            external
            meta="Track, manage or refund your order"
          />
        </div>
      </section>

      <section>
        <h2>Order Support</h2>
        <div className="not-prose mt-4 grid gap-4 sm:grid-cols-2">
          <SupportCard
            icon={<PhoneCall size={20} />}
            label="Toll free — 24/7"
            value={CONTACT.orderPhoneTollFree}
            href={`tel:${CONTACT.orderPhoneTollFree.replace(/[^\d+]/g, "")}`}
            meta="Available 24 hours a day, 7 days a week"
          />
          <SupportCard
            icon={<Phone size={20} />}
            label="International"
            value={CONTACT.orderPhoneInternational}
            href={`tel:${CONTACT.orderPhoneInternational.replace(/[^\d+]/g, "")}`}
            meta="Standard international call rates apply"
          />
        </div>
        <p className="mt-6 rounded-2xl border border-leaf/15 bg-sage/60 px-5 py-4 text-sm leading-relaxed text-charcoal/80">
          * {CONTACT.note}
        </p>
      </section>

      <section>
        <h2>Website Enquiries</h2>
        <p>
          This website is operated by {CONTACT.companyName}. For questions about the content on this
          site, email{" "}
          <a
            href={`mailto:${CONTACT.productEmail}`}
            className="text-leaf underline underline-offset-4"
          >
            {CONTACT.productEmail}
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
