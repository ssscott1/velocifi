import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import Section from "./Section";
import { about } from "@/lib/content";

/** 01 — The thesis. */
export default function About() {
  return (
    <Section id="about">
      <Reveal>
        <Eyebrow>{about.eyebrow}</Eyebrow>
      </Reveal>

      <div className="mt-10 grid gap-10 md:grid-cols-12 md:gap-16">
        <Reveal delay={80} className="md:col-span-5">
          <h2 className="text-3xl font-bold leading-[1.08] tracking-tightest md:text-5xl">
            {about.heading}
          </h2>
        </Reveal>

        <Reveal delay={140} className="md:col-span-7">
          <p className="max-w-2xl text-lg leading-relaxed text-slate md:text-xl">
            {about.body}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
