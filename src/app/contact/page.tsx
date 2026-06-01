import { Mail, MapPin, Phone } from "lucide-react";
import type { Metadata } from "next";

import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dr Jo at Steps to Thrive. A free initial conversation, no obligation, in Amersham and across South Buckinghamshire.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const { practitioner } = siteContent;

  return (
    <>
      <section className="bg-background py-16 md:py-24 lg:py-28">
        <div className="container max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-[0.18em] uppercase">
            Contact
          </p>
          <h1 className="font-serif mt-4 text-4xl tracking-tight md:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="text-foreground mt-6 text-lg leading-relaxed md:text-xl">
            Whether you&apos;re at the early-questions stage or you&apos;ve
            been worrying for a while, the first step is just a
            conversation. The initial chat is free and there&apos;s no
            obligation to take anything further.
          </p>
        </div>
      </section>

      <section className="bg-muted/40 py-16 md:py-20">
        <div className="container max-w-3xl">
          <div
            role="note"
            className="border-primary/30 bg-card text-foreground rounded-2xl border p-6 leading-relaxed"
          >
            <p className="font-semibold">In an emergency</p>
            <p className="text-foreground/85 mt-2 text-sm leading-relaxed">
              This site is not monitored for emergencies. If you or your
              child needs urgent help, please contact your GP or NHS 111.
              For immediate danger, call 999. The Samaritans are available
              on 116 123, 24 hours a day.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background py-20 md:py-28">
        <div className="container max-w-3xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <a
              href={`tel:${practitioner.phone.replace(/\s/g, "")}`}
              className="group flex flex-col gap-3"
            >
              <span className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full">
                <Phone className="size-5" />
              </span>
              <h2 className="font-serif text-xl tracking-tight">Phone*</h2>
              <p className="text-foreground/85 leading-relaxed">
                {practitioner.phone}
              </p>
              <span className="text-primary text-sm font-medium group-hover:underline">
                Call now
              </span>
            </a>

            <a
              href={`mailto:${practitioner.email}`}
              className="group flex flex-col gap-3"
            >
              <span className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full">
                <Mail className="size-5" />
              </span>
              <h2 className="font-serif text-xl tracking-tight">Email*</h2>
              <p className="text-foreground/85 leading-relaxed break-words">
                {practitioner.email}
              </p>
              <span className="text-primary text-sm font-medium group-hover:underline">
                Send a message
              </span>
            </a>

            <div className="flex flex-col gap-3">
              <span className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full">
                <MapPin className="size-5" />
              </span>
              <h2 className="font-serif text-xl tracking-tight">Based in</h2>
              <p className="text-foreground/85 leading-relaxed">
                {practitioner.location}
              </p>
              <p className="text-muted-foreground text-sm">
                Working across South Buckinghamshire and online.
              </p>
            </div>
          </div>

          <p className="text-muted-foreground mt-14 text-right text-xs italic">
            * I&apos;ll reply to phone or email enquiries as soon as I
            can.
          </p>
        </div>
      </section>
    </>
  );
}
