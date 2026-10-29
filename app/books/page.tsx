import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { BookCover, PageTitle, btn } from "@/components/site";
import { books } from "@/lib/content";

export const metadata: Metadata = {
  title: "Books",
  description: "Books by Philip Tate: Civil War historical fiction, mystery and suspense, adventure, and nonfiction on naval defense.",
  alternates: { canonical: "/books" },
};

export default function BooksPage() {
  return (
    <main>
      <PageTitle eyebrow="Published works" title="Books by Philip Tate" image="/scenes/blue-ridge.webp" />
      <div className="mx-auto max-w-4xl divide-y px-5 py-12">
        {books.map((b) => (
          <Reveal key={b.slug}><article className="grid items-center gap-8 py-12 sm:grid-cols-[auto_1fr]">
            <BookCover book={b} className="mx-auto w-44" />
            <div>
              <p className="text-lg text-muted-foreground">{b.genre}</p>
              <h2 className="mt-1 font-heading text-4xl leading-tight">{b.title}</h2>
              <p className="mt-1 text-xl text-muted-foreground">{b.subtitle}</p>
              <p className="mt-4 text-xl leading-relaxed">{b.summary}</p>
              <Link href={`/books/${b.slug}`} className={`${btn()} mt-6`}>View book details</Link>
            </div>
          </article></Reveal>
        ))}
      </div>
    </main>
  );
}
