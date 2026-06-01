import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Emotionally Based School Avoidance (EBSA)",
  description:
    "If mornings have become the hardest part of the day, you're in the right place. Dr Jo's doctoral research focused on emotionally based school avoidance: practical, formulation-led EP support for families and schools.",
  alternates: { canonical: "/services/ebsa" },
};

const principles = [
  {
    title: "It is not defiance",
    description:
      "What looks like a child refusing to go to school is almost always a child who is struggling to manage how school feels. The starting point is understanding why, not how to make them go.",
  },
  {
    title: "It is not truancy",
    description:
      "EBSA is a different pattern, and it needs a different response. Reward charts and consequences alone tend to make things worse because they miss the underlying anxiety.",
  },
  {
    title: "It is rarely about one thing",
    description:
      "There are usually several threads at play: sensory, social, academic, family, transitions, friendships, sleep, identity. Useful work means looking at all of them together.",
  },
  {
    title: "The adults need support too",
    description:
      "Parents arrive exhausted. Teachers and SENCos are often holding many similar situations at once. A return-to-school plan only works if the adults are joined up and looked after.",
  },
];

const stages = [
  {
    number: "01",
    title: "Understanding what's going on",
    description:
      "I gather a full picture: from you, from your child where appropriate, from school. The work begins with formulation, not a fix.",
  },
  {
    number: "02",
    title: "A shared plan",
    description:
      "A written formulation and plan, agreed between you, school and any other professionals involved. Everyone knows what they're doing and why.",
  },
  {
    number: "03",
    title: "Putting it into practice",
    description:
      "Implementation takes time. I stay involved through ongoing consultation, school liaison, or direct sessions, so the plan flexes as things shift.",
  },
];

export default function EbsaPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-24 lg:py-28">
        <div className="container max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-[0.18em] uppercase">
            Specialism
          </p>
          <h1 className="font-serif mt-4 text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Emotionally Based School Avoidance
          </h1>
          <p className="text-foreground mt-6 text-lg leading-relaxed md:text-xl">
            If mornings have become the hardest part of the day, if your
            child is in real distress about going to school and
            you&apos;ve run out of things to try, you&apos;re in the right
            place. Emotionally based school avoidance (EBSA) is the area I
            have researched most deeply, and the one I&apos;m most often
            asked to help with.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28 lg:py-32">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            What I&apos;ve learned about EBSA
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            My doctoral research focused on EBSA across the primary-to-
            secondary transition. Years of doing this work, alongside
            running a school for young people who weren&apos;t coping in
            mainstream, taught me a few things that shape how I approach
            every case:
          </p>

          <div className="mt-12 flex flex-col gap-10">
            {principles.map((principle) => (
              <div key={principle.title}>
                <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                  {principle.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {principle.description}
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
              How the work unfolds
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              EBSA work is not a quick fix and I won&apos;t pretend
              otherwise. What it can be is a clear, steady process that
              takes the pressure off the immediate question of
              &ldquo;how do we get them in tomorrow?&rdquo; and replaces
              it with something workable.
            </p>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3 lg:gap-12">
            {stages.map((stage) => (
              <div key={stage.number} className="flex flex-col gap-4">
                <span className="bg-primary/10 text-primary font-serif flex size-12 items-center justify-center rounded-full text-lg">
                  {stage.number}
                </span>
                <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                  {stage.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28 lg:py-32">
        <div className="container max-w-3xl">
          <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
            For families and schools, together
          </h2>
          <p className="text-muted-foreground mt-5 leading-relaxed">
            EBSA almost always works best when home and school are on the
            same page. I&apos;m happy to work directly with both
            simultaneously, with everyone&apos;s agreement, so we&apos;re
            not having parallel conversations that don&apos;t quite meet.
            If you&apos;re a parent reading this and your school
            isn&apos;t yet on board, that&apos;s normal. Bringing them in
            is part of what the work involves.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container">
          <div className="border-y py-16 text-center md:py-20">
            <h2 className="font-serif mx-auto max-w-3xl text-3xl tracking-tight md:text-4xl lg:text-5xl">
              If this sounds like where you are, let&apos;s talk.
            </h2>
            <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-lg leading-relaxed">
              The first conversation is free and there&apos;s no
              obligation. You don&apos;t need a plan before getting in
              touch. That&apos;s what the call is for.
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
