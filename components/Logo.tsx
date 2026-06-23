import { site } from "@/lib/content";

type LogoTheme = "light" | "dark";

interface LogoProps {
  /** Show the wordmark beside the tile mark (the horizontal lockup). */
  withWordmark?: boolean;
  /**
   * "light" = on a Paper/light surface ("Veloci" renders Ink).
   * "dark"  = on an Ink/dark surface ("Veloci" renders Paper/white).
   */
  theme?: LogoTheme;
  /** Tile size in pixels. The wordmark scales relative to this. */
  size?: number;
  className?: string;
}

/**
 * The Velocifi mark + wordmark, built entirely as inline SVG so it stays crisp
 * at any size and themes cleanly on light or dark surfaces.
 *
 * - Mark: a forward-leaning italic "V" inside a rounded-square (app-surface) tile.
 * - Wordmark: "Veloci" in Ink/Paper, "fi" in Signal green.
 */
export default function Logo({
  withWordmark = true,
  theme = "light",
  size = 32,
  className,
}: LogoProps) {
  const velociColor = theme === "dark" ? "#F6F7F5" : "#11141A";
  // The tile is always Ink with a Paper "V" — its app-surface look is constant.
  const tileFill = "#11141A";
  const vFill = "#F6F7F5";

  return (
    <span
      className={className}
      style={{ display: "inline-flex", alignItems: "center", gap: size * 0.34 }}
      role="img"
      aria-label={site.name}
    >
      {/* ---- Tile-V mark ---- */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        aria-hidden="true"
        focusable="false"
        style={{ display: "block", flex: "none" }}
      >
        {/* Rounded-square tile: radius ~28% of tile size reads as an app surface. */}
        <rect x="0" y="0" width="100" height="100" rx="28" fill={tileFill} />
        {/* Forward-leaning italic V, optically centred within the tile. */}
        <path
          d="M30 28 L50 70 L70 28 L58 28 L48 51 L41 28 Z"
          fill={vFill}
          transform="skewX(-9) translate(8 0)"
        />
      </svg>

      {/* ---- Wordmark ---- */}
      {withWordmark && (
        <svg
          height={size * 0.74}
          viewBox="0 0 300 60"
          aria-hidden="true"
          focusable="false"
          style={{ display: "block", overflow: "visible" }}
        >
          <text
            x="0"
            y="46"
            fontFamily='"Helvetica Neue", Helvetica, Arial, system-ui, sans-serif'
            fontSize="56"
            fontWeight="700"
            letterSpacing="-2.2"
          >
            <tspan fill={velociColor}>Veloci</tspan>
            <tspan fill="#00C46E">fi</tspan>
          </text>
        </svg>
      )}
    </span>
  );
}
