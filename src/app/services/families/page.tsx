import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Working with families",
  description:
    "Consultation, assessment and coaching for parents and carers navigating challenges with their child. Across Amersham and South Buckinghamshire.",
  alternates: { canonical: "/services/families" },
};

const concerns = [
  "Difficult behaviour at home or at school, and how to make sense of it",
  "Social and emotional barriers to learning",
  "Whether or not to be worried about something you've noticed",
  "How to talk to a child or young person about big or complex feelings",
  "Supporting a child who is neurodivergent, or might be",
  "Parenting in the modern world: screens, social media, transitions",
  "Requests for psychological reports as part of an EHC needs assessment",
];

const formats = [
  {
    title: "Parent consultation",
    description:
      "A single conversation, or a short series, to think through what's happening. Often the right starting point, and sometimes all that's needed.",
  },
  {
    title: "Educational psychology assessment",
    description:
      "A fuller piece of work involving direct sessions with your child, conversations with you, observation where useful, and a written report with practical recommendations.",
  },
  {
    title: "Coaching and ongoing support",
    description:
      "Where it's helpful, continued time alongside you as you put recommendations into practice, including liaising with school.",
  },
];

export default function FamiliesPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-24 lg:py-28">
        <div className="container max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-[0.18em] uppercase">
            For families
          </p>
          <h1 className="font-serif mt-4 text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Working with families
          </h1>
          <p className="text-foreground mt-6 text-lg leading-relaxed md:text-xl">
            Most parents who get in touch are at a point where what
            they&apos;ve already tried isn&apos;t shifting things, and the
            worry is starting to crowd out everything else. The first
            conversation is free, no commitment. From there, the shape of
            the work depends on what would actually help.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28 lg:py-32">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            What parents and carers tend to bring
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Every family is different, but some themes come up again and
            again:
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {concerns.map((concern, i) => (
              <li
                key={i}
                className="text-foreground/85 flex items-start gap-3 leading-relaxed"
              >
                <span className="bg-primary mt-2.5 inline-block size-1.5 shrink-0 rounded-full" />
                <span>{concern}</span>
              </li>
            ))}
          </ul>
          <p className="text-muted-foreground mt-8 leading-relaxed">
            If something you&apos;re facing isn&apos;t on this list, that
            doesn&apos;t mean it isn&apos;t the right place. The free
            initial chat is genuinely there for working out whether and
            how I can help.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl lg:text-5xl">
              How the work runs
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Three common shapes a piece of work takes:
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3 lg:gap-10">
            {formats.map((format) => (
              <div
                key={format.title}
                className="bg-card flex flex-col gap-3 rounded-2xl border p-7"
              >
                <h3 className="font-serif text-xl tracking-tight">
                  {format.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {format.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28 lg:py-32">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Where we meet
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Sessions can take place wherever works best for your child and
            family. That might be in your home, in their school, in a
            community venue, or online by video call. I&apos;ll suggest
            what tends to work well for the kind of work we&apos;re doing,
            and we&apos;ll agree it together.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container">
          <div className="border-y py-16 text-center md:py-20">
            <h2 className="font-serif mx-auto max-w-3xl text-3xl tracking-tight md:text-4xl lg:text-5xl">
              Ready to talk?
            </h2>
            <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-lg leading-relaxed">
              Get in touch and I&apos;ll come back to you as soon as I
              can.
            </p>
            <Button size="lg" className="mt-8 rounded-full" asChild>
              <Link href="/contact">
                Book a free initial chat
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
