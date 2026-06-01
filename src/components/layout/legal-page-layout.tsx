import { cn } from "@/lib/utils";

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}

export function LegalPageLayout({
  title,
  lastUpdated,
  intro,
  children,
  className,
}: LegalPageLayoutProps) {
  return (
    <article className={cn("py-16 md:py-24 lg:py-28", className)}>
      <div className="container max-w-3xl">
        <header className="mb-10">
          <h1 className="font-serif text-4xl tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="text-muted-foreground mt-4 text-sm">
            Last updated: {lastUpdated}
          </p>
          {intro && (
            <p className="text-foreground mt-6 text-lg leading-relaxed">
              {intro}
            </p>
          )}
        </header>

        <div className="prose prose-neutral max-w-none [&_a]:text-primary [&_a]:font-medium [&_a]:underline-offset-4 hover:[&_a]:underline [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:tracking-tight [&_h2]:mt-12 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:tracking-tight [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:leading-relaxed [&_p]:text-foreground/85 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-2 [&_li]:leading-relaxed [&_li]:text-foreground/85">
          {children}
        </div>
      </div>
    </article>
  );
}
