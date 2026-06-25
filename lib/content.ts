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
  eyebrow: "AI-NATIVE FINANCIAL SERVICES · PRODUCTION HOUSE",
  // The headline period is rendered as a green accent in the component.
  headline: "We build AI-native financial ventures",
  subline:
    "A founder-owned production house — from thesis to product to capital.",
  cta: { label: "Get in touch", href: "#contact" },
} as const;

export const about = {
  eyebrow: "01 — THE THESIS",
  heading: "Build once. Launch many.",
  body: "Most companies build their technology once and use it once. We build a reusable Sales AI and Finance AI platform — and launch a portfolio of businesses on top of it. Each launch is faster, leaner, and sharper than the last.",
} as const;

export const platform = {
  eyebrow: "02 — THE PLATFORM",
  heading: "One platform. Many businesses.",
  points: [
    {
      label: "Sales AI",
      body: "Acquisition, qualification, and conversion.",
    },
    {
      label: "Finance AI",
      body: "Application, decisioning, compliance, and settlement.",
    },
    {
      label: "Shared infrastructure",
      body: "Compliance, data, and integrations, reused across every venture.",
    },
  ],
} as const;

/** Venture status drives the indicator dot — "Live" is the only one shown in green. */
type VentureStatus = "Live" | "Testing" | "Development";

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
        "Direct-to-consumer, brokerless car finance. Australia.",
      status: "Testing",
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
