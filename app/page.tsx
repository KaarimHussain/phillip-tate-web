import type { Metadata } from "next";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";
import { BookCover, Prose, btn } from "@/components/site";
import {
  aboutAuthor, aboutBook, author, book, books, closing, life, press, reviews, welcome,
} from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

function Section({ id, eyebrow, title, children, muted }: {
  id?: string; eyebrow?: string; title?: string; children: React.ReactNode; muted?: boolean;
}) {
  return (
    <section id={id} className={cn("scroll-mt-32 px-5 py-20 md:py-24", muted && "bg-muted")}>
      <Reveal className="mx-auto max-w-3xl">
        {eyebrow && <p className="text-lg font-semibold text-primary">{eyebrow}</p>}
        {title && <h2 className="mt-2 font-heading text-4xl leading-tight md:text-5xl">{title}</h2>}
        <div className="mt-6">{children}</div>
      </Reveal>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <main>
        {/* Hero */}
        <section className="px-5 py-20 text-center md:py-28">
          <h1 className="font-heading text-5xl leading-tight md:text-7xl">{book.title}</h1>
          <p className="mt-3 text-2xl text-muted-foreground">{book.subtitle}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={`/books/${book.slug}`} className={btn("outline")}>Learn more</Link>
            <a href={book.buyLinks[0].href} className={btn()}>Buy now</a>
          </div>
          <div className="mt-14 flex items-end justify-center gap-4">
            <Reveal delay={0.15}><BookCover book={book} className="w-56 md:w-72" preload /></Reveal>
          </div>
        </section>

        <Section eyebrow={welcome.eyebrow} muted>
          <Prose paragraphs={welcome.paragraphs} closing={welcome.closing} />
        </Section>

        <Section id="author" eyebrow={aboutAuthor.eyebrow}>
          <Image src={author.photo} alt={`Portrait of ${author.name}`} width={640} height={600} className="mx-auto w-full max-w-sm rounded-lg" />
          <h2 className="mt-10 font-heading text-4xl md:text-5xl">{author.name}</h2>
          <div className="mt-5"><Prose paragraphs={aboutAuthor.paragraphs} /></div>
          <Link href={aboutAuthor.href} className={cn(btn(), "mt-8")}>See my books</Link>
        </Section>


        <Section id="book" eyebrow={aboutBook.eyebrow}>
          <h2 className="font-heading text-4xl leading-tight md:text-5xl">{book.title}</h2>
          <p className="mt-2 text-xl text-muted-foreground">{book.subtitle}</p>
          <div className="mt-8"><Prose paragraphs={aboutBook.paragraphs} /></div>
        </Section>

        <Section eyebrow="Books available now" title="All of Philip's books" muted>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
            {books.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.08}>
                <Link href={`/books/${b.slug}`} className="group block text-center">
                  <BookCover book={b} className="w-full transition-transform duration-300 group-hover:-translate-y-1" />
                  <p className="mt-3 font-heading text-lg leading-snug group-hover:underline">{b.title}</p>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link href="/books" className={cn(btn(), "mt-10")}>View all books</Link>
        </Section>

        <Section title={life.title}>
          <Prose paragraphs={life.paragraphs} />
        </Section>

        {reviews.length > 0 && <section className="bg-muted px-5 py-20 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-lg font-semibold text-primary">Book reviews</p>
            <h2 className="mt-2 font-heading text-4xl md:text-5xl">What readers are saying</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {reviews.map((r) => (
                <article key={r.title} className="rounded-lg border bg-card p-7">
                  <h3 className="font-heading text-2xl font-semibold leading-snug">{r.title}</h3>
                  <div className="mt-3 flex gap-1 text-amber-500" aria-label="5 out of 5 stars">
                    {[...Array(5)].map((_, i) => <Star key={i} className="size-6 fill-current" />)}
                  </div>
                  <p className="mt-4 text-lg leading-relaxed">{r.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>}

        <Section id="press" eyebrow={press.eyebrow}>
          <div className="flex flex-wrap items-end justify-center gap-6">
            <Image src={author.photo} alt="" width={640} height={600} className="w-full max-w-xs rounded-lg" />
            <BookCover book={book} className="w-36" />
          </div>
          <p className="mt-10 font-heading text-2xl font-semibold">{press.source}</p>
          <div className="mt-4"><Prose paragraphs={press.paragraphs} /></div>
          <a href={press.href} target="_blank" rel="noopener noreferrer" className={cn(btn(), "mt-8")}>Read the article</a>
        </Section>

        <Section id="contact" eyebrow={closing.eyebrow} muted>
          <Prose paragraphs={closing.paragraphs} closing={closing.closing} />
          <Link href="/contact" className={cn(btn(), "mt-8")}>Connect now</Link>
        </Section>
      </main>

    </>
  );
}
