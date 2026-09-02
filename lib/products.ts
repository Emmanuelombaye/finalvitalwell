export type ProductSlug = "semaglutide" | "tirzepatide";

export type FaqItem = {
  question: string;
  answer: string;
};

export type Product = {
  slug: ProductSlug;
  name: string;
  path: string;
  form: string;
  strength: string;
  price: number;
  category: string;
  short: string;
  headline: string;
  tagline: string;
  availability: string;
  about: string[];
  how: string[];
  status: string[];
  eligibility: string;
  safety: string[];
  faqs: FaqItem[];
};

export const PROGRAM_INCLUDES = [
  "Online licensed-provider review",
  "Secure medical intake after checkout",
  "Ongoing program support by secure message",
  "Standard shipping",
  "Routine follow-up required by the program",
] as const;

export const products: Product[] = [
  {
    slug: "semaglutide",
    name: "Semaglutide",
    path: "/treatments/weight-management/semaglutide",
    form: "Injectable solution",
    strength: "2.5 mg/mL",
    price: 149,
    category: "Weight Management",
    short:
      "A clinician-guided weight-management program built around your history, not a one-size plan.",
    headline: "Semaglutide",
    tagline:
      "A GLP-1 based weight-management program with licensed-provider review, ongoing support, and one clear monthly price.",
    availability:
      "Available in eligible states. Availability varies by program and pharmacy coverage.",
    about: [
      "The VitaWellRx® Semaglutide program is a clinician-guided weight-management program. You choose the program and complete checkout first; the required secure medical intake follows, and a licensed clinician then decides whether treatment is medically appropriate for you.",
      "Semaglutide belongs to a class of medicines known as GLP-1 receptor agonists. Branded semaglutide products have been approved by the FDA for specific indications. Not every semaglutide formulation available through telehealth is the same as an FDA-approved branded product — compounded formulations are different products, and where a compounded formulation would be used, that is disclosed before fulfilment.",
      "Care is delivered asynchronously by default. You submit your intake, identification, and any requested information, and a clinician reviews it on their own schedule.",
      "People commonly considered for review include adults with weight-related health goals who can safely be managed remotely. Provider judgment governs.",
    ],
    how: [
      "GLP-1 receptor agonists act on pathways involved in appetite signalling and gastric emptying. In general terms, that is why people in clinical settings often report feeling full sooner and staying full longer.",
      "The effect is not automatic and is not identical between people. VitaWellRx® does not publish dosing instructions or self-administration guidance on this website.",
    ],
    status: [
      "Semaglutide is an active ingredient present in FDA-approved branded products for specific indications.",
      "The program shown here may involve a compounded formulation. A compounded product is not the same as an FDA-approved branded drug.",
      "Any program would be used only where clinically and legally appropriate.",
    ],
    eligibility:
      "Tell your reviewing clinician about personal or family history of medullary thyroid carcinoma or MEN 2, pancreatitis, gallbladder disease, diabetic retinopathy, severe gastrointestinal disease, pregnancy or breastfeeding, and every medication and supplement you take.",
    safety: [
      "Commonly described side effects of GLP-1 medicines include nausea, vomiting, diarrhoea, constipation, and abdominal discomfort, particularly early in a program.",
      "Serious risks have been described with this class, including pancreatitis, gallbladder problems, kidney injury related to dehydration, and low blood sugar when combined with certain diabetes medicines.",
      "This is a high-level summary and not a complete list. Stop and seek immediate care for severe abdominal pain, persistent vomiting, or signs of an allergic reaction.",
    ],
    faqs: [
      {
        question: "Is this the same as a branded semaglutide product?",
        answer:
          "Not necessarily. Branded semaglutide products are FDA-approved for specific indications. A program may involve a compounded formulation, which is a different product prepared by a licensed pharmacy and not FDA-approved.",
      },
      {
        question: "Does buying the program mean I will be prescribed treatment?",
        answer:
          "No. Purchasing never guarantees a prescription. Treatment is provided only if a licensed clinician determines it is medically appropriate.",
      },
      {
        question: "Are laboratory tests included in the price?",
        answer:
          "No. Laboratory testing, expedited shipping, replacement products, and third-party services are not included unless specifically stated.",
      },
      {
        question: "When do I complete the medical intake?",
        answer:
          "After checkout. The intake is required before a licensed clinician can review your information.",
      },
    ],
  },
  {
    slug: "tirzepatide",
    name: "Tirzepatide",
    path: "/treatments/weight-management/tirzepatide",
    form: "Injectable solution",
    strength: "5 mg/mL",
    price: 249,
    category: "Weight Management",
    short:
      "A dual-pathway weight-management program for people reviewed and approved by a licensed clinician.",
    headline: "Tirzepatide",
    tagline:
      "A clinician-guided weight-management program using tirzepatide, with provider review and one clear monthly price.",
    availability:
      "Available in eligible states, subject to pharmacy and regulatory review.",
    about: [
      "The VitaWellRx® Tirzepatide program is a clinician-guided weight-management program. Purchase comes first, the secure medical intake follows, and a licensed clinician determines whether treatment is appropriate.",
      "Tirzepatide is a dual GIP and GLP-1 receptor agonist. The FDA has approved branded tirzepatide products for specific indications. Those branded products are distinct from any compounded tirzepatide formulation, and VitaWellRx® does not describe a compounded formulation as Zepbound or Mounjaro.",
      "This program is generally considered for adults with weight-related health goals who can be managed safely at a distance.",
    ],
    how: [
      "Tirzepatide acts on two incretin pathways rather than one. In general educational terms, those pathways are involved in appetite regulation, insulin response, and gastric emptying.",
      "Whether a dual-pathway product suits you better than a single-pathway one is a clinical judgment, not a purchase decision. This page contains no dosing schedule.",
    ],
    status: [
      "Tirzepatide is an active ingredient in FDA-approved branded products indicated for specific uses.",
      "Any program here may involve a compounded formulation, which is not FDA-approved and is not equivalent to an approved branded drug.",
      "Availability depends on independent legal, clinical, and pharmacy review.",
    ],
    eligibility:
      "Disclose personal or family history of medullary thyroid carcinoma or MEN 2, pancreatitis, gallbladder disease, severe gastrointestinal conditions, diabetes medicines, pregnancy or breastfeeding plans, allergies, and all current medications.",
    safety: [
      "Gastrointestinal effects are the most commonly described: nausea, vomiting, diarrhoea, constipation, reduced appetite, and abdominal pain.",
      "Serious risks described for this class include pancreatitis, gallbladder disease, dehydration-related kidney injury, and hypoglycaemia in combination with certain diabetes medicines.",
      "Seek immediate care for severe or persistent abdominal pain, ongoing vomiting, or allergic symptoms.",
    ],
    faqs: [
      {
        question: "Is this Zepbound or Mounjaro?",
        answer:
          "No. Those are FDA-approved branded tirzepatide products. This program is described separately and may involve a compounded formulation, which is a different product.",
      },
      {
        question: "Can I switch from the semaglutide program?",
        answer:
          "You can request a switch between cycles. A licensed clinician reviews whether a change is appropriate; switching is not automatic.",
      },
      {
        question: "What if I'm not approved?",
        answer:
          "If you cancel before review, or a provider declines treatment, the program charge is refunded in full according to the refund policy.",
      },
      {
        question: "Is shipping included?",
        answer:
          "Standard shipping is included once a prescription is approved. Expedited and international shipping are not included.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function otherProduct(slug: ProductSlug): Product {
  return products.find((product) => product.slug !== slug) ?? products[0];
}

export function formatUsd(amount: number, fractionDigits = 0): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(amount);
}

export const homeFaqs: FaqItem[] = [
  {
    question: "Is VitaWellRx® a pharmacy?",
    answer:
      "No. VitaWellRx® is a telehealth platform that connects eligible patients with independent US-licensed providers and licensed pharmacy partners. VitaWellRx® is not a pharmacy and does not itself practice medicine.",
  },
  {
    question: "When do I complete my medical intake?",
    answer:
      "After checkout. The intake is required before a licensed clinician can review your information.",
  },
  {
    question: "Does purchasing guarantee a prescription?",
    answer:
      "No. Treatment is provided only if a licensed clinician determines it is medically appropriate.",
  },
  {
    question: "What does the monthly price include?",
    answer:
      "The online clinical consultation, standard shipping, ongoing program support, and routine follow-up. Laboratory testing and third-party services are not included.",
  },
  {
    question: "Are the products FDA-approved?",
    answer:
      "Branded GLP-1 products are FDA-approved for specific indications. Programs shown here may involve compounded formulations, which are not FDA-approved.",
  },
  {
    question: "How do I cancel a program?",
    answer:
      "From your account, before the next renewal date. Cancellation stops future charges.",
  },
];
