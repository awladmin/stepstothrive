import { readFileSync } from "node:fs";
import { join } from "node:path";

import { cn } from "@/lib/utils";

// Read the traced SVG once at server start.
const rawSvg = readFileSync(
  join(process.cwd(), "public", "accred-hcpc.svg"),
  "utf-8",
);

// Capture the intrinsic dimensions from the source SVG so we can inject a
// viewBox. Without viewBox, removing width/height makes the SVG render its
// paths at raw pixel coordinates (massive and clipped).
const widthMatch = rawSvg.match(/<svg[^>]*\swidth="(\d+(?:\.\d+)?)"/);
const heightMatch = rawSvg.match(/<svg[^>]*\sheight="(\d+(?:\.\d+)?)"/);
const intrinsicWidth = widthMatch ? widthMatch[1] : "343";
const intrinsicHeight = heightMatch ? heightMatch[1] : "351";

// Replace the <svg> opening tag: strip width/height, inject viewBox if
// missing, and add preserveAspectRatio so it scales cleanly.
let inlineSvg = rawSvg.replace(/<svg([^>]*)>/, (_match, attrs: string) => {
  let cleaned = attrs
    .replace(/\swidth="[^"]*"/g, "")
    .replace(/\sheight="[^"]*"/g, "");
  if (!/\sviewBox=/.test(cleaned)) {
    cleaned += ` viewBox="0 0 ${intrinsicWidth} ${intrinsicHeight}"`;
  }
  if (!/\spreserveAspectRatio=/.test(cleaned)) {
    cleaned += ' preserveAspectRatio="xMidYMid meet"';
  }
  return `<svg${cleaned}>`;
});

// Replace HCPC's dark blue (and any close variants from the trace) with
// `currentColor` so the colour is driven by the parent's CSS `color`.
// Whites stay white.
inlineSvg = inlineSvg.replace(
  /rgb\(\s*1[567],\s*6[789],\s*12[01]\s*\)/g,
  "currentColor",
);

interface HcpcLogoProps {
  className?: string;
}

/**
 * HCPC Registered logo, rendered inline as SVG markup (not via <img>).
 * Sized by the wrapper class — pass eg `className="h-24 md:h-32"`.
 */
export function HcpcLogo({ className }: HcpcLogoProps) {
  return (
    <span
      role="img"
      aria-label="HCPC Registered"
      className={cn(
        "text-primary block [&_svg]:block [&_svg]:h-full [&_svg]:w-auto",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: inlineSvg }}
    />
  );
}
