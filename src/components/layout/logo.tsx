import Image from "next/image";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Steps to Thrive"
      width={1483}
      height={935}
      priority
      className={cn("h-16 w-auto md:h-20 lg:h-24", className)}
    />
  );
}
