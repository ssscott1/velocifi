/**
 * Velocifi site content.
 *
 * This is the single place to edit copy. Change the email, tagline, sections
 * or ventures here and they update across the whole site. No component holds
 * its own hardcoded marketing text.
 */

export const site = {
  name: "Velocifi",
  legalName: "Velocifi Pty Ltd",
  email: "hello@velocifi.com.au",
  tagline: "Build once. Launch many.",
  year: 2026,
} as const;

export const nav = {
  links: [
    { label: "Platform", href: "#platform" },
    { label: "Ventures", href: "#ventures" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export const hero = {
  eyebrow: "AUTONOMOUS FINANCIAL SERVICES · PRODUCTION HOUSE",
  // The headline period is rendered as a green accent in the component.
  headline: "We build financial ventures that run themselves",
  subline:
    "A founder-owned production house — from thesis to product to capital. The work runs on software, not headcount.",
  cta: { label: "Get in touch", href: "#contact" },
} as const;

export const about = {
  eyebrow: "01 — THE THESIS",
  heading: "Build once. Launch many.",
  body: "Most companies build their technology once and use it once. We built one reusable platform — software that finds customers, makes the decisions, and runs the operations — and launch a portfolio of businesses on top of it. Each launch is faster, leaner, and sharper than the last.",
} as const;

export const platform = {
  eyebrow: "02 — THE PLATFORM",
  heading: "One platform. Many businesses.",
  points: [
    {
      label: "Sales",
      body: "Acquisition, qualification, and conversion. Automated, around the clock.",
    },
    {
      label: "Finance",
      body: "Application, decisioning, compliance, and settlement. Resolved in minutes.",
    },
    {
      label: "Shared infrastructure",
      body: "Compliance, data, and integrations, reused across every venture.",
    },
  ],
} as const;

/** Venture status drives the indicator dot — "Live" is the only one shown in green. */
type VentureStatus = "Live" | "Pre-launch" | "Testing" | "Development";

interface Venture {
  name: string;
  description: string;
  status: VentureStatus;
}

export const ventures = {
  eyebrow: "03 — VENTURES",
  heading: "Our ventures.",
  items: [
    {
      name: "Baserate",
      description:
        "Direct-to-customer car and asset finance. No broker fees, no commissions — just fast, low-cost finance.",
      status: "Pre-launch",
    },
    {
      name: "Insurity",
      description:
        "Fast quotes with no broker fees, for car, home and business insurance.",
      status: "Development",
    },
  ] as Venture[],
  note: "More to come.",
};

export const contact = {
  eyebrow: "04 — CONTACT",
  heading: "Get in touch.",
  body: "For partnership and venture enquiries.",
} as const;
