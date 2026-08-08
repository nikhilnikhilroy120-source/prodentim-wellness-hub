import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

export const FAQ_ITEMS = [
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
    q: "How does shipping work?",
    a: "Every 6-bottle order includes free shipping. For international shipping (outside of the United States), shipping fees will apply.",
  },
];

export function Faq() {
  return (
    <Accordion.Root type="single" collapsible className="mx-auto max-w-3xl space-y-3">
      {FAQ_ITEMS.map((item, i) => (
        <Accordion.Item
          key={item.q}
          value={`item-${i}`}
          className="overflow-hidden rounded-2xl border border-border bg-white"
        >
          <Accordion.Header>
            <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-medium text-charcoal transition-colors hover:bg-sage/40 sm:px-7">
              <span className="min-w-0">{item.q}</span>
              <ChevronDown
                size={18}
                className="shrink-0 text-leaf transition-transform duration-300 group-data-[state=open]:rotate-180"
              />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="px-5 pb-6 text-sm leading-relaxed text-muted-foreground sm:px-7">
              {item.a}
            </p>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}