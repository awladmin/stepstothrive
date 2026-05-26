import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-serif text-xl tracking-tight">
              Steps to Thrive
            </p>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              Educational psychology for children, young people, families
              and schools. Amersham and Buckinghamshire.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase">
              Accreditations
            </p>
            <p className="text-muted-foreground mt-3 text-sm">
              HCPC Registered Educational Psychologist
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase">
              Get in touch
            </p>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-foreground mt-3 inline-block text-sm transition-colors"
            >
              Contact Dr Jo
            </Link>
          </div>
        </div>

        <div className="text-muted-foreground mt-10 flex flex-col gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Steps to Thrive. Dr Johannah
            Slifi.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacy-policy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
