import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageLayout";
import { SHIPPING_POLICY_REFERENCE_URL } from "@/config/site";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({
    meta: [
      { title: "Shipping Policy | ProDentim" },
      { name: "description", content: "Shipping information for ProDentim orders, including free shipping on 6-bottle packages." },
      { property: "og:title", content: "Shipping Policy | ProDentim" },
      { property: "og:description", content: "Shipping information for ProDentim orders, including free shipping on 6-bottle packages." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/shipping-policy" },
    ],
    links: [{ rel: "canonical", href: "/shipping-policy" }],
  }),
  component: () => (
    <LegalPage
      title="Shipping Policy"
      intro="Orders are fulfilled by the product vendor. The details below reflect the information supplied with the product offer."
    >
      <section>
        <h2>Shipping Costs</h2>
        <ul>
          <li>2 bottles (60 day supply): + $9.99 shipping.</li>
          <li>2 + 1 bottles (90 day supply): free shipping.</li>
          <li>3 + 3 bottles (180 day supply): free shipping.</li>
        </ul>
      </section>
      <section>
        <h2>International Orders</h2>
        <p>
          For international shipping (outside of the United States), shipping fees will apply.
        </p>
      </section>
      <section>
        <h2>Delivery Times</h2>
        <p>
          Delivery times are set by the vendor and its fulfilment partner. Please refer to the
          confirmation email you receive after ordering: [ADD DELIVERY TIME INFORMATION].
        </p>
      </section>
      <section>
        <h2>Official Shipping Reference</h2>
        <p>
          {SHIPPING_POLICY_REFERENCE_URL ? (
            <a
              href={SHIPPING_POLICY_REFERENCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-leaf underline underline-offset-4"
            >
              View the vendor's shipping policy
            </a>
          ) : (
            "[ADD OFFICIAL SHIPPING POLICY URL]"
          )}
        </p>
      </section>
    </LegalPage>
  ),
});