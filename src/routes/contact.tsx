import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageLayout";
import { CONTACT } from "@/config/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | ProDentim" },
      { name: "description", content: "How to reach product support and order support for ProDentim." },
      { property: "og:title", content: "Contact | ProDentim" },
      { property: "og:description", content: "How to reach product support and order support for ProDentim." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: () => (
    <LegalPage
      title="Contact"
      intro="We are an independent affiliate resource. Support for orders and the product itself is handled by the vendor and the retailer."
    >
      <section>
        <h2>Product Support</h2>
        <p>
          For Product Support, please contact the vendor: {CONTACT.vendorSupportUrl}
        </p>
      </section>
      <section>
        <h2>Order Support</h2>
        <p>
          For Order Support, please contact ClickBank:{" "}
          <a
            href={CONTACT.clickbankSupportUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-leaf underline underline-offset-4"
          >
            {CONTACT.clickbankSupportUrl}
          </a>
        </p>
      </section>
      <section>
        <h2>Website Enquiries</h2>
        <ul>
          <li>Operator: {CONTACT.companyName}</li>
          <li>Email: {CONTACT.supportEmail}</li>
          <li>Address: {CONTACT.address}</li>
        </ul>
        <p>
          These details are editable placeholders and should be replaced with your real contact
          information before publishing.
        </p>
      </section>
    </LegalPage>
  ),
});