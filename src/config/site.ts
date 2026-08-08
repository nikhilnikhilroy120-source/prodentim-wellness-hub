/**
 * Central configuration.
 * Only ONE destination should be active at a time.
 * Paste your ClickBank HopLink below — every purchase CTA uses it.
 */
export const CLICKBANK_HOPLINK = "PASTE_YOUR_CLICKBANK_HOPLINK_HERE";

/** Optional future GiftHub product URL. Leave empty until provided. */
export const GIFTHUB_PRODUCT_URL = "";

/** Active checkout destination used by every purchase button. */
export const PRODUCT_CHECKOUT_URL = GIFTHUB_PRODUCT_URL || CLICKBANK_HOPLINK;

/** Backwards-compatible alias. */
export const PRODENTIM_CHECKOUT_URL = PRODUCT_CHECKOUT_URL;

/** Review video URLs — paste YouTube watch/embed URLs when available. */
export const REVIEW_VIDEO_1 = "";
export const REVIEW_VIDEO_2 = "";
export const REVIEW_VIDEO_3 = "";

/** Editable reference link for the scientific discovery section. */
export const SCIENTIFIC_REFERENCE_URL = "https://www.nature.com/";

/** Editable shipping policy reference. */
export const SHIPPING_POLICY_REFERENCE_URL = "";

/** Editable contact placeholders — replace with real details when available. */
export const CONTACT = {
  supportEmail: "[ADD SUPPORT EMAIL]",
  vendorSupportUrl: "[ADD VENDOR SUPPORT URL]",
  clickbankSupportUrl: "https://www.clkbank.com/#!/",
  companyName: "[ADD COMPANY NAME]",
  address: "[ADD BUSINESS ADDRESS]",
};

export const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Ingredients", href: "/#ingredients" },
  { label: "Bonuses", href: "/#bonuses" },
  { label: "Reviews", href: "/#reviews" },
  { label: "FAQ", href: "/#faq" },
];

export const LEGAL_LINKS = [
  { label: "Terms Of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Shipping Policy", href: "/shipping-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Contact", href: "/contact" },
  { label: "References", href: "/references" },
  { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
];

export const REFERENCES = [
  "Booth S. Bacteria in your mouth can affect your brain. Healthline. 2019.",
  "Burhenne M. The oral microbiome & its impact on every other system in the body. Ask the Dentist. 2020.",
  "Burhenne M. How to avoid toxins in your toothpaste: 12 ingredients to ditch now. Experience Life. 2022.",
  "Schlagenhauf U, Jockel-Schneider Y. Probiotics in the management of gingivitis and periodontitis. Frontiers in Dental Medicine. 2021.",
  "Daniells S. Probiotic lactobacillus paracasei shows oral health benefits.",
  "Daniells S. Live or dead reuteri bacteria may offer oral health benefits.",
  "Invernici MM et al. Effects of Bifidobacterium probiotic on chronic periodontitis.",
  "Miremadi F, Shah NP. Applications of inulin and probiotics in health and nutrition.",
  "Mu Q, Tavella VJ, Luo XM. Role of Lactobacillus reuteri in human health and diseases.",
  "Myers B. Dicalcium phosphate.",
  "Novkovic B. Lactobacillus paracasei.",
  "Rezaie E et al. Peppermint essential oil and periodontal pathogens.",
  "Scepano T. How probiotics prevent tooth decay.",
  "Campbell K. Oral microbiome findings challenge dentistry dogma.",
];