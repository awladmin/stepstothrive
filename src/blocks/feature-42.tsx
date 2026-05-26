import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

interface Feature42Item {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
}

interface Feature42Props {
  heading: string;
  subtitle?: string;
  items: Feature42Item[];
  className?: string;
}

const Feature42 = ({
  heading,
  subtitle,
  items,
  className,
}: Feature42Props) => {
  return (
    <section className={cn("py-20 md:py-28 lg:py-32", className)}>
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        <div className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          {items.map((item, i) => {
            const inner = (
              <div className="group h-full">
                <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {item.description}
                </p>
                {item.href && (
                  <span className="text-primary mt-5 inline-flex items-center gap-1.5 text-sm font-medium">
                    {item.ctaLabel ?? "Read more"}
                    <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </div>
            );
            return item.href ? (
              <Link key={i} href={item.href} className="block">
                {inner}
              </Link>
            ) : (
              <div key={i}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Feature42 };
