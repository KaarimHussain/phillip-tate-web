import { Play, Star } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { BookCover, Placeholder, Prose, btn } from "@/components/site";
import {
  aboutAuthor, aboutBook, author, book, bookAvailable, closing, life, media, press, reviews, welcome,
} from "@/lib/content";

function Section({ id, eyebrow, title, children, muted }: {
  id?: string; eyebrow?: string; title?: string; children: React.ReactNode; muted?: boolean;
}) {
  return (
    <section id={id} className={cn("scroll-mt-32 px-5 py-20 md:py-24", muted && "bg-muted")}>
      <div className="mx-auto max-w-3xl">
        {eyebrow && <p className="text-lg font-semibold text-primary">{eyebrow}</p>}
        {title && <h2 className="mt-2 font-heading text-4xl leading-tight md:text-5xl">{title}</h2>}
        <div className="mt-6">{children}</div>
      </div>
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
            <a href="#book" className={btn("outline")}>Learn more</a>
            <a href={book.buyLinks[0].href} className={btn()}>Buy now</a>
          </div>
          <div className="mt-14 flex items-end justify-center gap-4">
            <BookCover book={book} className="w-44 -rotate-6 opacity-80 md:w-56" />
            <BookCover book={book} className="w-52 md:w-64" />
          </div>
        </section>

        <Section eyebrow={welcome.eyebrow} muted>
          <Prose paragraphs={welcome.paragraphs} closing={welcome.closing} />
        </Section>

        <Section id="author" eyebrow={aboutAuthor.eyebrow}>
          <Placeholder label="Author photo" className="aspect-[4/5] w-full max-w-sm" />
          <h2 className="mt-10 font-heading text-4xl md:text-5xl">{author.name}</h2>
          <div className="mt-5"><Prose paragraphs={aboutAuthor.paragraphs} /></div>
          <a href={aboutAuthor.href} className={cn(btn(), "mt-8")}>Learn more</a>
        </Section>

        <section id="media" className="scroll-mt-32 bg-foreground px-5 py-16">
          <div className="mx-auto max-w-5xl">
            {media.videoUrl ? (
              <iframe src={media.videoUrl} title="Video" allowFullScreen className="aspect-video w-full rounded-lg" />
            ) : (
              <div className="flex aspect-video w-full items-center justify-center rounded-lg bg-black/40 text-background">
                <Play className="size-20" aria-label="Video coming soon" />
              </div>
            )}
          </div>
        </section>

        <Section id="book" eyebrow={aboutBook.eyebrow}>
          <Placeholder label="Book mood image" className="aspect-[3/2] w-full" />
          <div className="mt-10"><Prose paragraphs={aboutBook.paragraphs} /></div>
          <a href={aboutBook.href} className={cn(btn(), "mt-8")}>Learn more</a>
        </Section>

        <Section eyebrow={bookAvailable.eyebrow} title={book.title} muted>
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <BookCover book={book} className="mx-auto w-48" />
            <div>
              <Prose paragraphs={bookAvailable.paragraphs} />
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={book.buyLinks[0].href} className={btn()}>Buy now</a>
                <Link href={`/books/${book.slug}`} className={btn("outline")}>Book details</Link>
              </div>
            </div>
          </div>
        </Section>

        <Section title={life.title}>
          <Placeholder label="Lifestyle image" className="aspect-[3/2] w-full" />
          <div className="mt-10"><Prose paragraphs={life.paragraphs} /></div>
          <a href={life.href} className={cn(btn(), "mt-8")}>Learn more</a>
        </Section>

        <section className="bg-muted px-5 py-20 md:py-24">
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
        </section>

        <Section id="press" eyebrow={press.eyebrow}>
          <div className="flex flex-wrap items-end justify-center gap-6">
            <Placeholder label="Author photo" className="mx-0 aspect-[4/5] w-full max-w-xs" />
            <BookCover book={book} className="w-36" />
          </div>
          <div className="mt-10"><Prose paragraphs={press.paragraphs} /></div>
          <a href={press.href} className={cn(btn(), "mt-8")}>View full article</a>
        </Section>

        <Section id="contact" eyebrow={closing.eyebrow} muted>
          <Prose paragraphs={closing.paragraphs} closing={closing.closing} />
          <Link href="/contact" className={cn(btn(), "mt-8")}>Connect now</Link>
        </Section>
      </main>

    </>
  );
}
