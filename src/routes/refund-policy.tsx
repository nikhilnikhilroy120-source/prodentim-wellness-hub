import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageLayout";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy | ProDentim" },
      { name: "description", content: "ProDentim orders are covered by a 60-day 100% money-back guarantee." },
      { property: "og:title", content: "Refund Policy | ProDentim" },
      { property: "og:description", content: "ProDentim orders are covered by a 60-day 100% money-back guarantee." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: () => (
    <LegalPage title="Refund Policy">
      <section>
        <h2>60-Day Money-Back Guarantee</h2>
        <p>
          Your order today is covered by our iron-clad 60-day 100% money-back guarantee.
        </p>
        <p>
          If you are not impressed by the transformation of your gums and teeth or you don’t
          admire your Hollywood-star smile, then at any time in the next 60 days write to us and
          we’ll refund every single cent.
        </p>
      </section>
      <section>
        <h2>How To Request A Refund</h2>
        <p>
          Refunds are processed by the vendor and its payment processor. For order and refund
          support, contact ClickBank, the retailer of this product. For product questions,
          contact the vendor: [ADD VENDOR SUPPORT CONTACT].
        </p>
      </section>
    </LegalPage>
  ),
});