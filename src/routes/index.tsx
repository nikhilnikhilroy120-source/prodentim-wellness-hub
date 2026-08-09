import { createFileRoute } from "@tanstack/react-router";
import {
  Check,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
  Wind,
  Droplets,
  Clock,
} from "lucide-react";

import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import {
  AnchorButton,
  Botanical,
  BuyButton,
  Eyebrow,
  LeafEdge,
  Reveal,
  Section,
} from "@/components/site/ui";
import { Faq } from "@/components/site/Faq";
import { REVIEW_VIDEOS, VideoCard } from "@/components/site/ReviewVideos";
import {
  BENEFITS,
  BLEND,
  INGREDIENTS,
  TESTIMONIALS,
  TRUST_ITEMS,
} from "@/components/site/data";
import { REFERENCES, SCIENTIFIC_REFERENCE_URL } from "@/config/site";

import heroBottles from "@/assets/three-bottle.png.asset.json";
import bestOffer from "@/assets/best-offer.png.asset.json";
import twoBottle from "@/assets/two-bottle.png.asset.json";
import editorial from "@/assets/editorial.png.asset.json";
import reviewsCollage from "@/assets/reviews.png.asset.json";
import bonus1 from "@/assets/bonus1.png.asset.json";
import bonus2 from "@/assets/bonus2.png.asset.json";
import bonus3 from "@/assets/bonus3.png.asset.json";
import microbiome from "@/assets/microbiome.jpg";

const TITLE = "ProDentim | Advanced Oral Probiotics for Everyday Oral Wellness";
const DESCRIPTION =
  "Discover ProDentim, an advanced oral probiotic formula featuring 3.5 billion probiotic strains and nutrients designed to support everyday oral wellness.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      { rel: "preload", as: "image", href: heroBottles.url },
    ],
  }),
  component: Index,
});

import type { LucideIcon } from "lucide-react";

const trustIcons: LucideIcon[] = [Leaf, Clock, ShieldCheck, Sparkles, Check, Droplets];
const benefitIcons: LucideIcon[] = [Sparkles, Wind, Droplets, Leaf, Clock, ShieldCheck];

function Index() {
  return (
    <div className="min-h-screen overflow-x-clip bg-ivory">
      <Header />
      <main>
        {/* 02. HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-sage via-cream to-ivory sun-wash organic-grain">
          <Botanical className="opacity-[0.14]" />
          <LeafEdge />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,oklch(0.98_0.03_110/0.9),transparent)] blur-2xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-sage/60 blur-3xl"
          />
          <div className="container-x relative grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-8">
            <div className="order-2 lg:order-1">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-leaf-deep px-4 py-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
                • Advanced Oral Probiotics •
              </p>
              <h1 className="text-4xl leading-[1.08] text-charcoal sm:text-5xl lg:text-[3.4rem]">
                Specially Designed For The{" "}
                <span className="text-leaf">Health Of Your Teeth And Gums</span>
              </h1>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Try ProDentim: a unique blend of 3.5 billion probiotic strains and nutrients
                backed by clinical research.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <BuyButton>Get ProDentim</BuyButton>
                <AnchorButton to="/#ingredients">Explore The Formula</AnchorButton>
              </div>

              <ul className="mt-9 grid grid-cols-3 gap-x-3 gap-y-6 sm:grid-cols-6">
                {TRUST_ITEMS.map((item, i) => {
                  const Icon = trustIcons[i % trustIcons.length]!;
                  return (
                    <li key={item} className="flex flex-col items-center gap-2 text-center">
                      <span className="grid h-11 w-11 place-items-center rounded-full border border-leaf/25 bg-cream/80 text-leaf shadow-[0_10px_20px_-16px_rgba(14,63,36,0.9)]">
                        <Icon size={18} />
                      </span>
                      <span className="text-[0.68rem] font-medium leading-tight text-charcoal">
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>

              <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
                <ShieldCheck size={16} className="text-leaf" />
                60-Day Money-Back Guarantee
              </p>
            </div>

            <div className="relative order-1 product-ground lg:order-2">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 m-auto h-[78%] w-[78%] rounded-full bg-[radial-gradient(closest-side,rgba(255,253,240,0.95),transparent)] blur-2xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-[8%] bottom-[3%] -z-10 h-24 rounded-[50%] bg-[radial-gradient(closest-side,rgba(24,32,24,0.28),transparent)] blur-xl"
              />
              <img
                src={heroBottles.url}
                alt="Three ProDentim Advanced Oral Probiotics bottles, 30 soft tablets each"
                width={1000}
                height={950}
                fetchPriority="high"
                decoding="async"
                className="mx-auto w-full max-w-[540px] drop-shadow-[0_44px_46px_rgba(40,60,40,0.28)]"
              />
            </div>
          </div>
        </section>

        {/* 04. SCIENTIFIC DISCOVERY */}
        <Section id="about" tone="cream">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Eyebrow>May 2022 — New Scientific Discovery</Eyebrow>
            <h2 className="text-3xl text-charcoal sm:text-4xl">
              Your Mouth Has Its Own Microbiome
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              “A recent study put out in the Springer Nature publication found that people who
              have good teeth have a high population of good bacteria in the mouth.”
            </p>
            <p className="mt-5 inline-block rounded-full bg-sage px-5 py-2 text-sm font-semibold text-leaf">
              (Hint – No Toothpaste or Mouthwash Involved)
            </p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              What that research points to is simple: the balance of bacteria living in your
              mouth matters. Many everyday oral care products are not designed with that
              balance in mind. ProDentim was built around it — a probiotic-focused approach to
              supporting the everyday health of your teeth and gums.
            </p>
            <a
              href={SCIENTIFIC_REFERENCE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-leaf/35 bg-cream px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-leaf transition-colors hover:bg-sage"
            >
              Reference link
            </a>
          </Reveal>
          <Reveal delay={120} className="relative">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 m-auto h-[85%] w-[85%] rounded-full bg-[radial-gradient(closest-side,rgba(21,91,50,0.22),transparent)] blur-2xl"
            />
            <img
              src={microbiome}
              alt="Microscopic view of beneficial rod-shaped oral bacteria"
              width={1024}
              height={1024}
              loading="lazy"
              decoding="async"
              className="media-orb relative mx-auto aspect-square w-full max-w-sm object-cover"
            />
          </Reveal>
          </div>
        </Section>

        {/* 05. WHY PRODENTIM */}
        <Section tone="sage">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="relative">
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] bg-[radial-gradient(closest-side,rgba(255,255,255,0.9),transparent)] blur-2xl"
              />
              <img
                src={editorial.url}
                alt="ProDentim Advanced Oral Probiotics bottle with strawberries, mint leaves and greenery"
                width={1024}
                height={1536}
                loading="lazy"
                decoding="async"
                className="w-full rounded-[2rem] border border-leaf/15 object-cover shadow-[0_50px_90px_-60px_rgba(14,63,36,0.95)]"
              />
            </Reveal>
            <Reveal delay={120}>
              <Eyebrow>A Different Approach To Oral Wellness</Eyebrow>
              <h2 className="text-3xl text-leaf sm:text-4xl">
                That’s Why We Created ProDentim
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                ProDentim is unlike anything you’ve ever tried or experienced in your life
                before.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                It’s the only product in the world with a unique blend of 3.5 billion
                probiotics and nutrients, specially designed to repopulate your mouth with good
                bacteria.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Every ProDentim you chew will support the good health of your gums and teeth.
              </p>
              <div className="mt-7 flex items-start gap-4 rounded-2xl border border-leaf/20 bg-cream/80 p-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sage text-leaf">
                  <Sparkles size={20} />
                </span>
                <div>
                  <p className="text-sm font-bold uppercase tracking-wider text-leaf">
                    3.5 Billion Probiotic Strains
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    Along with 3 unique ingredients that are clinically proven to support the
                    health of your teeth and gums.
                  </p>
                </div>
              </div>
              <div className="mt-8">
                <BuyButton>Get ProDentim</BuyButton>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* 06. INSIDE PRODENTIM */}
        <Section tone="white">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Inside Every ProDentim</Eyebrow>
            <h2 className="text-3xl text-charcoal sm:text-4xl">
              3.5 Billion Probiotics In Every Soft Tablet
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              3.5 billion probiotics, along with 3 unique ingredients that are clinically
              proven to support the health of your teeth and gums.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              { k: "3.5B", v: "Probiotic strains" },
              { k: "3", v: "Clinically researched ingredients" },
              { k: "30", v: "Soft tablets per bottle" },
            ].map((s, i) => (
              <Reveal key={s.k} delay={i * 100}>
                <div className="surface-card rounded-3xl p-8 text-center">
                  <p className="font-display text-4xl text-leaf">{s.k}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 07. INGREDIENTS */}
        <Section id="ingredients" tone="ivory">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>The Formula</Eyebrow>
            <h2 className="text-3xl text-leaf sm:text-4xl">
              Inside Every ProDentim You’ll Find
            </h2>
          </Reveal>
          <div className="mt-12 grid divide-y divide-border md:grid-cols-3 md:divide-x md:divide-y-0">
            {INGREDIENTS.map((ing, i) => (
              <Reveal key={ing.name} delay={i * 100}>
                <article className="flex h-full gap-5 px-2 py-8 md:px-7">
                  <span className="media-orb grid h-16 w-16 shrink-0 place-items-center bg-gradient-to-br from-sage to-sage-mid text-leaf">
                    <Leaf size={24} />
                  </span>
                  <div className="min-w-0">
                  <h3 className="text-lg leading-snug text-charcoal">{ing.name}</h3>
                  <ul className="mt-3 space-y-2.5">
                    {ing.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                        <Check size={16} className="mt-0.5 shrink-0 text-leaf" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 08. PROPRIETARY BLEND */}
        <Section tone="ivory">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Plants & Minerals</Eyebrow>
            <h2 className="text-3xl text-charcoal sm:text-4xl">
              Proprietary Blend of 4 Plants and Minerals
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BLEND.map((b, i) => (
              <Reveal key={b.name} delay={i * 80}>
                <article className="surface-card h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1">
                  <span className="text-xs font-semibold tracking-[0.18em] text-sage-deep">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 text-lg text-charcoal">{b.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 09. BENEFITS */}
        <Section tone="white">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Benefits</Eyebrow>
            <h2 className="text-3xl text-charcoal sm:text-4xl">
              Designed For Everyday Oral Wellness
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {BENEFITS.map((b, i) => {
              const Icon = benefitIcons[i % benefitIcons.length]!;
              return (
                <Reveal key={b.title} delay={i * 70}>
                  <article className="surface-card h-full rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-42px_oklch(0.28_0.062_152/0.75)]">
                    <Icon size={22} className="text-leaf" />
                    <h3 className="mt-4 text-lg text-charcoal">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Section>

        {/* 10. FREE BONUSES */}
        <Section id="bonuses" tone="cream">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Limited Time</Eyebrow>
            <h2 className="text-3xl text-charcoal sm:text-4xl lg:text-5xl">
              Order 6 Bottles And Get 3 Free Bonuses!
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Every 6 Bottles Order Gets FREE Shipping Too!
            </p>
            <p className="mt-3 text-sm text-sage-deep">
              *97% Of Customers Order 6 Bottles (Our Recommended Option)
            </p>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={bestOffer.url}
              alt="Six ProDentim bottles with Best Value badge and three free bonus e-books"
              width={1000}
              height={753}
              loading="lazy"
              decoding="async"
              className="mx-auto mt-10 w-full max-w-3xl"
            />
          </Reveal>

          <div className="mt-16 space-y-8">
            {[
              {
                n: 1,
                img: bonus1.url,
                alt: "Bad Breath Gone One Day Detox bonus e-book",
                title: "Bad Breath Gone. One Day Detox",
                rrp: "$55",
                text: "Kickstart your ProDentim journey and enjoy fresh breath naturally with 7 unexpected spice and herb mixes from your kitchen that can do wonders.",
              },
              {
                n: 2,
                img: bonus2.url,
                alt: "Hollywood White Teeth At Home bonus e-book",
                title: "Hollywood White Teeth At Home",
                rrp: "$54",
                text: "Find out about the simple 10 second “Bright Teeth” method you can do right now. You’ll also discover one little-known brushing trick that’s very popular among celebrities and more!",
              },
              {
                n: 3,
                img: bonus3.url,
                alt: "At-Home Oral Reset bonus e-book",
                title: "At-Home Oral Reset",
                rrp: "$54",
                text: "Discover the 10-second mouth swish and fruit peel trick that instantly brightens teeth and erase plaque. Plus, get a powerful 3-ingredient rinse and tongue exercise that strengthens your smile.",
              },
            ].map((b, i) => (
              <Reveal key={b.n} delay={i * 80}>
                <article className="surface-card grid items-center gap-8 rounded-[2rem] p-6 sm:p-9 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                  <img
                    src={b.img}
                    alt={b.alt}
                    width={920}
                    height={666}
                    loading="lazy"
                    decoding="async"
                    className="w-full rounded-2xl bg-gradient-to-b from-cream to-sage/40 object-contain"
                  />
                  <div>
                    <span className="eyebrow">Bonus #{b.n}</span>
                    <h3 className="mt-3 text-2xl text-charcoal sm:text-3xl">{b.title}</h3>
                    <p className="mt-4 flex flex-wrap items-baseline gap-3 text-sm">
                      <span className="text-muted-foreground line-through">RRP – {b.rrp}</span>
                      <span className="rounded-full bg-leaf px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-foreground">
                        Today: Free
                      </span>
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 14. CUSTOMER EXPERIENCE */}
        <Section id="reviews" tone="ivory">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Customer Experience</Eyebrow>
            <h2 className="text-3xl text-charcoal sm:text-4xl lg:text-5xl">
              Real ProDentim Users. Real Life-Changing Results.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <img
              src={reviewsCollage.url}
              alt="Collage of ProDentim customers holding their ProDentim bottles"
              width={1920}
              height={523}
              loading="lazy"
              decoding="async"
              className="mx-auto mt-10 w-full"
            />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 90}>
                <figure className="surface-card h-full rounded-3xl p-8">
                  <div className="flex gap-1 text-gold" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} size={15} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4">
                    <p className="text-sm font-semibold text-charcoal">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.location}</p>
                    <p className="mt-1 text-xs font-medium text-leaf">Verified Purchase</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 15. REVIEW VIDEOS */}
        <Section tone="white">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Watch ProDentim Reviews</Eyebrow>
            <h2 className="text-3xl text-charcoal sm:text-4xl">See It Before You Try It</h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {REVIEW_VIDEOS.map((v, i) => (
              <Reveal key={v.title} delay={i * 90}>
                <VideoCard {...v} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* 16. PRICING */}
        <Section id="pricing" tone="sage">
          <Reveal className="mx-auto max-w-3xl text-center">
            <Eyebrow>Special Pricing</Eyebrow>
            <h2 className="text-3xl text-charcoal sm:text-4xl lg:text-5xl">
              Claim Your Discounted ProDentim Below While Stocks Last!
            </h2>
          </Reveal>

          <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
            {/* Basic */}
            <Reveal className="lg:order-1 lg:pt-8">
              <article className="surface-card flex h-full flex-col rounded-[2rem] p-8 text-center">
                <p className="eyebrow">Basic</p>
                <h3 className="mt-2 text-2xl text-charcoal">2 Bottles</h3>
                <p className="text-sm text-muted-foreground">60 Day Supply</p>
                <img
                  src={twoBottle.url}
                  alt="Two ProDentim bottles, 60 day supply"
                  width={420}
                  height={420}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto my-7 h-48 w-full object-contain"
                />
                <p className="text-sm text-muted-foreground line-through">$358</p>
                <p className="font-display text-5xl text-charcoal">$158</p>
                <p className="mt-2 text-xs text-muted-foreground">+ $9.99 Shipping</p>
                <div className="mt-auto pt-7">
                  <BuyButton tone="outline" className="w-full">
                    Get Started
                  </BuyButton>
                </div>
              </article>
            </Reveal>

            {/* Best value */}
            <Reveal className="lg:order-2" delay={80}>
              <article className="relative flex h-full flex-col rounded-[2rem] border-2 border-leaf/70 bg-gradient-to-b from-white to-sage/25 p-8 text-center shadow-[0_45px_90px_-55px_oklch(0.28_0.062_152/0.95)]">
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-leaf px-5 py-2 text-[0.68rem] font-bold uppercase tracking-widest text-primary-foreground">
                  Best Value!
                </span>
                <p className="eyebrow mt-2">3 + 3 Bottles</p>
                <h3 className="mt-2 text-2xl text-charcoal">180 Day Supply</h3>
                <p className="text-sm text-muted-foreground">Includes 3 free bonuses</p>
                <img
                  src={bestOffer.url}
                  alt="Six ProDentim bottles with three free bonus e-books, 180 day supply"
                  width={1000}
                  height={753}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto my-6 h-56 w-full object-contain"
                />
                <p className="text-sm text-muted-foreground line-through">$1074</p>
                <p className="font-display text-6xl text-leaf">$294</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-leaf">
                  Free Shipping
                </p>
                <p className="mt-3 text-xs text-muted-foreground">
                  *97% Of Customers Order 6 Bottles (Our Recommended Option)
                </p>
                <div className="mt-auto pt-7">
                  <BuyButton className="w-full">Claim Best Value</BuyButton>
                </div>
              </article>
            </Reveal>

            {/* Most popular */}
            <Reveal className="lg:order-3 lg:pt-8" delay={160}>
              <article className="surface-card flex h-full flex-col rounded-[2rem] p-8 text-center">
                <p className="eyebrow">Most Popular</p>
                <h3 className="mt-2 text-2xl text-charcoal">2 + 1 Bottles</h3>
                <p className="text-sm text-muted-foreground">90 Day Supply</p>
                <img
                  src={heroBottles.url}
                  alt="Three ProDentim bottles, 90 day supply"
                  width={1000}
                  height={950}
                  loading="lazy"
                  decoding="async"
                  className="mx-auto my-7 h-48 w-full object-contain"
                />
                <p className="text-sm text-muted-foreground line-through">$537</p>
                <p className="font-display text-5xl text-charcoal">$207</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-leaf">
                  Free Shipping
                </p>
                <div className="mt-auto pt-7">
                  <BuyButton tone="outline" className="w-full">
                    Get Started
                  </BuyButton>
                </div>
              </article>
            </Reveal>
          </div>
        </Section>

        {/* 17. GUARANTEE */}
        <Section tone="cream">
          <div className="grid items-center gap-10 lg:grid-cols-[auto_minmax(0,1fr)]">
            <div className="relative mx-auto grid h-48 w-48 shrink-0 place-items-center rounded-full bg-gradient-to-br from-leaf to-leaf-deep text-center shadow-[0_40px_70px_-45px_rgba(14,63,36,0.95)] ring-8 ring-sage/70">
              <div>
                <p className="font-display text-6xl leading-none text-primary-foreground">60</p>
                <p className="mt-1 px-4 text-[0.6rem] font-bold uppercase leading-tight tracking-[0.18em] text-primary-foreground/85">
                  Day Money-Back Guarantee
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl text-leaf sm:text-4xl">
                100% Satisfaction 60-Day Money Back Guarantee
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Your order today is covered by our iron-clad 60-day 100% money-back guarantee.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                If you are not impressed by the transformation of your gums and teeth or you
                don’t admire your Hollywood-star smile, then at any time in the next 60 days
                write to us and we’ll refund every single cent.
              </p>
            </div>
          </div>
        </Section>

        {/* 18. FAQ */}
        <Section id="faq" tone="cream">
          <Reveal className="mx-auto max-w-2xl text-center">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="text-3xl text-charcoal sm:text-4xl">Frequently Asked Questions</h2>
          </Reveal>
          <div className="mt-12">
            <Faq />
          </div>
        </Section>

        {/* 19. SCIENTIFIC REFERENCES */}
        <Section tone="white">
          <details className="mx-auto max-w-3xl surface-card rounded-3xl p-6 sm:p-8">
            <summary className="cursor-pointer list-none text-lg font-semibold text-charcoal">
              Scientific References
            </summary>
            <ol className="mt-6 list-decimal space-y-2.5 pl-5 text-sm leading-relaxed text-muted-foreground">
              {REFERENCES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ol>
          </details>
        </Section>

        {/* 20. FINAL CTA */}
        <section className="relative overflow-hidden bg-gradient-to-b from-ivory via-cream to-sage sun-wash organic-grain">
          <Botanical className="opacity-[0.12]" />
          <LeafEdge />
          <div className="container-x grid items-center gap-10 py-20 sm:py-24 lg:grid-cols-2">
            <div className="relative">
              <p className="eyebrow">Ready When You Are</p>
              <h2 className="text-3xl text-leaf sm:text-4xl lg:text-5xl">
                Discover A New Approach To Everyday Oral Wellness
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
                Explore ProDentim and its probiotic-focused formula designed to support the
                health of your teeth and gums.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <BuyButton>Claim Your Discount</BuyButton>
                <AnchorButton to="/#ingredients">
                  Explore The Formula
                </AnchorButton>
              </div>
              <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-leaf" />
                  60-Day Money-Back Guarantee
                </p>
                <p className="flex items-center gap-2">
                  <Check size={16} className="text-leaf" />
                  Secure Checkout
                </p>
              </div>
            </div>
            <img
              src={heroBottles.url}
              alt="ProDentim Advanced Oral Probiotics bottles"
              width={1000}
              height={950}
              loading="lazy"
              decoding="async"
              className="relative mx-auto w-full max-w-md drop-shadow-[0_44px_50px_rgba(40,60,40,0.32)]"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
