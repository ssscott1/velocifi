import Hero from "@/components/Hero";
import About from "@/components/About";
import Platform from "@/components/Platform";
import HowItWorks from "@/components/HowItWorks";
import Ventures from "@/components/Ventures";
import Contact from "@/components/Contact";

/**
 * The one-page site. Each band is its own component so sections can later be
 * promoted to dedicated routes (e.g. /ventures, /about) without rework.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Platform />
      <HowItWorks />
      <Ventures />
      <Contact />
    </>
  );
}
