"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import Logo from "@/components/layout/logo";
import { cn } from "@/lib/utils";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Fees", href: "/fees" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <header className="relative z-50">
      <div className="bg-background relative flex h-[var(--header-height)] flex-col items-center justify-center gap-4 px-4 py-4 lg:gap-5 lg:py-6">
        <Link href="/" aria-label="Steps to Thrive home">
          <Logo />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7 xl:gap-9">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-foreground/65 text-xs font-medium tracking-[0.18em] uppercase transition-colors",
                    "hover:text-foreground",
                    pathname === item.href && "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          className="text-muted-foreground absolute top-1/2 right-4 flex size-9 -translate-y-1/2 items-center justify-center rounded-sm border lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <div className="relative h-3 w-4">
            <span
              aria-hidden="true"
              className={cn(
                "absolute left-0 block h-0.5 w-full rounded-full bg-current transition duration-300 ease-in-out",
                isMenuOpen
                  ? "top-1/2 -translate-y-1/2 rotate-45"
                  : "top-0",
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "absolute top-1/2 left-0 block h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition duration-300 ease-in-out",
                isMenuOpen && "opacity-0",
              )}
            />
            <span
              aria-hidden="true"
              className={cn(
                "absolute left-0 block h-0.5 w-full rounded-full bg-current transition duration-300 ease-in-out",
                isMenuOpen
                  ? "top-1/2 -translate-y-1/2 -rotate-45"
                  : "bottom-0",
              )}
            />
          </div>
        </button>
      </div>

      <div
        className={cn(
          "bg-background/95 fixed inset-0 -z-10 flex flex-col backdrop-blur-md transition-all duration-500 ease-out lg:hidden",
          "pt-[var(--header-height)]",
          isMenuOpen
            ? "translate-x-0 opacity-100"
            : "pointer-events-none translate-x-full opacity-0",
        )}
      >
        <nav className="container py-10">
          <ul className="flex flex-col items-start gap-6">
            {NAV_LINKS.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-2xl font-medium",
                    pathname === item.href && "font-semibold",
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
