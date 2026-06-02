import {
  Award,
  BadgeCheck,
  GraduationCap,
  type LucideIcon,
  ShieldCheck,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  "user-check": UserCheck,
  badge: BadgeCheck,
  graduation: GraduationCap,
  award: Award,
};

interface TrustItem {
  label: string;
  /** Lucide icon key for the themed pill style */
  icon?: string;
  /** Path to a logo image (e.g. /accred-hcpc.png) — used instead of the themed pill */
  imageSrc?: string;
  /** Alt text for the image (defaults to label) */
  imageAlt?: string;
  /** Rendered ReactNode (inline SVG component) — preferred over imageSrc */
  node?: ReactNode;
  /** Optional external link; opens in a new tab */
  href?: string;
}

interface TrustStripProps {
  className?: string;
  eyebrow?: string;
  items: TrustItem[];
}

const TrustStrip = ({
  className,
  eyebrow = "Accreditations",
  items,
}: TrustStripProps) => {
  return (
    <section
      className={cn(
        "bg-muted/40 border-y py-10 md:py-14",
        className,
      )}
      aria-label="Professional credentials"
    >
      <div className="container">
        {eyebrow && (
          <p className="text-primary text-center text-xs font-medium tracking-[0.18em] uppercase">
            {eyebrow}
          </p>
        )}
        <ul className="mt-8 grid grid-cols-2 place-items-center gap-x-6 gap-y-6 md:flex md:flex-wrap md:items-center md:justify-center md:gap-x-12 md:gap-y-4">
          {items.map((item, i) => {
            // Inline SVG / ReactNode variant: real vector markup in the page
            if (item.node) {
              return (
                <li key={i} className="flex items-center">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.label} (opens in a new tab)`}
                      className="inline-block transition-opacity hover:opacity-80"
                    >
                      {item.node}
                    </a>
                  ) : (
                    item.node
                  )}
                </li>
              );
            }
            // Image src variant: <Image> wrapper for static PNG/SVG files
            if (item.imageSrc) {
              const img = (
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt ?? item.label}
                  width={400}
                  height={400}
                  className="h-24 w-auto object-contain transition-opacity hover:opacity-80 md:h-32"
                />
              );
              return (
                <li key={i} className="flex items-center">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.label} (opens in a new tab)`}
                    >
                      {img}
                    </a>
                  ) : (
                    img
                  )}
                </li>
              );
            }
            // Icon-above-text variant: bare, stacked for visual height to
            // balance against the inline SVG logos.
            const Icon = item.icon ? iconMap[item.icon] : ShieldCheck;
            const pill = (
              <span className="text-primary hover:text-primary/80 inline-flex flex-col items-center gap-2 transition-colors">
                <Icon
                  className="size-11 shrink-0 drop-shadow-sm md:size-14"
                  strokeWidth={1.4}
                  aria-hidden="true"
                />
                <span className="text-[0.65rem] font-semibold tracking-[0.18em] uppercase md:text-xs">
                  {item.label}
                </span>
              </span>
            );
            return (
              <li key={i}>
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.label} (opens in a new tab)`}
                  >
                    {pill}
                  </a>
                ) : (
                  pill
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export { TrustStrip };
