import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BioSectionProps {
  className?: string;
  eyebrow?: string;
  title: string;
  intro: string;
  narrative: string;
  credentials?: string[];
  cta?: { label: string; href: string };
  image?: { src: string; alt: string };
}

const BioSection = ({
  className,
  eyebrow = "About me",
  title,
  intro,
  narrative,
  credentials,
  cta,
  image,
}: BioSectionProps) => {
  return (
    <section className={cn("bg-background py-20 md:py-28 lg:py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <span
              aria-hidden="true"
              className="bg-primary/10 absolute -top-4 -left-4 size-24 rounded-full lg:-top-6 lg:-left-6 lg:size-32"
            />
            <AspectRatio
              ratio={4 / 5}
              className="bg-secondary relative overflow-hidden rounded-3xl shadow-xl shadow-primary/5"
            >
              {image ? (
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-center"
                />
              ) : (
                <div className="text-secondary-foreground/50 flex h-full w-full items-center justify-center p-8 text-center text-sm">
                  Photo of Dr Jo
                </div>
              )}
            </AspectRatio>
          </div>

          <div className="flex flex-col gap-6">
            <p className="text-primary text-sm font-medium tracking-[0.18em] uppercase">
              {eyebrow}
            </p>
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
            <p className="text-foreground border-primary/30 border-l-2 pl-5 text-lg leading-relaxed">
              {intro}
            </p>
            <p className="text-muted-foreground leading-relaxed">{narrative}</p>

            {credentials && credentials.length > 0 && (
              <ul className="flex flex-col gap-2 pt-2">
                {credentials.map((c, i) => (
                  <li
                    key={i}
                    className="text-foreground/80 flex items-center gap-2.5 text-sm"
                  >
                    <span className="bg-primary inline-block size-1.5 rounded-full" />
                    {c}
                  </li>
                ))}
              </ul>
            )}

            {cta && (
              <div className="pt-2">
                <Button size="lg" className="rounded-full" asChild>
                  <Link href={cta.href}>
                    {cta.label}
                    <ArrowUpRight className="ml-1.5 size-4" />
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { BioSection };
