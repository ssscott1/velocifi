import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { contact, site } from "@/lib/content";

/** 04 — Contact. The brand's dark side again; a single mailto, no form. */
export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-shell px-6 py-28 md:py-40">
        <Reveal>
          <Eyebrow theme="dark">{contact.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="mt-10 text-4xl font-bold leading-[1.05] tracking-tightest md:text-6xl">
            {contact.heading}
          </h2>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-6 text-lg leading-relaxed text-paper/70 md:text-xl">
            {contact.body}
          </p>
        </Reveal>

        <Reveal delay={200}>
          <a
            href={`mailto:${site.email}`}
            className="group mt-10 inline-flex items-center gap-2 border-b border-b-paper/30 pb-1 text-xl font-medium tracking-tight text-paper transition-colors hover:border-b-signal hover:text-signal md:text-2xl"
          >
            {site.email}
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
