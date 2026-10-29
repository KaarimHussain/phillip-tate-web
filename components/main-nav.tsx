"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { nav } from "@/lib/content";

// Header links with the current page underlined; "Contact Us" stands out as a button.
export function MainNav() {
  const path = usePathname();
  const isActive = (href: string) => (href === "/" ? path === "/" : !href.includes("#") && path.startsWith(href));

  return (
    <nav aria-label="Main" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-lg">
      {nav.map((n) =>
        n.href === "/contact" ? (
          <Link
            key={n.href}
            href={n.href}
            aria-current={isActive(n.href) ? "page" : undefined}
            className="rounded-md bg-primary px-5 py-2 font-medium text-primary-foreground hover:bg-primary/90"
          >
            {n.label}
          </Link>
        ) : (
          <Link
            key={n.href}
            href={n.href}
            aria-current={isActive(n.href) ? "page" : undefined}
            className={cn(
              "border-b-2 py-1 font-medium hover:border-primary hover:text-primary",
              isActive(n.href) ? "border-primary text-primary" : "border-transparent",
            )}
          >
            {n.label}
          </Link>
        ),
      )}
    </nav>
  );
}
