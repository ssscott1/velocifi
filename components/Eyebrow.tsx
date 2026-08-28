interface EyebrowProps {
  children: React.ReactNode;
  /** "dark" tunes the dot/text for use on an Ink background. */
  theme?: "light" | "dark";
}

/**
 * Mono, uppercase section label with a single small Signal-green dot —
 * e.g. "01 — THE PLATFORM". One of the few places green is allowed to appear.
 */
export default function Eyebrow({ children, theme = "light" }: EyebrowProps) {
  return (
    <p
      className={`flex items-center gap-2.5 font-mono text-xs uppercase tracking-label ${
        theme === "dark" ? "text-paper/70" : "text-slate"
      }`}
    >
      <span
        aria-hidden="true"
        className="inline-block h-1.5 w-1.5 flex-none rounded-[1px] bg-signal"
      />
      {children}
    </p>
  );
}
