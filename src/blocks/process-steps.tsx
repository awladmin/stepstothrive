import { cn } from "@/lib/utils";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  className?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  steps: ProcessStep[];
}

const ProcessSteps = ({
  className,
  eyebrow = "How it works",
  title,
  subtitle,
  steps,
}: ProcessStepsProps) => {
  return (
    <section className={cn("bg-muted/40 py-20 md:py-28 lg:py-32", className)}>
      <div className="container">
        <div className="max-w-2xl">
          <p className="text-primary text-sm font-medium tracking-[0.18em] uppercase">
            {eyebrow}
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

        <ol className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <li
              key={i}
              className="group bg-card hover:border-primary/40 relative flex h-full flex-col gap-4 rounded-2xl border p-7 transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <span className="text-primary/15 group-hover:text-primary/25 font-serif absolute top-5 right-6 text-6xl leading-none tracking-tight transition-colors">
                {step.number}
              </span>
              <h3 className="font-serif relative mt-2 text-xl tracking-tight md:text-2xl">
                {step.title}
              </h3>
              <p className="text-muted-foreground relative leading-relaxed">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export { ProcessSteps };
