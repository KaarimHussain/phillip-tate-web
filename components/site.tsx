import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { author, nav, type Book } from "@/lib/content";

export const btn = (variant: "default" | "outline" = "default") =>
  cn(buttonVariants({ variant }), "h-auto rounded-md px-7 py-3 text-lg");

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-5 py-4 text-center">
        <Link href="/" className="font-heading text-3xl font-semibold md:text-4xl">{author.name}</Link>
        <p className="text-base text-muted-foreground">{author.roles}</p>
        <nav aria-label="Main" className="mt-3 flex flex-wrap justify-center gap-x-7 gap-y-2 text-lg">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="underline-offset-4 hover:text-primary hover:underline">{n.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t px-5 py-8 text-center text-lg text-muted-foreground">
      © 2026 {author.name} · <a href={`mailto:${author.email}`} className="underline underline-offset-4">{author.email}</a>
    </footer>
  );
}

// Title block for inner pages.
export function PageTitle({ eyebrow, title, intro }: { eyebrow?: string; title: string; intro?: string }) {
  return (
    <div className="bg-muted px-5 py-16 text-center md:py-20">
      <Reveal>
        {eyebrow && <p className="text-lg font-semibold text-primary">{eyebrow}</p>}
        <h1 className="mt-2 font-heading text-5xl leading-tight md:text-6xl">{title}</h1>
        {intro && <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">{intro}</p>}
      </Reveal>
    </div>
  );
}

// ponytail: grey boxes stand in for photos; swap each for next/image once real files exist.
export function Placeholder({ label, className }: { label: string; className?: string }) {
  return (
    <div className={cn("mx-auto flex items-center justify-center rounded-lg bg-muted text-lg text-muted-foreground", className)}>
      {label}
    </div>
  );
}

export function Prose({ paragraphs, closing }: { paragraphs: string[]; closing?: string }) {
  return (
    <div className="space-y-5 text-xl leading-relaxed">
      {paragraphs.map((p) => <p key={p}>{p}</p>)}
      {closing && <p className="font-heading text-2xl font-semibold">{closing}</p>}
    </div>
  );
}

export function BookCover({ book, className, preload }: { book: Book; className?: string; preload?: boolean }) {
  if (book.cover) {
    return (
      <div className={cn("relative aspect-[2/3] overflow-hidden rounded-r-md shadow-xl", className)}>
        <Image src={book.cover} alt={`Cover of ${book.title}`} fill sizes="300px" preload={preload} className="object-cover" />
      </div>
    );
  }
  // ponytail: drawn cover for books we have no cover image for yet.
  return (
    <div className={cn("aspect-[2/3] rounded-r-md bg-primary p-5 text-center text-primary-foreground shadow-xl", className)}>
      <div className="flex h-full flex-col justify-between border border-white/30 p-3">
        <p className="text-sm tracking-widest uppercase">{author.name}</p>
        <p className="font-heading text-2xl leading-tight">{book.title}</p>
        <p className="text-sm tracking-widest uppercase">{book.subtitle}</p>
      </div>
    </div>
  );
}

// Structured data for search engines. `<` is escaped so content can't break out of the script tag.
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
