import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Fees",
  description:
    "How fees are agreed at Steps to Thrive: openly, in writing, before any chargeable work begins. No surprises.",
  alternates: { canonical: "/fees" },
};

const steps = [
  {
    number: "01",
    title: "A free initial conversation",
    description:
      "A short call so I can understand what's going on and you can decide whether I'm the right fit. No charge, no obligation.",
  },
  {
    number: "02",
    title: "An agreed plan and fee, in writing",
    description:
      "If we agree to go ahead, you'll receive a short written agreement setting out the scope of the work, the expected timeframe, and the fee.",
  },
  {
    number: "03",
    title: "The work begins",
    description:
      "Sessions, observations, assessment, report-writing, and any follow-up, all in line with the agreed plan.",
  },
  {
    number: "04",
    title: "Invoiced by email, paid by bank transfer",
    description:
      "Invoices are clear and itemised. Payment terms are set out at the start so there are no surprises.",
  },
];

export default function FeesPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-24 lg:py-28">
        <div className="container max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-[0.18em] uppercase">
            Fees
          </p>
          <h1 className="font-serif mt-4 text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Fees are discussed openly, up front.
          </h1>
          <p className="text-foreground mt-6 text-lg leading-relaxed md:text-xl">
            I don&apos;t publish a price list because every piece of work
            is different. A single parent consultation, a full assessment,
            and a school-based training session each carry different costs.
            What I can promise is that the fee will be agreed in writing
            before any chargeable work begins, and that there will be no
            surprises.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl lg:text-5xl">
              How we agree fees
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              The process is the same whether you&apos;re a parent, a
              school, or a professional commissioning a piece of work.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-2 lg:gap-12">
            {steps.map((step) => (
              <div key={step.number} className="flex flex-col gap-4">
                <span className="bg-primary/10 text-primary font-serif flex size-12 items-center justify-center rounded-full text-lg">
                  {step.number}
                </span>
                <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container">
          <div className="border-y py-16 text-center md:py-20">
            <h2 className="font-serif mx-auto max-w-3xl text-3xl tracking-tight md:text-4xl lg:text-5xl">
              Want to talk it through?
            </h2>
            <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-lg leading-relaxed">
              The initial conversation is free and there&apos;s no
              obligation to take anything further.
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
