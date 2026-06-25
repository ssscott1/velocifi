import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import Section from "./Section";
import { ventures } from "@/lib/content";

/** 03 — Ventures. Baserate listed with a live status dot. */
export default function Ventures() {
  return (
    <Section id="ventures" divider>
      <Reveal>
        <Eyebrow>{ventures.eyebrow}</Eyebrow>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-10 text-3xl font-bold leading-[1.08] tracking-tightest md:text-5xl">
          {ventures.heading}
        </h2>
      </Reveal>

      <ul className="mt-16">
        {ventures.items.map((item, i) => (
          <Reveal key={item.name} delay={120 + i * 80}>
            <li className="flex flex-col gap-3 border-t border-t-[var(--hairline)] py-8 md:flex-row md:items-baseline md:justify-between md:gap-10">
              <div className="max-w-2xl">
                <h3 className="text-xl font-bold tracking-tight md:text-2xl">
                  {item.name}
                </h3>
                <p className="mt-2 text-base leading-relaxed text-slate">
                  {item.description}
                </p>
              </div>
              {item.status && (
                <span className="inline-flex flex-none items-center gap-2 font-mono text-xs uppercase tracking-label text-ink">
                  {/* Green dot reserved for "Live"; in-progress statuses use a muted dot. */}
                  <span
                    aria-hidden="true"
                    className={`inline-block h-1.5 w-1.5 rounded-full ${
                      item.status === "Live" ? "bg-signal" : "bg-slate"
                    }`}
                  />
                  {item.status}
                </span>
              )}
            </li>
          </Reveal>
        ))}
      </ul>

      <Reveal delay={200}>
        <p className="border-t border-t-[var(--hairline)] pt-8 font-mono text-xs uppercase tracking-label text-slate">
          {ventures.note}
        </p>
      </Reveal>
    </Section>
  );
}
