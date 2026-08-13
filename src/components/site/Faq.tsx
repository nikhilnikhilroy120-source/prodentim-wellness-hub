import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import type { ReactNode } from "react";
import { CONTACT, SHIPPING_TABLE } from "@/config/site";

export const FAQ_ITEMS: { q: string; a: ReactNode }[] = [
  {
    q: "How and why does ProDentim work?",
    a: "ProDentim combines 3.5 billion probiotic strains with a proprietary blend of plants and minerals. It is designed to repopulate your mouth with good bacteria and support the everyday health of your teeth and gums.",
  },
  {
    q: "Are there any side effects?",
    a: "ProDentim uses a natural, non-GMO formula with no stimulants and is non-habit forming. If you are pregnant, nursing, taking medication, or have a medical condition, consult a qualified healthcare professional before use.",
  },
  {
    q: "When and how should I take ProDentim?",
    a: "ProDentim comes as 30 soft tablets per bottle, chewed as part of your daily routine. Follow the directions printed on the product label.",
  },
  {
    q: "Can you tell me about the guarantee again?",
    a: "Your order is covered by an iron-clad 60-day 100% money-back guarantee. If you are not impressed, write to us at any time in the next 60 days and we'll refund every single cent.",
  },
  {
    q: "How can I get started?",
    a: "Choose your package on this page and continue to the official secure checkout. Every purchase button on this site sends you to the official order page.",
  },
  {
    q: "*Shipping policy",
    a: (
      <div className="overflow-x-auto">
        <table className="w-full min-w-[26rem] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-leaf/10 text-charcoal">
              <th className="rounded-l-lg px-4 py-3 font-semibold">Region</th>
              <th className="px-4 py-3 font-semibold">Shipping cost</th>
              <th className="rounded-r-lg px-4 py-3 font-semibold">Delivery time</th>
            </tr>
          </thead>
          <tbody>
            {SHIPPING_TABLE.map((row) => (
              <tr key={row.region} className="border-b border-border/70 last:border-0">
                <td className="px-4 py-3 font-medium text-charcoal">{row.region}</td>
                <td className="px-4 py-3">{row.cost}</td>
                <td className="px-4 py-3">{row.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ),
  },
];

export function Faq() {
  return (
    <>
      <Accordion.Root type="single" collapsible className="mx-auto max-w-3xl space-y-3">
        {FAQ_ITEMS.map((item, i) => (
          <Accordion.Item
            key={item.q}
            value={`item-${i}`}
            className="surface-card overflow-hidden rounded-2xl transition-colors duration-300 data-[state=open]:bg-[oklch(0.96_0.02_230)] data-[state=open]:shadow-[0_28px_60px_-46px_oklch(0.28_0.062_152/0.9)]"
          >
            <Accordion.Header>
              <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-6 text-left text-base font-medium text-charcoal transition-colors hover:bg-sage/40 data-[state=open]:text-leaf sm:px-7">
                <span className="min-w-0">{item.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-leaf/25 bg-white text-leaf">
                  <Plus size={16} className="group-data-[state=open]:hidden" />
                  <Minus size={16} className="hidden group-data-[state=open]:block" />
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="accordion-content">
              <div className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-7">
                {typeof item.a === "string" ? <p>{item.a}</p> : item.a}
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>

      <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-leaf/20 bg-[oklch(0.96_0.02_230)] p-6 text-center sm:p-8">
        <p className="text-sm leading-relaxed text-charcoal">
          If you haven't found the answer you need above, our customer support agents are more
          than happy to personally assist you.
        </p>
        <div className="mt-4 flex flex-col items-center justify-center gap-2 text-sm sm:flex-row sm:gap-8">
          <p>
            For Order Support:{" "}
            <a
              href={CONTACT.orderSelfServiceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-leaf underline underline-offset-4"
            >
              {CONTACT.orderSelfServiceUrl}
            </a>
          </p>
          <p>
            For Product Support:{" "}
            <a
              href={`mailto:${CONTACT.productEmail}`}
              className="font-semibold text-leaf underline underline-offset-4"
            >
              {CONTACT.productEmail}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
