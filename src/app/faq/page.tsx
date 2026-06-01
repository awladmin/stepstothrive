import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Common questions about working with Dr Jo at Steps to Thrive, from how to get started to what happens in an assessment.",
  alternates: { canonical: "/faq" },
};

const groups = [
  {
    title: "Getting started",
    items: [
      {
        question: "How do I know if we need an Educational Psychologist?",
        answer:
          "If you have concerns about how your child is coping with school, with relationships, with regulation or with learning, and those concerns aren't shifting with the support already in place, an EP can help. The initial conversation is free, so you don't have to be sure before getting in touch. If it turns out we're not the right fit, I'll say so and try to point you somewhere helpful.",
      },
      {
        question: "Do I need a referral from my GP or school?",
        answer:
          "No. You can contact me directly, as a parent, carer, school or other professional. I'm happy to liaise with your child's school or other professionals where it's helpful, with your written consent.",
      },
      {
        question: "What ages do you work with?",
        answer:
          "Children and young people from birth to 25, and the families, schools and professionals around them.",
      },
    ],
  },
  {
    title: "How the work runs",
    items: [
      {
        question: "How long does an assessment take?",
        answer:
          "It varies depending on what's needed. A full assessment usually involves several sessions across a few weeks, including direct work with your child, conversations with you, possible school observation, and a written report. A consultation can be a single conversation, or a short series.",
      },
      {
        question: "Where do sessions take place?",
        answer:
          "In your home, in school, in the community, or online, depending on what's most useful. I'm based in Amersham and work across South Buckinghamshire.",
      },
      {
        question: "Will my child have to talk about difficult things?",
        answer:
          "Sessions are paced carefully and led by what your child is comfortable with. A lot of useful information comes from observation, play, and structured tasks rather than direct questioning. Nothing is forced.",
      },
      {
        question: "Will my child's school be involved?",
        answer:
          "Only with your agreement. School involvement is often genuinely helpful because so much of a child's life happens there. I'll always discuss what's being shared with whom, and why, before anything goes anywhere.",
      },
    ],
  },
  {
    title: "Confidentiality and records",
    items: [
      {
        question: "Is what we discuss confidential?",
        answer:
          "Yes, with the standard limits that apply to any psychology practice. Information may need to be shared without consent in a small number of circumstances, mainly safeguarding concerns or a serious risk to life. If that ever applies, I'll tell you what is being shared, with whom and why, unless doing so would itself increase risk. This is covered in detail in the Terms of Service.",
      },
      {
        question: "What records do you keep?",
        answer:
          "Clinical records are kept securely in line with HCPC guidance. You have the right to ask for a copy of the records held about you or your child. Full detail is in the Privacy Policy.",
      },
    ],
  },
  {
    title: "Fees",
    items: [
      {
        question: "What does it cost?",
        answer:
          "Fees aren't published online because every piece of work is different. They're agreed openly in writing before any chargeable work begins, with no surprises. The Fees page has more detail on how this works.",
      },
      {
        question: "Are there free initial conversations?",
        answer:
          "Yes. The first call is free and there's no obligation to take anything further.",
      },
    ],
  },
  {
    title: "About my practice",
    items: [
      {
        question: "Are you regulated?",
        answer:
          "Yes. I'm registered with the Health and Care Professions Council (HCPC) as a Practitioner Psychologist, a member of the Association of Educational Psychologists (AEP), and I hold an Enhanced DBS. The About page lists my full credentials.",
      },
      {
        question: "Do you work with schools as well as families?",
        answer:
          "Yes, both. I currently work with patch schools through the Royal Borough of Windsor & Maidenhead alongside this independent practice. The Schools page has more on what that looks like.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <section className="bg-background py-16 md:py-24 lg:py-28">
        <div className="container max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-[0.18em] uppercase">
            FAQs
          </p>
          <h1 className="font-serif mt-4 text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Common questions
          </h1>
          <p className="text-foreground mt-6 text-lg leading-relaxed md:text-xl">
            A few of the questions that come up most often. If yours
            isn&apos;t here, please get in touch.
          </p>
        </div>
      </section>

      <section className="bg-background pb-20 md:pb-28 lg:pb-32">
        <div className="container max-w-3xl">
          <div className="flex flex-col gap-14">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="font-serif text-2xl tracking-tight md:text-3xl">
                  {group.title}
                </h2>
                <Accordion type="single" collapsible className="mt-6 w-full">
                  {group.items.map((item, i) => (
                    <AccordionItem
                      key={i}
                      value={`${group.title}-${i}`}
                    >
                      <AccordionTrigger className="font-serif text-base md:text-lg">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20 md:py-28">
        <div className="container">
          <div className="text-center">
            <h2 className="font-serif mx-auto max-w-3xl text-3xl tracking-tight md:text-4xl">
              Still got a question?
            </h2>
            <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-lg leading-relaxed">
              Get in touch and I&apos;ll come back to you as soon as I
              can.
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
