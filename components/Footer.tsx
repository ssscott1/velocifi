import Logo from "./Logo";
import { site } from "@/lib/content";

/** Minimal footer: mark + mono meta. Sits on the Ink contact band's edge. */
export default function Footer() {
  return (
    <footer className="border-t border-t-[var(--hairline)] bg-paper">
      <div className="mx-auto flex max-w-shell flex-col items-start gap-6 px-6 py-12 sm:flex-row sm:items-center sm:justify-between">
        <Logo withWordmark={false} theme="light" size={24} />
        <p className="font-mono text-xs uppercase tracking-label text-slate">
          © {site.year} {site.legalName}
        </p>
      </div>
    </footer>
  );
}
