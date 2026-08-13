/**
 * Central configuration.
 * Only ONE checkout destination should be active at a time.
 */
export const BRAND = {
  name: "NutriPulseLab",
  domain: "nutripulselab.com",
};

export const CLICKBANK_HOPLINK =
  "https://1a042mvnqmsi3p8d0ij8tsobbi.hop.clickbank.net/?&traffic_source=facebook&traffic_type=paid";

/** Optional future GiftHub product URL. Leave empty until provided. */
export const GIFTHUB_PRODUCT_URL = "";

/** Active checkout destination used by every purchase button. */
export const PRODUCT_CHECKOUT_URL = GIFTHUB_PRODUCT_URL || CLICKBANK_HOPLINK;

/** Backwards-compatible alias. */
export const PRODENTIM_CHECKOUT_URL = PRODUCT_CHECKOUT_URL;

/** Official product page reference. */
export const OFFICIAL_PRODUCT_URL =
  "https://prodentim101.com/text_normup.php?vtid=normup&hop=zzzzz&hopId=64cff6d6-10fe-4383-8bfb-d99f3fe5a88f";

/** Editable shipping policy reference. */
export const SHIPPING_POLICY_REFERENCE_URL = "";

/** Official support details. */
export const CONTACT = {
  productEmail: "contact@prodentim-product.com",
  orderSelfServiceUrl: "https://www.clkbank.com",
  orderPhoneTollFree: "1-800-390-6035",
  orderPhoneInternational: "+1 208-345-4245",
  note: "Every email or phone call is managed by our friendly customer support agents, and they will reply as soon as possible.",
  companyName: BRAND.name,
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

/** The 14 scientific references, each with its source URL. */
export const REFERENCES: { text: string; url: string }[] = [
  {
    text: "Booth S. Bacteria in your mouth can affect your brain. Healthline. 2019, May 5",
    url: "https://www.healthline.com/health-news/bacteria-in-your-mouth-can-find-its-way-to-your-brain",
  },
  {
    text: "Burhenne M. The oral microbiome & its impact on every other system in the body. Ask the Dentist. 2020, April 9",
    url: "https://askthedentist.com/oral-microbiome/",
  },
  {
    text: "Burhenne M. How to avoid toxins in your toothpaste: 12 ingredients to ditch now. Experience Life. 2022, January 14",
    url: "https://experiencelife.lifetime.life/article/how-to-avoid-toxins-in-your-toothpaste/",
  },
  {
    text: "Schlagenhauf U, Jockel-Schneider Y. Probiotics in the management of gingivitis and periodontitis. A review. Frontiers in Dental Medicine. 2021: 2",
    url: "https://www.frontiersin.org/articles/10.3389/fdmed.2021.708666/full",
  },
  {
    text: "Daniells S. Probiotic lactobacillus paracasei shows oral health benefits: Study. NutraIngredients. 2014, September 2",
    url: "https://www.nutraingredients.com/Article/2014/09/02/Probiotic-Lactobacillus-paracasei-shows-oral-health-benefits-Study",
  },
  {
    text: "Daniells S. Live or dead reuteri bacteria may offer oral health benefits: Study. NutraIngredients-LATAM. 2019, December 12",
    url: "https://www.nutraingredients-latam.com/Article/2019/12/12/Live-or-dead-reuteri-bacteria-may-offer-oral-health-benefits-Study",
  },
  {
    text: "Invernici MM, Salvador SL, Silva PH, et al. Effects of Bifidobacterium probiotic on the treatment of chronic periodontitis: A randomized clinical trial. Journal of Clinical Periodontology. 2012;45(10):1198-1210",
    url: "https://onlinelibrary.wiley.com/doi/10.1111/jcpe.12995",
  },
  {
    text: "Miremadi F, Shah NP. Applications of inulin and probiotics in health and nutrition. International Food Research Journal. 2012;19(4):1337-1350",
    url: "http://www.ifrj.upm.edu.my/19%20(04)%202012/(4)%20IFRJ-2012-Miremadi.pdf",
  },
  {
    text: "Mu Q, Tavella VJ, Luo XM. Role of lactobacillus reuteri in human health and diseases. Frontiers in Microbiology. 2018;9",
    url: "https://www.frontiersin.org/articles/10.3389/fmicb.2018.00757/full",
  },
  {
    text: "Myers B. 3 health purposes of Dicalcium phosphate. LIVESTRONG.COM. 2011, June 16",
    url: "https://www.livestrong.com/article/472018-3-health-purposes-of-dicalcium-phosphate/",
  },
  {
    text: "Novkovic B. 6+ surprising benefits of lactobacillus paracasei. SelfDecode Supplements. 2021, September 9",
    url: "https://supplements.selfdecode.com/blog/lactobacillus-paracasei/",
  },
  {
    text: "Rezaie E, Bayani M, Arjomandzadegan M. The inhibitory and antibacterial effects of peppermint essential oil on periodontal pathogens. Journal of Arak University of Medical Sciences. 2020:172-183",
    url: "http://jams.arakmu.ac.ir/article-1-6282-en.html",
  },
  {
    text: "Scepano T. How probiotics prevent tooth decay: The case of lactobacillus paracasei. Medium. 2020, September 30",
    url: "https://medium.com/@tscepano/how-probiotics-prevent-tooth-decay-the-case-of-lactobacillus-paracasei-73587b172a5a",
  },
  {
    text: "Campbell K. Oral microbiome findings challenge dentistry dogma. Nature. 2021",
    url: "https://www.nature.com/articles/d41586-021-02920-w",
  },
];

/** Shipping table shown in the FAQ + shipping policy page. */
export const SHIPPING_TABLE = [
  { region: "United States", cost: "FREE", time: "5-7 working days" },
  { region: "Canada", cost: "$15.95", time: "10-15 working days" },
  { region: "UK and Ireland", cost: "$15.95", time: "10-15 working days" },
  { region: "Australia and New Zealand", cost: "$15.95", time: "10-15 working days" },
];
