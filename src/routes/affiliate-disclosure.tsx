import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageLayout";

export const Route = createFileRoute("/affiliate-disclosure")({
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure | ProDentim" },
      { name: "description", content: "How this ProDentim website earns commissions from affiliate links." },
      { property: "og:title", content: "Affiliate Disclosure | ProDentim" },
      { property: "og:description", content: "How this ProDentim website earns commissions from affiliate links." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/affiliate-disclosure" },
    ],
    links: [{ rel: "canonical", href: "/affiliate-disclosure" }],
  }),
  component: () => (
    <LegalPage title="Affiliate Disclosure">
      <section>
        <p>
          This website contains affiliate links. If you purchase through one of our links, we
          may receive a commission at no additional cost to you.
        </p>
        <p>
          We are an independent affiliate and not the manufacturer or retailer of the products
          presented here. Prices, packages, bonuses and guarantee terms are set by the vendor
          and are shown on the official order page at the time of purchase.
        </p>
        <p>
          Product claims on this website reflect information supplied by the vendor. Statements
          have not been evaluated by the Food and Drug Administration. Products are not
          intended to diagnose, treat, cure or prevent any disease.
        </p>
      </section>
    </LegalPage>
  ),
});