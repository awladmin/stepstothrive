import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface HeroSplitProps {
  className?: string;
  headline: string;
  subheadline: ReactNode;
  cta?: { label: string; href: string };
  /** Optional hero illustration. Falls back to a placeholder panel. */
  image?: { src: string; alt: string };
}

const HeroSplit = ({
  className,
  headline,
  subheadline,
  cta,
  image,
}: HeroSplitProps) => {
  return (
    <section className={cn("bg-background py-12 md:py-20", className)}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-8">
            <h1 className="font-serif text-foreground text-4xl tracking-tight md:text-5xl xl:text-6xl">
              {headline}
            </h1>
            <p className="text-muted-foreground max-w-xl text-lg leading-relaxed md:text-xl">
              {subheadline}
            </p>
            {cta && (
              <div>
                <Button size="lg" className="rounded-full" asChild>
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              </div>
            )}
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <AspectRatio
              ratio={4 / 5}
              className="bg-secondary relative overflow-hidden rounded-3xl shadow-xl shadow-primary/5"
            >
              {image ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 90vw"
                  className="object-cover object-center"
                />
              ) : (
                <div className="text-secondary-foreground/50 flex h-full w-full items-center justify-center p-8 text-center text-sm">
                  Steps to Thrive hero illustration
                </div>
              )}
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroSplit };
