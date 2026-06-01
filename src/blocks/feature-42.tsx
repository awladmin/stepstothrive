import {
  ArrowUpRight,
  GraduationCap,
  Handshake,
  type LucideIcon,
  Users,
} from "lucide-react";
import Link from "next/link";

import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  users: Users,
  "graduation-cap": GraduationCap,
  handshake: Handshake,
};

interface Feature42Item {
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
  icon?: string;
}

interface Feature42Props {
  className?: string;
  eyebrow?: string;
  heading: string;
  subtitle?: string;
  items: Feature42Item[];
}

const Feature42 = ({
  className,
  eyebrow = "Who I work with",
  heading,
  subtitle,
  items,
}: Feature42Props) => {
  return (
    <section className={cn("bg-background py-20 md:py-28 lg:py-32", className)}>
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-medium tracking-[0.18em] uppercase">
            {eyebrow}
          </p>
          <h2 className="font-serif mt-4 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            {heading}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {items.map((item, i) => {
            const Icon = item.icon ? iconMap[item.icon] : undefined;
            const inner = (
              <div className="group bg-card hover:border-primary/40 relative flex h-full flex-col gap-5 rounded-3xl border p-7 transition-all hover:-translate-y-1 hover:shadow-md lg:p-8">
                {Icon && (
                  <span className="bg-primary/10 text-primary flex size-12 items-center justify-center rounded-full">
                    <Icon className="size-5" strokeWidth={2} />
                  </span>
                )}
                <div>
                  <h3 className="font-serif text-xl tracking-tight md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {item.href && (
                  <span className="text-primary mt-auto inline-flex items-center gap-1.5 text-sm font-medium">
                    {item.ctaLabel ?? "Read more"}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                )}
              </div>
            );
            return item.href ? (
              <Link key={i} href={item.href} className="block">
                {inner}
              </Link>
            ) : (
              <div key={i}>{inner}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { Feature42 };
