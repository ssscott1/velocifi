/**
 * Velocity Works site content.
 *
 * This is the single place to edit copy. Change the email, tagline, sections
 * or ventures here and they update across the whole site. No component holds
 * its own hardcoded marketing text.
 */

export const site = {
  name: "Velocity Works",
  legalName: "Velocity Works Pty Ltd",
  email: "hello@velocityworks.com.au",
  tagline: "Build once. Launch many.",
  year: 2026,
} as const;

export const nav = {
  links: [
    { label: "Platform", href: "#platform" },
    { label: "How it works", href: "#how-it-works" },
    { label: "Ventures", href: "#ventures" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const hero = {
  // The headline period is rendered as a green accent in the component.
  headline: "We build financial services products that run on software, not headcount",
  subline:
    "Highly efficient, customer focused financial services businesses — engineered to be infinitely scalable and fully compliant.",
  cta: { label: "Get in touch", href: "#contact" },
} as const;

export const about = {
  eyebrow: "01 — THE THESIS",
  heading: "Build once. Launch many.",
  body: "Most companies build their technology once and use it once. We built one reusable platform and launch a portfolio of businesses on top of it. The software finds the customers, makes the decisions, and runs the operations. Each launch is faster, leaner, and sharper than the last.",
  body2:
    "Velocity Works is founder owned and built to compound. Every venture strengthens the platform, and the platform strengthens every venture that follows.",
} as const;

export const platform = {
  eyebrow: "02 — THE PLATFORM",
  heading: "One platform. Many businesses.",
  intro:
    "Velocifi is the engine behind everything we launch. It carries a customer from first enquiry to settled deal in one continuous, automated flow.",
  points: [
    {
      label: "Sales",
      body: "Every enquiry answered in seconds, at any hour. The platform qualifies each customer, understands their situation, and guides them to the right product without a call queue or a callback.",
    },
    {
      label: "Finance",
      body: "Applications structured, verified, and assessed in minutes, not days. Decisioning, compliance, and settlement run straight through from start to finish.",
    },
    {
      label: "Shared infrastructure",
      body: "Identity, credit, compliance, data, and lender integrations built once and reused by every venture we launch. New businesses start at full strength.",
    },
  ],
} as const;

export const howItWorks = {
  eyebrow: "03 — HOW IT WORKS",
  heading: "A world-class broker experience. Without the broker.",
  intro:
    "A traditional broker knows part of the market, works 9am to 5pm, and brings their own preferences to every deal. Vela, Velocifi's AI broker knows all of our products, all of the time. Customers can speak with Vela over the phone, by email or by text at any hour, day or night — an agent trained across every finance product we have access to and built to recommend based solely on what suits the customer. Vela never forgets a product, never pushes a favourite, and never makes anyone wait until Monday for a call back.",
  steps: [
    {
      label: "01 · Enquire",
      title: "Start any time",
      body: "Begin online whenever it suits. No appointments, no phone tag, no paperwork to print.",
    },
    {
      label: "02 · Qualify",
      title: "Matched in minutes",
      body: "The platform understands your circumstances, checks eligibility, and matches you with suitable options from multiple lenders.",
    },
    {
      label: "03 · Decide",
      title: "Straight through",
      body: "Applications are structured, verified, and submitted straight through to the lender. Decisions come back in minutes, not days.",
    },
    {
      label: "04 · Settle",
      title: "Done end to end",
      body: "Documents, compliance, and settlement handled in one continuous flow, with nothing lost in a handover.",
    },
  ],
} as const;

/** Venture status drives the indicator dot. "Live" is the only one shown in green. */
type VentureStatus = "Live" | "Pre launch" | "Testing" | "Development";

interface Venture {
  name: string;
  description: string;
  status: VentureStatus;
  /** Optional external link (e.g. a live venture site). */
  href?: string;
}

export const ventures = {
  eyebrow: "04 — VENTURES",
  heading: "Our ventures.",
  items: [
    {
      name: "Velocifi",
      description:
        "An intelligent sales and finance platform. A world class broker experience at any time of the day or night, without the broker. Velocifi is the engine that runs the Velocity Works ecosystem.",
      status: "Pre launch",
    },
    {
      name: "BaseRate",
      description:
        "Fast, low cost car finance with multiple lender options and straight through processing. No broker fees, no commissions.",
      status: "Live",
      href: "https://www.baserate.com.au",
    },
    {
      name: "Asset Finance Australia",
      description:
        "Quick approvals for established businesses. Finance for business vehicles, equipment, and machinery.",
      status: "Live",
      href: "https://www.assetfinanceaustralia.com.au/",
    },
  ] as Venture[],
  note: "More to come.",
};

export const contact = {
  eyebrow: "05 — CONTACT",
  heading: "Get in touch.",
  body: "For partnership and venture enquiries.",
} as const;
