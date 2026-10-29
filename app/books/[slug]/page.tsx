import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "@/app/loading";
import type { Book as BookLd, WithContext } from "schema-dts";
import { AmazonButton, BookCover, JsonLd, Prose } from "@/components/site";
import { author, books, reviews } from "@/lib/content";

export function generateStaticParams() {
  return books.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata(props: PageProps<"/books/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const b = books.find((b) => b.slug === slug);
  if (!b) return {};
  const images = b.cover ? [{ url: b.cover, alt: `Cover of ${b.title}` }] : undefined;
  return {
    title: `${b.title}: ${b.subtitle}`,
    description: b.summary,
    alternates: { canonical: `/books/${b.slug}` },
    openGraph: { type: "book", title: b.title, description: b.summary, authors: [author.name], images },
    twitter: { card: "summary_large_image", title: b.title, description: b.summary, images },
  };
}

// params are read inside <Suspense> so the page shell renders instantly on navigation.
export default function BookPage(props: PageProps<"/books/[slug]">) {
  return (
    <Suspense fallback={<Loading />}>
      <BookDetail params={props.params} />
    </Suspense>
  );
}

async function BookDetail({ params }: { params: PageProps<"/books/[slug]">["params"] }) {
  const { slug } = await params;
  const b = books.find((b) => b.slug === slug);
  if (!b) notFound();

  const isbn = b.details.find((d) => d.label === "ISBN")?.value.split(" ")[0];
  const ld: WithContext<BookLd> = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: b.title,
    alternativeHeadline: b.subtitle,
    author: { "@type": "Person", name: author.name },
    genre: b.genre,
    description: b.description.join(" "),
    image: b.cover,
    isbn,
    url: `/books/${b.slug}`,
    offers: b.buyLinks.map((l) => ({ "@type": "Offer", url: l.href, name: l.label })),
  };

  return (
    <main>
      <JsonLd data={ld} />
      <section className="bg-mint px-5 py-14 md:py-20">
        <div className="mx-auto max-w-5xl">
          <Link href="/books" className="text-lg underline underline-offset-4">← All books</Link>
          <div className="mt-10 grid gap-12 md:grid-cols-[auto_1fr]">
            <BookCover book={b} className="mx-auto w-64" preload />
            <div>
              <p className="text-lg font-semibold tracking-wide text-primary uppercase">{b.genre}</p>
              <h1 className="mt-2 font-heading text-5xl leading-tight">{b.title}</h1>
              <p className="mt-2 text-2xl">{b.subtitle}</p>
              <p className="mt-4 text-xl text-muted-foreground">{b.summary}</p>

              <h2 className="mt-10 font-heading text-2xl font-semibold">Buy this book</h2>
              <div className="mt-4 flex flex-wrap gap-4">
                {b.buyLinks.map((l) => <AmazonButton key={l.label} href={l.href} label={l.label} />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-5 pb-16">

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
      {reviews.length > 0 && <section className="mt-16">
        <h2 className="font-heading text-3xl font-semibold">What readers are saying</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {reviews.map((r) => (
            <blockquote key={r.title} className="rounded-lg bg-muted p-6 text-lg leading-relaxed">“{r.text}”</blockquote>
          ))}
        </div>
      </section>}
      </div>
    </main>
  );
}
