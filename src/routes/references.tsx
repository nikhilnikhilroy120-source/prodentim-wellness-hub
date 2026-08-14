import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/PageLayout";
import { REFERENCES } from "@/config/site";

export const Route = createFileRoute("/references")({
  head: () => ({
    meta: [
      { title: "Scientific References | ProDentim" },
      { name: "description", content: "Scientific references cited in the ProDentim product material." },
      { property: "og:title", content: "Scientific References | ProDentim" },
      { property: "og:description", content: "Scientific references cited in the ProDentim product material." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/references" },
    ],
    links: [{ rel: "canonical", href: "/references" }],
  }),
  component: () => (
    <LegalPage
      title="Scientific References"
      intro="References supplied with the ProDentim product material. Citations are reproduced as provided."
    >
      <ol className="list-decimal space-y-3 pl-5">
        {REFERENCES.map((r) => (
          <li key={r.url}>
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-leaf underline underline-offset-4 hover:text-sage-deep"
            >
              {r.text}
            </a>
          </li>
        ))}
      </ol>
    </LegalPage>
  ),
});