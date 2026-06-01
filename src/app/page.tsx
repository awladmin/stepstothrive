import type { Metadata } from "next";

import { BioSection } from "@/blocks/bio-section";
import { AepLogo } from "@/components/icons/aep-logo";
import { HcpcLogo } from "@/components/icons/hcpc-logo";
import { CtaSection } from "@/blocks/cta-section";
import { FaqSection } from "@/blocks/faq-section";
import { Feature42 } from "@/blocks/feature-42";
import { HeroSplit } from "@/blocks/hero-split";
import { ProcessSteps } from "@/blocks/process-steps";
import { SpecialismsBento } from "@/blocks/specialisms-bento";
import { TestimonialsSection } from "@/blocks/testimonials-section";
import { TrustStrip } from "@/blocks/trust-strip";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Steps to Thrive: child & educational psychology in Amersham",
  description: siteContent.home.hero.subheadline,
  alternates: { canonical: "/" },
};

export default function Home() {
  const {
    hero,
    audiences,
    specialisms,
    bio,
    whatToExpect,
    faq,
    testimonials,
    cta,
  } = siteContent.home;

  const { practitioner } = siteContent;

  return (
    <>
      <HeroSplit
        headline={hero.headline}
        subheadline={hero.subheadline}
        cta={{ label: hero.cta, href: hero.ctaHref }}
        image={{
          src: "/stepstothrive-graphic.png",
          alt: "Illustration of children climbing steps toward a flourishing tree",
        }}
      />

      <TrustStrip
        items={[
          {
            node: <HcpcLogo className="h-[5.4rem] md:h-[7.2rem]" />,
            label: `HCPC ${practitioner.hcpcNumber}`,
            href: "https://www.hcpc-uk.org/",
          },
          {
            node: <AepLogo className="h-[3.456rem] md:h-[4.608rem]" />,
            label: "AEP Member",
            href: "https://www.aep.org.uk/",
          },
          {
            icon: "user-check",
            label: "Enhanced DBS",
            href: "https://www.gov.uk/government/organisations/disclosure-and-barring-service",
          },
          {
            icon: "graduation",
            label: "Doctorate, UCL IOE",
            href: "https://www.ucl.ac.uk/ioe/",
          },
        ]}
      />

      <Feature42
        heading={audiences.title}
        subtitle={audiences.subtitle}
        items={audiences.items.map((item) => ({
          title: item.title,
          description: item.description,
          href: item.href,
          icon: item.icon,
        }))}
      />

      <BioSection
        title={bio.title}
        intro={bio.intro}
        narrative={bio.narrative}
        cta={{ label: bio.cta, href: bio.ctaHref }}
        image={{
          src: "/jo-desk.jpg",
          alt: "Dr Johannah Slifi at her desk",
        }}
      />

      <SpecialismsBento
        title={specialisms.title}
        subtitle={specialisms.subtitle}
        items={specialisms.items}
      />

      <ProcessSteps
        title={whatToExpect.title}
        subtitle={whatToExpect.subtitle}
        steps={whatToExpect.steps}
      />

      <FaqSection
        title={faq.title}
        subtitle={faq.subtitle}
        items={faq.items}
      />

      <TestimonialsSection
        title={testimonials.title}
        subtitle={testimonials.subtitle}
        items={testimonials.items}
      />

      <CtaSection
        headline={cta.headline}
        description={cta.description}
        buttonText={cta.buttonText}
        buttonHref={cta.buttonHref}
      />
    </>
  );
}
