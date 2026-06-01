import { Quote } from "lucide-react";

import { cn } from "@/lib/utils";

interface TestimonialItem {
  quote: string;
  attribution: string;
}

interface TestimonialsSectionProps {
  className?: string;
  title: string;
  subtitle?: string;
  items: TestimonialItem[];
}

const TestimonialsSection = ({
  className,
  title,
  subtitle,
  items,
}: TestimonialsSectionProps) => {
  if (items.length === 0) return null;

  return (
    <section className={cn("bg-muted/40 py-20 md:py-28 lg:py-32", className)}>
      <div className="container">
        <div className="max-w-2xl">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        {items.length > 0 && (
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {items.map((item, i) => (
              <figure
                key={i}
                className="bg-card flex h-full flex-col gap-5 rounded-2xl border p-7"
              >
                <Quote className="text-primary/40 size-7" />
                <blockquote className="flex-1 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="text-muted-foreground text-sm font-medium">
                  {item.attribution}
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export { TestimonialsSection };
