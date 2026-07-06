import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import Section from "./Section";
import { platform } from "@/lib/content";

/** 02 — The platform. Three hairline-separated points, no icons. */
export default function Platform() {
  return (
    <Section id="platform" divider>
      <Reveal>
        <Eyebrow>{platform.eyebrow}</Eyebrow>
      </Reveal>

      <Reveal delay={80}>
        <h2 className="mt-10 max-w-2xl text-3xl font-bold leading-[1.08] tracking-tightest md:text-5xl">
          {platform.heading}
        </h2>
      </Reveal>

      <Reveal delay={140}>
        <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate">
          {platform.intro}
        </p>
      </Reveal>

      <div className="mt-16 grid gap-px md:grid-cols-3">
        {platform.points.map((point, i) => (
          <Reveal
            key={point.label}
            delay={120 + i * 80}
            className="border-t border-t-[var(--hairline)] pt-6 md:pr-10"
          >
            <p className="font-mono text-xs uppercase tracking-label text-ink">
              {point.label}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              {point.body}
            </p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
