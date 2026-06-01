import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  className?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  items: FaqItem[];
  contactHref?: string;
}

const FaqSection = ({
  className,
  eyebrow = "Common questions",
  title,
  subtitle,
  items,
  contactHref = "/contact",
}: FaqSectionProps) => {
  return (
    <section className={cn("bg-background py-20 md:py-28 lg:py-32", className)}>
      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <p className="text-primary text-sm font-medium tracking-[0.18em] uppercase">
              {eyebrow}
            </p>
            <h2 className="font-serif mt-4 text-3xl tracking-tight md:text-4xl lg:text-5xl">
              {title}
            </h2>
            {subtitle && (
              <p className="text-muted-foreground mt-5 leading-relaxed">
                {subtitle}{" "}
                <Link
                  href={contactHref}
                  className="text-primary font-medium underline-offset-4 hover:underline"
                >
                  Get in touch
                </Link>
                .
              </p>
            )}
          </div>

          <Accordion type="single" collapsible className="flex w-full flex-col gap-3">
            {items.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="bg-card hover:border-primary/40 rounded-2xl border px-6 transition-colors data-[state=open]:border-primary/40 data-[state=open]:shadow-sm last:border-b"
              >
                <AccordionTrigger className="font-serif py-5 text-left text-base hover:no-underline md:text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 text-base leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export { FaqSection };
