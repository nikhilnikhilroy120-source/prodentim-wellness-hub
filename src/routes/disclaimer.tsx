import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageLayout";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | ProDentim" },
      { name: "description", content: "Health and content disclaimer for this ProDentim information website." },
      { property: "og:title", content: "Disclaimer | ProDentim" },
      { property: "og:description", content: "Health and content disclaimer for this ProDentim information website." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: () => (
    <LegalPage title="Disclaimer">
      <section>
        <h2>FDA Statement</h2>
        <p>
          Statements on this website have not been evaluated by the Food and Drug
          Administration. Products are not intended to diagnose, treat, cure or prevent any
          disease.
        </p>
      </section>
      <section>
        <h2>Not Medical Advice</h2>
        <p>
          The information provided is not intended to replace consultation with a qualified
          medical professional.
        </p>
      </section>
      <section>
        <h2>Before You Use This Product</h2>
        <p>
          If you are pregnant, nursing, taking medication, or have a medical condition, consult
          your physician before using our products.
        </p>
      </section>
      <section>
        <h2>Results</h2>
        <p>
          Individual experiences vary. Testimonials shown on this website reflect the
          experiences of the individuals quoted and are supplied by the product vendor.
        </p>
      </section>
    </LegalPage>
  ),
});