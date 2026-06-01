import {
  BookOpen,
  Compass,
  Heart,
  type LucideIcon,
  Sparkles,
  Sprout,
} from "lucide-react";

import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  compass: Compass,
  sparkles: Sparkles,
  heart: Heart,
  "book-open": BookOpen,
  sprout: Sprout,
};

interface SpecialismItem {
  title: string;
  description: string;
  icon?: string;
  featured?: boolean;
}

interface SpecialismsBentoProps {
  className?: string;
  title: string;
  subtitle?: string;
  items: SpecialismItem[];
}

const SpecialismsBento = ({
  className,
  title,
  subtitle,
  items,
}: SpecialismsBentoProps) => {
  return (
    <section className={cn("bg-muted/40 py-20 md:py-28 lg:py-32", className)}>
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-medium tracking-[0.18em] uppercase">
            What I work on
          </p>
          <h2 className="font-serif mt-4 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = item.icon ? iconMap[item.icon] : undefined;
            return (
              <div
                key={i}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-3xl p-7 transition-all duration-300 lg:p-8",
                  item.featured
                    ? "bg-primary text-primary-foreground lg:col-span-2 lg:row-span-1 lg:p-10"
                    : "bg-card hover:border-primary/40 border hover:-translate-y-1 hover:shadow-lg",
                )}
              >
                {item.featured && (
                  <div
                    aria-hidden="true"
                    className="bg-primary-foreground/5 absolute -right-16 -bottom-20 size-56 rounded-full"
                  />
                )}

                {Icon && (
                  <span
                    className={cn(
                      "relative flex items-center justify-center rounded-full",
                      item.featured
                        ? "bg-primary-foreground/15 text-primary-foreground size-14"
                        : "bg-primary/10 text-primary size-12",
                    )}
                  >
                    <Icon
                      className={item.featured ? "size-6" : "size-5"}
                      strokeWidth={item.featured ? 1.75 : 2}
                    />
                  </span>
                )}

                <h3
                  className={cn(
                    "font-serif relative mt-6 tracking-tight",
                    item.featured ? "text-2xl lg:text-3xl" : "text-xl",
                  )}
                >
                  {item.title}
                </h3>
                <p
                  className={cn(
                    "relative mt-3 leading-relaxed",
                    item.featured
                      ? "text-primary-foreground/85 max-w-xl text-base lg:text-lg"
                      : "text-muted-foreground",
                  )}
                >
                  {item.description}
                </p>

                {item.featured && (
                  <p className="text-primary-foreground/70 relative mt-6 text-xs font-medium tracking-[0.18em] uppercase">
                    Doctoral specialism
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { SpecialismsBento };
