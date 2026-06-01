import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "How Steps to Thrive works with families, schools and professionals across South Buckinghamshire, plus the specialist areas that come up most often.",
  alternates: { canonical: "/services" },
};

const audiences = [
  {
    title: "Working with families",
    description:
      "Direct support for parents and carers navigating challenges with their child or young person. Consultation, assessment, coaching.",
    href: "/services/families",
  },
  {
    title: "Working with schools",
    description:
      "Educational psychology advice, training, reflective supervision and assessment for school staff, SENCos, ELSAs and senior leaders.",
    href: "/services/schools",
  },
  {
    title: "EBSA: school avoidance",
    description:
      "If mornings have become the hardest part of the day, you're in the right place. EBSA is the area I have researched most deeply.",
    href: "/services/ebsa",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-24 lg:py-28">
        <div className="container max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-[0.18em] uppercase">
            Services
          </p>
          <h1 className="font-serif mt-4 text-4xl tracking-tight md:text-5xl lg:text-6xl">
            How I work
          </h1>
          <p className="text-foreground mt-6 text-lg leading-relaxed md:text-xl">
            Wherever you&apos;re coming from, the starting point is a free
            conversation so I can understand what&apos;s going on. After
            that, the shape of the work depends on what would actually help.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
            {audiences.map((audience) => (
              <Link
                key={audience.title}
                href={audience.href}
                className="bg-card group flex h-full flex-col gap-4 rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-md lg:p-8"
              >
                <h2 className="font-serif text-xl tracking-tight md:text-2xl">
                  {audience.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {audience.description}
                </p>
                <span className="text-primary mt-auto inline-flex items-center gap-1.5 text-sm font-medium">
                  Learn more
                  <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="font-serif mx-auto max-w-3xl text-3xl tracking-tight md:text-4xl lg:text-5xl">
              Not sure what fits?
            </h2>
            <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-lg leading-relaxed">
              The first conversation is free and there&apos;s no obligation
              to take anything further. Often it&apos;s the quickest way to
              work out whether and how I can help.
            </p>
            <Button size="lg" className="mt-8 rounded-full" asChild>
              <Link href="/contact">
                Get in touch
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
