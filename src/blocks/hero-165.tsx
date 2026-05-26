import Link from "next/link";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Hero165Image {
  src: string;
  alt: string;
}

interface Hero165Props {
  className?: string;
  headline: string;
  subheadline: string;
  cta?: { label: string; href: string };
  images?: [Hero165Image, Hero165Image, Hero165Image];
}

const defaultImages: [Hero165Image, Hero165Image, Hero165Image] = [
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
    alt: "",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    alt: "",
  },
  {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    alt: "",
  },
];

const Hero165 = ({
  className,
  headline,
  subheadline,
  cta,
  images = defaultImages,
}: Hero165Props) => {
  return (
    <section className={cn("bg-background py-12 md:py-20", className)}>
      <div className="container max-w-[98.125rem]">
        <div className="grid grid-cols-1 items-center justify-between gap-14 lg:grid-cols-2">
          <div className="w-full max-w-[41.625rem]">
            <AspectRatio ratio={0.815177479 / 1}>
              <div className="mx-auto grid h-full w-full grid-cols-[14.7%_47.29%_14.7%_14.7%] grid-rows-[34.7%_26.28%_34.7%] gap-x-[2.85%] gap-y-[2.32%]">
                <div className="col-[1/3] row-[1/3]">
                  <div className="bg-secondary h-full w-full overflow-hidden rounded-[2vw] lg:rounded-[1.2vw] xl:rounded-2xl">
                    <img
                      src={images[0].src}
                      alt={images[0].alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="col-[3/5] row-[2/3]">
                  <div className="bg-accent h-full w-full overflow-hidden rounded-[2vw] lg:rounded-[1.2vw] xl:rounded-2xl">
                    <img
                      src={images[1].src}
                      alt={images[1].alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="col-[2/4] row-[3/4]">
                  <div className="bg-muted h-full w-full overflow-hidden rounded-[2vw] lg:rounded-[1.2vw] xl:rounded-2xl">
                    <img
                      src={images[2].src}
                      alt={images[2].alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </AspectRatio>
          </div>
          <div className="flex w-full max-w-[31.25rem] flex-col gap-8 lg:max-w-full">
            <h1 className="font-serif text-foreground text-5xl tracking-tight lg:text-6xl xl:text-7xl">
              {headline}
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed lg:text-2xl">
              {subheadline}
            </p>
            {cta && (
              <div>
                <Button size="lg" className="rounded-full" asChild>
                  <Link href={cta.href}>{cta.label}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Hero165 };
