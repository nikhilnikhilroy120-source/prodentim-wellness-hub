import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms Of Use | ProDentim" },
      { name: "description", content: "Terms governing the use of this ProDentim information and affiliate website." },
      { property: "og:title", content: "Terms Of Use | ProDentim" },
      { property: "og:description", content: "Terms governing the use of this ProDentim information and affiliate website." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <LegalPage
      title="Terms Of Use"
      intro="Please read these terms carefully before using this website. Wording below is editable and should be reviewed by your own legal advisor."
    >
      <section>
        <h2>Website Usage</h2>
        <p>
          By accessing this website you agree to use it for lawful, personal and informational
          purposes only. You agree not to interfere with the operation or security of the site.
        </p>
      </section>
      <section>
        <h2>Affiliate Links</h2>
        <p>
          This website contains affiliate links. If you purchase through one of our links, we
          may receive a commission at no additional cost to you. We are not the manufacturer or
          the seller of the products presented here.
        </p>
      </section>
      <section>
        <h2>Content Disclaimer</h2>
        <p>
          Product information on this website is based on material supplied by the product
          vendor. Statements have not been evaluated by the Food and Drug Administration.
          Products are not intended to diagnose, treat, cure or prevent any disease.
        </p>
      </section>
      <section>
        <h2>Third-Party Websites</h2>
        <p>
          Links to third-party websites, including the official order page, are provided for
          convenience. We do not control and are not responsible for the content, policies or
          practices of those websites.
        </p>
      </section>
      <section>
        <h2>Limitation Of Liability</h2>
        <p>
          To the maximum extent permitted by law, this website and its operators are not liable
          for any direct, indirect or consequential loss arising from the use of this site or
          reliance on its content.
        </p>
      </section>
      <section>
        <h2>Intellectual Property</h2>
        <p>
          Product names, images and trademarks referenced on this site remain the property of
          their respective owners. Site layout and original written content may not be
          reproduced without permission.
        </p>
      </section>
      <section>
        <h2>General Terms</h2>
        <p>
          These terms may be updated at any time. Continued use of the website after changes
          are published constitutes acceptance of the updated terms. Operator: [ADD LEGAL
          ENTITY]. Contact: [ADD SUPPORT EMAIL].
        </p>
      </section>
    </LegalPage>
  ),
});