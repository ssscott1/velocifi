interface SectionProps {
  id: string;
  children: React.ReactNode;
  /** Draw a hairline divider along the top edge. */
  divider?: boolean;
  className?: string;
}

/**
 * Standard content band: shared max-width, generous vertical rhythm and an
 * optional hairline top divider. Keeps spacing consistent across sections.
 */
export default function Section({
  id,
  children,
  divider = false,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${
        divider ? "border-t border-t-[var(--hairline)]" : ""
      } ${className ?? ""}`}
    >
      <div className="mx-auto max-w-shell px-6 py-24 md:py-36">{children}</div>
    </section>
  );
}
