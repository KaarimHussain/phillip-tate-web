import type { Metadata } from "next";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { HeroCarousel } from "@/components/hero-carousel";
import { Reveal } from "@/components/reveal";
import { AmazonButton, BookCover, Prose, SceneBg, btn } from "@/components/site";
import {
  aboutAuthor, aboutBook, author, book, books, closing, life, press, reviews, welcome,
} from "@/lib/content";

export const metadata: Metadata = { alternates: { canonical: "/" } };

// Light-on-dark buttons for the coloured bands.
const btnLight = "inline-flex items-center justify-center rounded-md bg-white px-7 py-3 text-lg font-medium text-foreground hover:bg-white/90";

function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn("text-lg font-semibold tracking-wide text-primary uppercase", className)}>{children}</p>;
}

// Image on one side, text on the other; `flip` puts the image on the right. Stacks on small screens.
function Row({ media, children, flip, id }: { media: React.ReactNode; children: React.ReactNode; flip?: boolean; id?: string }) {
  return (
    <div id={id} className="mx-auto grid max-w-6xl scroll-mt-32 items-center gap-10 md:grid-cols-2 md:gap-16">
      <Reveal className={cn("flex justify-center", flip && "md:order-2")}>{media}</Reveal>
      <Reveal delay={0.1}>{children}</Reveal>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <h1 className="sr-only">Philip Tate, author of Blue Ridge mountain tales, mysteries, and more</h1>
      <HeroCarousel books={books} />

      {/* Welcome, on white */}
      <section className="px-5 py-20 md:py-28">
        <Row
          flip
          media={
            <div className="relative h-80 w-72 md:h-96 md:w-80">
              {books.slice(0, 3).map((b, i) => (
                <BookCover
                  key={b.slug}
                  book={b}
                  className={cn("absolute w-44 md:w-52", ["left-0 top-6 -rotate-6", "right-0 top-6 rotate-6", "left-1/2 top-0 -translate-x-1/2"][i])}
                />
              ))}
            </div>
          }
        >
          <Eyebrow>{welcome.eyebrow}</Eyebrow>
          <div className="mt-4"><Prose paragraphs={welcome.paragraphs} closing={welcome.closing} /></div>
        </Row>
      </section>

      {/* Author, on a mint band like the reference site */}
      <section className="bg-mint px-5 py-20 md:py-28">
        <Row id="author" media={<Image src={author.photo} alt={`Portrait of ${author.name}`} width={640} height={600} className="w-full max-w-md rounded-lg shadow-lg" />}>
          <Eyebrow>{aboutAuthor.eyebrow}</Eyebrow>
          <h2 className="mt-2 font-heading text-4xl md:text-5xl">{author.name}</h2>
          <div className="mt-5"><Prose paragraphs={aboutAuthor.paragraphs} /></div>
          <Link href={aboutAuthor.href} className={cn(btn(), "mt-8")}>See my books</Link>
        </Row>
      </section>

      {/* About the featured book */}
      <section id="book" className="scroll-mt-32 px-5 py-20 md:py-28">
        <Row flip media={<BookCover book={book} className="w-60 md:w-72" />}>
          <Eyebrow>{aboutBook.eyebrow}</Eyebrow>
          <h2 className="mt-2 font-heading text-4xl leading-tight md:text-5xl">{book.title}</h2>
          <p className="mt-2 text-xl text-muted-foreground">{book.subtitle}</p>
          <div className="mt-6"><Prose paragraphs={aboutBook.paragraphs} /></div>
          <div className="mt-8 flex flex-wrap gap-4">
            <AmazonButton href={book.buyLinks[0].href} label={book.buyLinks[0].label} />
            <Link href={`/books/${book.slug}`} className={btn("outline")}>Book details</Link>
          </div>
        </Row>
      </section>

      {/* Where to buy, over the Blue Ridge vista */}
      <section className="relative overflow-hidden px-5 py-20 text-white md:py-28">
        <SceneBg src="/scenes/blue-ridge.webp" className="bg-gradient-to-r from-black/70 via-black/45 to-black/30" />
        <Reveal className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <p className="font-heading text-3xl font-semibold md:text-4xl">Books available now</p>
            <p className="mt-2 text-xl opacity-95">In paperback, hardcover, and Kindle on Amazon.</p>
          </div>
          <AmazonButton href={author.amazonUrl} label="Shop on Amazon" />
        </Reveal>
      </section>

      {/* All books */}
      <section className="px-5 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="text-center">
            <Eyebrow>Published works</Eyebrow>
            <h2 className="mt-2 font-heading text-4xl md:text-5xl">All of Philip&apos;s books</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
            {books.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.08}>
                <Link href={`/books/${b.slug}`} className="group block text-center">
                  <BookCover book={b} className="w-full transition-transform duration-300 group-hover:-translate-y-1" />
                  <p className="mt-3 font-heading text-lg leading-snug group-hover:underline">{b.title}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* A life of service, by the trout stream */}
      <section className="relative overflow-hidden px-5 py-20 text-white md:py-28">
        <SceneBg src="/scenes/river-morning.webp" className="bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
        <div className="relative">
        <Row
          flip
          media={
            <dl className="w-full max-w-md space-y-4 rounded-lg bg-white/95 p-8 text-lg text-foreground shadow-xl backdrop-blur">
              {life.facts.map((f) => (
                <div key={f.label} className="border-b pb-4 last:border-0 last:pb-0">
                  <dt className="font-semibold text-primary">{f.label}</dt>
                  <dd className="mt-1">{f.value}</dd>
                </div>
              ))}
            </dl>
          }
        >
          <h2 className="font-heading text-4xl leading-tight md:text-5xl">{life.title}</h2>
          <div className="mt-6"><Prose paragraphs={life.paragraphs} /></div>
        </Row>
        </div>
      </section>

      {reviews.length > 0 && (
        <section className="px-5 py-20 md:py-28">
          <div className="mx-auto max-w-6xl">
            <Eyebrow>Book reviews</Eyebrow>
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
        </section>
      )}

      {/* Press, on a forest band */}
      <section id="press" className="scroll-mt-32 bg-forest px-5 py-20 text-white md:py-28">
        <Row media={<Image src={author.photo} alt="" width={640} height={600} className="w-full max-w-md rounded-lg shadow-lg" />}>
          <Eyebrow className="text-white">{press.eyebrow}</Eyebrow>
          <h2 className="mt-2 font-heading text-4xl md:text-5xl">{press.source}</h2>
          <div className="mt-6"><Prose paragraphs={press.paragraphs} /></div>
          <a href={press.href} target="_blank" rel="noopener noreferrer" className={cn(btnLight, "mt-8")}>Read the article</a>
        </Row>
      </section>

      {/* Closing, in the writer's study */}
      <section id="contact" className="relative scroll-mt-32 overflow-hidden px-5 py-24 text-center text-white md:py-32">
        <SceneBg src="/scenes/writers-study.webp" className="bg-black/60" />
        <Reveal className="relative mx-auto max-w-3xl">
          <Eyebrow className="text-white">{closing.eyebrow}</Eyebrow>
          <div className="mt-6"><Prose paragraphs={closing.paragraphs} /></div>
          <p className="mt-8 font-heading text-3xl font-semibold md:text-4xl">{closing.closing}</p>
          <Link href="/contact" className={cn(btnLight, "mt-10")}>Connect now</Link>
        </Reveal>
      </section>
    </main>
  );
}
