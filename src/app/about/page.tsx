import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "About Dr Jo",
  description:
    "Dr Johannah Slifi: HCPC-registered Educational Psychologist supporting families, schools and young people across Amersham and South Buckinghamshire.",
  alternates: { canonical: "/about" },
};

const journey = [
  {
    period: "2011-2021",
    role: "A decade in schools and alternative provision",
    detail:
      "From SEMH learning mentor to outreach worker to Head of School at an alternative provision for young people experiencing school avoidance and complex needs. The years that shaped how I work now.",
  },
  {
    period: "2021-2023",
    role: "Doctorate, UCL Institute of Education",
    detail:
      "Professional Educational, Child and Adolescent Psychology. Doctoral research focused on emotionally based school avoidance across the primary-to-secondary transition.",
  },
  {
    period: "2023-present",
    role: "Educational Psychologist, Royal Borough of Windsor & Maidenhead",
    detail:
      "Patch-school casework, EHC needs assessment advice, and work with specialist teams supporting early years and unaccompanied young people.",
  },
];

const approach = [
  {
    title: "Collaborative",
    description:
      "I work in close partnership with parents, carers, school staff and the wider team around your child. The best outcomes happen when the adults are joined up.",
  },
  {
    title: "Formulation-led",
    description:
      "I'm interested in the why behind what's happening, not just the what. Understanding the patterns and the context comes first; the recommendations come from there.",
  },
  {
    title: "Evidence-based, plainly explained",
    description:
      "I draw on the best of attachment theory, cognitive-behavioural approaches, solution-focused practice and narrative work. I write reports you'll actually read.",
  },
  {
    title: "Neurodiversity-affirming",
    description:
      "I work in a way that respects how each child's mind works, rather than trying to make them fit a mould that doesn't suit them.",
  },
];

export default function AboutPage() {
  const { practitioner } = siteContent;

  return (
    <>
      <section className="bg-background py-16 md:py-24 lg:py-28">
        <div className="container">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div className="w-full max-w-md lg:max-w-none">
              <AspectRatio
                ratio={4 / 5}
                className="bg-secondary overflow-hidden rounded-3xl"
              >
                <Image
                  src="/jo-portrait.jpg"
                  alt="Dr Johannah Slifi, Educational Psychologist"
                  width={800}
                  height={1000}
                  priority
                  className="h-full w-full object-cover object-center"
                />
              </AspectRatio>
            </div>

            <div className="flex flex-col gap-6">
              <p className="text-primary text-sm font-medium tracking-[0.18em] uppercase">
                About
              </p>
              <h1 className="font-serif text-4xl tracking-tight md:text-5xl lg:text-6xl">
                Hello, I&apos;m Dr Jo
              </h1>
              <p className="text-foreground text-lg leading-relaxed md:text-xl">
                I&apos;m an Educational Psychologist registered with the
                Health and Care Professions Council. I work with children
                and young people aged 0 to 25, and the families, schools
                and professionals around them, across Amersham and South
                Buckinghamshire.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I came to educational psychology after a decade working
                directly with children, in mainstream schools and in
                alternative provision for those who weren&apos;t coping
                with mainstream. That grounded experience shapes how I work
                now: collaboratively, practically, and with deep respect
                for the adults trying to help.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                What I love about this work is that change is possible. My
                doctoral research focused on emotionally based school
                avoidance, an area where families often arrive feeling
                stuck. Time and again, with the right understanding and
                the right plan, things shift.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl lg:text-5xl">
              My journey
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Educational psychology was a deliberate choice, not a first
              step. The years in schools and alternative provision before
              my doctorate are what make my practice what it is today.
            </p>
          </div>

          <ol className="mt-14">
            {journey.map((item, i) => (
              <li key={item.period} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <span className="bg-primary mt-[6px] block size-3 shrink-0 rounded-full" />
                  {i < journey.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="bg-primary/20 my-1 w-0.5 flex-1"
                    />
                  )}
                </div>
                <div className="flex-1 pb-10">
                  <p className="text-primary text-xs font-medium tracking-[0.18em] uppercase">
                    {item.period}
                  </p>
                  <h3 className="font-serif mt-2 text-xl tracking-tight md:text-2xl">
                    {item.role}
                  </h3>
                  <p className="text-muted-foreground mt-2 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl tracking-tight md:text-4xl lg:text-5xl">
              How I work
            </h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Every child and every family is different, so the work always
              starts with listening. The underlying principles, though,
              tend to be consistent.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-10">
            {approach.map((item) => (
              <div key={item.title}>
                <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28 lg:py-32">
        <div className="container">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
                Credentials
              </h2>
              <ul className="mt-8 flex flex-col gap-4">
                <li className="text-foreground/85 flex items-start gap-3 leading-relaxed">
                  <span className="bg-primary mt-2 inline-block size-1.5 shrink-0 rounded-full" />
                  <span>
                    <strong className="text-foreground font-semibold">
                      HCPC Registered
                    </strong>{" "}
                    Practitioner Psychologist
                  </span>
                </li>
                <li className="text-foreground/85 flex items-start gap-3 leading-relaxed">
                  <span className="bg-primary mt-2 inline-block size-1.5 shrink-0 rounded-full" />
                  <span>
                    <strong className="text-foreground font-semibold">
                      Member of the Association of Educational
                      Psychologists (AEP)
                    </strong>
                  </span>
                </li>
                <li className="text-foreground/85 flex items-start gap-3 leading-relaxed">
                  <span className="bg-primary mt-2 inline-block size-1.5 shrink-0 rounded-full" />
                  <span>
                    <strong className="text-foreground font-semibold">
                      Enhanced DBS
                    </strong>
                  </span>
                </li>
                <li className="text-foreground/85 flex items-start gap-3 leading-relaxed">
                  <span className="bg-primary mt-2 inline-block size-1.5 shrink-0 rounded-full" />
                  <span>
                    <strong className="text-foreground font-semibold">
                      Doctorate in Professional Educational, Child and
                      Adolescent Psychology
                    </strong>{" "}
                    (UCL Institute of Education, 2023)
                  </span>
                </li>
                <li className="text-foreground/85 flex items-start gap-3 leading-relaxed">
                  <span className="bg-primary mt-2 inline-block size-1.5 shrink-0 rounded-full" />
                  <span>
                    <strong className="text-foreground font-semibold">
                      First Class BSc (Hons) Psychology
                    </strong>{" "}
                    (The Open University, 2014)
                  </span>
                </li>
                <li className="text-foreground/85 flex items-start gap-3 leading-relaxed">
                  <span className="bg-primary mt-2 inline-block size-1.5 shrink-0 rounded-full" />
                  <span>
                    <strong className="text-foreground font-semibold">
                      Diploma in Coaching with NLP
                    </strong>{" "}
                    (Simply Changing, 2021)
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
                Where I work
              </h2>
              <p className="text-muted-foreground mt-8 leading-relaxed">
                I&apos;m based in Amersham and work with families, schools
                and professionals across South Buckinghamshire:
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-y-2 text-sm">
                {practitioner.areasServed.map((area) => (
                  <li
                    key={area}
                    className="text-foreground/85 flex items-center gap-2"
                  >
                    <span className="bg-primary inline-block size-1 rounded-full" />
                    {area}
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                Areas further afield are sometimes possible after a
                conversation. Sessions can take place in your home, in
                school, in the community, or online, depending on what
                works.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container">
          <div className="border-y py-16 text-center md:py-20">
            <h2 className="font-serif mx-auto max-w-3xl text-3xl tracking-tight md:text-4xl lg:text-5xl">
              If something here speaks to you, I&apos;d love to hear from
              you.
            </h2>
            <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-lg leading-relaxed">
              A free initial conversation, no obligation, just a chance to
              talk through what&apos;s going on.
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
