import Eyebrow from "./Eyebrow";
import Reveal from "./Reveal";
import { hero } from "@/lib/content";

/**
 * Hero — the brand's dark side. Ink background, Paper text, with the headline's
 * full stop rendered in Signal green to echo the wordmark's "fi".
 */
export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-ink text-paper"
    >
      <div className="mx-auto flex min-h-[88vh] max-w-shell flex-col justify-center px-6 py-32 md:py-40">
        <Reveal>
          <Eyebrow theme="dark">{hero.eyebrow}</Eyebrow>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 max-w-4xl text-balance text-4xl font-bold leading-[1.05] tracking-tightest sm:text-6xl md:text-7xl">
            {hero.headline}
            <span className="text-signal">.</span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/70 md:text-xl">
            {hero.subline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10">
            <a
              href={hero.cta.href}
              className="group inline-flex items-center gap-2 border-b border-b-paper/30 pb-1 text-base font-medium tracking-tight text-paper transition-colors hover:border-b-signal hover:text-signal"
            >
              {hero.cta.label}
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
