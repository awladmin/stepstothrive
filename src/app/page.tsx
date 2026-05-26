import type { Metadata } from "next";

import { Feature42 } from "@/blocks/feature-42";
import { Hero165 } from "@/blocks/hero-165";
import { siteContent } from "@/content/siteContent";

export const metadata: Metadata = {
  title: "Steps to Thrive — Child & Educational Psychology in Amersham",
  description: siteContent.home.hero.subheadline,
  alternates: { canonical: "/" },
};

export default function Home() {
  const { hero, audiences } = siteContent.home;

  return (
    <>
      <Hero165
        headline={hero.headline}
        subheadline={hero.subheadline}
        cta={{ label: hero.cta, href: hero.ctaHref }}
      />

      <Feature42
        heading={audiences.title}
        subtitle={audiences.subtitle}
        items={audiences.items.map((item) => ({
          title: item.title,
          description: item.description,
          href: item.href,
        }))}
      />
    </>
  );
}
