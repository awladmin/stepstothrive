import { ArrowRight, Sprout } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CtaSectionProps {
  className?: string;
  headline: string;
  description?: string;
  buttonText: string;
  buttonHref: string;
}

const CtaSection = ({
  className,
  headline,
  description,
  buttonText,
  buttonHref,
}: CtaSectionProps) => {
  return (
    <section className={cn("bg-background py-20 md:py-28", className)}>
      <div className="container">
        <div className="bg-primary text-primary-foreground relative isolate overflow-hidden rounded-3xl px-8 py-20 text-center md:px-16 md:py-24 lg:py-28">
          <div
            aria-hidden="true"
            className="bg-primary-foreground/5 absolute -top-32 -right-32 size-96 rounded-full"
          />
          <div
            aria-hidden="true"
            className="bg-primary-foreground/5 absolute -bottom-40 -left-40 size-[28rem] rounded-full"
          />

          <Sprout
            aria-hidden="true"
            className="text-primary-foreground/70 relative mx-auto size-10"
            strokeWidth={1.5}
          />

          <h2 className="font-serif relative mx-auto mt-6 max-w-3xl text-3xl leading-tight tracking-tight md:text-4xl lg:text-5xl">
            {headline}
          </h2>
          {description && (
            <p className="text-primary-foreground/85 relative mx-auto mt-5 max-w-xl text-lg leading-relaxed">
              {description}
            </p>
          )}
          <Button
            size="lg"
            variant="secondary"
            className="relative mt-10 rounded-full text-base"
            asChild
          >
            <Link href={buttonHref}>
              {buttonText}
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export { CtaSection };
