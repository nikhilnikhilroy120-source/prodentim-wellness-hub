import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageLayout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | ProDentim" },
      { name: "description", content: "How this ProDentim affiliate website handles visitor information." },
      { property: "og:title", content: "Privacy Policy | ProDentim" },
      { property: "og:description", content: "How this ProDentim affiliate website handles visitor information." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      intro="This policy describes how information is handled on this website. Update it to match the tools you actually run."
    >
      <section>
        <h2>Information We Collect</h2>
        <p>
          This website does not ask you to create an account and does not collect payment
          information. We do not operate a checkout — purchases are completed on the vendor's
          own secure order page.
        </p>
      </section>
      <section>
        <h2>Analytics</h2>
        <p>
          If website analytics are enabled, standard, non-identifying technical data such as
          page views, referring page and general device type may be recorded. [ADD ANALYTICS
          PROVIDER OR STATE "NONE"].
        </p>
      </section>
      <section>
        <h2>Affiliate Links And Cookies</h2>
        <p>
          Purchase links on this site are affiliate links. When you follow one, the vendor's
          affiliate network may set a cookie to attribute the referral. That process is
          controlled by the network, not by this website.
        </p>
      </section>
      <section>
        <h2>Third Parties</h2>
        <p>
          Embedded review videos are only loaded after you click play. Once loaded, the video
          provider may set its own cookies under its own privacy policy.
        </p>
      </section>
      <section>
        <h2>Your Choices</h2>
        <p>
          You can block or delete cookies in your browser settings at any time. To ask a
          question about this policy, contact [ADD SUPPORT EMAIL].
        </p>
      </section>
    </LegalPage>
  ),
});