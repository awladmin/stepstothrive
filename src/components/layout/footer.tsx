import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Instagram", href: "#", icon: Instagram },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-muted/40 border-t">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-xl tracking-tight">
              Steps to Thrive
            </p>
            <p className="text-muted-foreground mt-3 max-w-xs text-sm leading-relaxed">
              Educational psychology for children, young people, families
              and schools. Amersham and South Buckinghamshire.
            </p>
            <p className="text-muted-foreground mt-4 text-xs leading-relaxed">
              HCPC Registered PYL038416 &middot; AEP Member &middot; Enhanced DBS
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase">
              Site
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Dr Jo
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ebsa"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  EBSA support
                </Link>
              </li>
              <li>
                <Link
                  href="/fees"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Fees
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-[0.18em] uppercase">
              Get in touch
            </p>
            <ul className="mt-4 flex flex-col gap-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="tel:07956724357"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  07956 724357
                </a>
              </li>
              <li>
                <a
                  href="mailto:jo@stepstothrive.co.uk"
                  className="text-muted-foreground hover:text-foreground break-words transition-colors"
                >
                  jo@stepstothrive.co.uk
                </a>
              </li>
            </ul>

            <ul className="mt-6 flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={`Steps to Thrive on ${label}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-background text-muted-foreground hover:text-primary hover:border-primary/40 border-border flex size-10 items-center justify-center rounded-full border transition-colors"
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-muted-foreground mt-10 flex flex-col gap-3 border-t pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Steps to Thrive. Dr Johannah
            Slifi.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/cookies"
              className="hover:text-foreground transition-colors"
            >
              Cookies
            </Link>
            <Link
              href="/complaints"
              className="hover:text-foreground transition-colors"
            >
              Complaints
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
