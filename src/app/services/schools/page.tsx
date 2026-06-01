import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Working with schools",
  description:
    "Educational psychology advice, assessment, training and reflective supervision for primary and secondary schools across South Buckinghamshire.",
  alternates: { canonical: "/services/schools" },
};

const offers = [
  {
    title: "Casework and assessment",
    description:
      "Cognitive and learning assessments, formulation, classroom observations and written EP advice, including for EHC needs assessments.",
  },
  {
    title: "Consultation",
    description:
      "Joint thinking with SENCos and class teachers about a particular child, group, or pattern that's emerging in the setting.",
  },
  {
    title: "Reflective supervision",
    description:
      "Regular protected time for ELSAs, pastoral leads and senior staff. Confidential, restorative, and grounded in practice.",
  },
  {
    title: "Training and knowledge exchange",
    description:
      "Bespoke staff training on EBSA, attachment, neurodivergence, emotional regulation, literacy difficulties, school readiness, and more.",
  },
];

const commissioning = [
  {
    title: "Ongoing partnership",
    description:
      "A block of EP time across the academic year or by term, covering whatever mix of consultation, assessment, training and supervision your setting needs.",
  },
  {
    title: "Project work",
    description:
      "A defined piece of work. For example, designing a return-to-school pathway for a child with EBSA, or running a series of staff training sessions on a specific theme.",
  },
  {
    title: "In response to need",
    description:
      "When a situation arises and you need EP input quickly. Happy to talk through what's possible.",
  },
];

export default function SchoolsPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-24 lg:py-28">
        <div className="container max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-[0.18em] uppercase">
            For schools
          </p>
          <h1 className="font-serif mt-4 text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Working with schools
          </h1>
          <p className="text-foreground mt-6 text-lg leading-relaxed md:text-xl">
            Before training as an Educational Psychologist I led a school
            for children experiencing emotionally based school avoidance,
            and spent years as a learning mentor and outreach worker in
            mainstream and alternative settings. The aim of this practice
            is to be the kind of EP I wish I&apos;d had on speed-dial back
            then: practical, present, and genuinely useful.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl lg:text-5xl">
              What I offer schools
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Most schools mix and match these depending on the term and
              what&apos;s coming up.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
            {offers.map((offer) => (
              <div
                key={offer.title}
                className="bg-card flex flex-col gap-3 rounded-2xl border p-7"
              >
                <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                  {offer.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {offer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl lg:text-5xl">
              How schools commission this work
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Three common structures. Happy to talk through which would
              fit your setting.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3 lg:gap-10">
            {commissioning.map((option) => (
              <div key={option.title}>
                <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                  {option.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28 lg:py-32">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            Knowledge exchange, not delivery
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            Training that lands changes practice. Sessions are
            collaborative, grounded in your setting&apos;s actual
            challenges, and designed to leave staff with something they
            can put into practice the next day. I&apos;m as interested in
            what your team already knows and does well as I am in what
            I&apos;m bringing in.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container">
          <div className="border-y py-16 text-center md:py-20">
            <h2 className="font-serif mx-auto max-w-3xl text-3xl tracking-tight md:text-4xl lg:text-5xl">
              Want to discuss what your school needs?
            </h2>
            <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-lg leading-relaxed">
              The initial conversation is free. Worth a call before the
              start of next term.
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
