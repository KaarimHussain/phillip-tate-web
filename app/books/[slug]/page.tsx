import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BookCover, Prose, btn } from "@/components/site";
import { books, reviews } from "@/lib/content";

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata(props: PageProps<"/books/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const b = books.find((b) => b.slug === slug);
  return { title: b?.title, description: b?.summary };
}

export default async function BookPage(props: PageProps<"/books/[slug]">) {
  const { slug } = await props.params;
  const b = books.find((b) => b.slug === slug);
  if (!b) notFound();

  return (
    <main className="mx-auto max-w-5xl px-5 py-16">
      <Link href="/books" className="text-lg underline underline-offset-4">← All books</Link>

      <div className="mt-10 grid gap-12 md:grid-cols-[auto_1fr]">
        <BookCover book={b} className="mx-auto w-64" />
        <div>
          <p className="text-lg font-semibold text-primary">{b.subtitle}</p>
          <h1 className="mt-2 font-heading text-5xl leading-tight">{b.title}</h1>
          <p className="mt-4 text-xl text-muted-foreground">{b.summary}</p>

          <h2 className="mt-10 font-heading text-2xl font-semibold">Buy this book</h2>
          <div className="mt-4 flex flex-wrap gap-4">
            {b.buyLinks.map((l, i) => (
              <a key={l.label} href={l.href} className={btn(i === 0 ? "default" : "outline")}>{l.label}</a>
            ))}
          </div>
        </div>
      </div>

      <section className="mt-16 grid gap-12 md:grid-cols-[1.6fr_1fr]">
        <div>
          <h2 className="font-heading text-3xl font-semibold">About the book</h2>
          <div className="mt-5"><Prose paragraphs={b.description} /></div>
        </div>
        <div className="h-fit rounded-lg border bg-card p-7">
          <h2 className="font-heading text-2xl font-semibold">Book details</h2>
          <dl className="mt-4 space-y-3 text-lg">
            {b.details.map((d) => (
              <div key={d.label} className="flex justify-between gap-4 border-b pb-3 last:border-0">
                <dt className="text-muted-foreground">{d.label}</dt>
                <dd className="text-right font-medium">{d.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ponytail: reviews are shared across books; add a reviews field per book when real ones come in. */}
      <section className="mt-16">
        <h2 className="font-heading text-3xl font-semibold">What readers are saying</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.title} className="rounded-lg bg-muted p-6 text-lg leading-relaxed">“{r.text}”</blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
