import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { MainNav } from "@/components/main-nav";
import { author, nav, type Book } from "@/lib/content";

export const btn = (variant: "default" | "outline" = "default") =>
  cn(buttonVariants({ variant }), "h-auto rounded-md px-7 py-3 text-lg");

function NavLinks({ className }: { className?: string }) {
  return (
    <nav aria-label="Main" className={cn("flex flex-wrap gap-x-6 gap-y-2 text-lg", className)}>
      {nav.map((n) => (
        <Link key={n.href} href={n.href} className="underline-offset-4 hover:text-primary hover:underline">{n.label}</Link>
      ))}
    </nav>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-4 lg:flex-row lg:justify-between">
        <Link href="/" className="font-heading text-3xl font-semibold">{author.name}</Link>
        <MainNav />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-primary px-5 py-12 text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <p className="font-heading text-3xl font-semibold">{author.name}</p>
        <NavLinks className="justify-center [&_a:hover]:text-primary-foreground" />
        <p className="text-base opacity-90">
          © 2026 {author.name} · <a href={`mailto:${author.email}`} className="underline underline-offset-4">{author.email}</a>
        </p>
      </div>
    </footer>
  );
}

// Full-bleed scene photo behind a section, with a dark overlay so white text stays readable.
// The parent needs `relative overflow-hidden`; put content in a `relative` wrapper above it.
export function SceneBg({ src, preload, className = "bg-black/60" }: { src: string; preload?: boolean; className?: string }) {
  return (
    <>
      <Image src={src} alt="" fill sizes="100vw" preload={preload} className="object-cover" />
      <div aria-hidden className={cn("absolute inset-0", className)} />
    </>
  );
}

// White button with the Amazon logo, e.g. "Paperback on [amazon]".
export function AmazonButton({ href, label, className }: { href: string; label: string; className?: string }) {
  const format = label.replace(/\s*on Amazon$/i, "");
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex items-center gap-2.5 rounded-md border border-black/10 bg-white px-6 py-3 text-lg font-medium text-foreground shadow-sm hover:bg-neutral-100", className)}
    >
      <span>{format && format !== label ? `${format} on` : "Buy on"}</span>
      <Image src="/amazon-logo.png" alt="Amazon" width={102} height={31} className="mt-1.5 h-6 w-auto" />
    </a>
  );
}

// Title block for inner pages. With `image`, it sits on a scene photo.
export function PageTitle({ eyebrow, title, intro, image }: { eyebrow?: string; title: string; intro?: string; image?: string }) {
  return (
    <div className={cn("relative overflow-hidden px-5 py-16 text-center md:py-24", image ? "text-white" : "bg-muted")}>
      {image && <SceneBg src={image} preload />}
      {/* No fade-in: page titles are above the fold and should show immediately. */}
      <div className="relative">
        {eyebrow && <p className={cn("text-lg font-semibold", image ? "uppercase tracking-wide" : "text-primary")}>{eyebrow}</p>}
        <h1 className="mt-2 font-heading text-5xl leading-tight md:text-6xl">{title}</h1>
        {intro && <p className={cn("mx-auto mt-4 max-w-2xl text-xl", image ? "opacity-90" : "text-muted-foreground")}>{intro}</p>}
      </div>
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
