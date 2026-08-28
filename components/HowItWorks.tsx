import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import Section from "./Section";
import { howItWorks } from "@/lib/content";

/** 03 — How it works. The customer journey through the Velocifi engine. */
export default function HowItWorks() {
  return (
    <Section id="how-it-works" divider>
      <Reveal>
        <Eyebrow>{howItWorks.eyebrow}</Eyebrow>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-10 max-w-3xl text-balance text-3xl font-bold leading-[1.08] tracking-tightest md:text-5xl">
          {howItWorks.heading}
        </h2>
      </Reveal>

      <Reveal delay={140}>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate">
          {howItWorks.intro}
        </p>
      </Reveal>

      <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {howItWorks.steps.map((step, i) => (
          <Reveal
            key={step.label}
            delay={160 + i * 80}
            className="border-t border-t-[var(--hairline)] pt-6"
          >
            <li>
              <p className="font-mono text-xs uppercase tracking-label text-slate">
                {step.label}
              </p>
              <h3 className="mt-4 text-lg font-bold tracking-tight">
                {step.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-slate">
                {step.body}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
