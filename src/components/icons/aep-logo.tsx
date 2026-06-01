import { readFileSync } from "node:fs";
import { join } from "node:path";

import { cn } from "@/lib/utils";

const rawSvg = readFileSync(
  join(process.cwd(), "public", "accred-aep.svg"),
  "utf-8",
);

const widthMatch = rawSvg.match(/<svg[^>]*\swidth="(\d+(?:\.\d+)?)"/);
const heightMatch = rawSvg.match(/<svg[^>]*\sheight="(\d+(?:\.\d+)?)"/);
const intrinsicWidth = widthMatch ? widthMatch[1] : "1754";
const intrinsicHeight = heightMatch ? heightMatch[1] : "1028";

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

// Replace AEP's deep green (and close variants from the trace) with
// `currentColor` so the parent CSS `color` drives the fill.
inlineSvg = inlineSvg.replace(
  /rgb\(\s*[0-9]{1,2},\s*[5-9][0-9],\s*[0-9]{1,2}\s*\)/g,
  "currentColor",
);

interface AepLogoProps {
  className?: string;
}

/**
 * AEP Member logo, rendered inline as SVG markup.
 * Sized by the wrapper class — pass eg `className="h-24 md:h-32"`.
 */
export function AepLogo({ className }: AepLogoProps) {
  return (
    <span
      role="img"
      aria-label="AEP Member"
      className={cn(
        "text-primary block [&_svg]:block [&_svg]:h-full [&_svg]:w-auto",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: inlineSvg }}
    />
  );
}
