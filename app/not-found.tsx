import Link from "next/link";
import { btn } from "@/components/site";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl px-5 py-24 text-center">
      <p className="text-lg font-semibold text-primary">Page not found</p>
      <h1 className="mt-2 font-heading text-5xl">We couldn&apos;t find that page</h1>
      <p className="mt-6 text-xl">The page may have moved. Try the home page or browse Philip&apos;s books.</p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className={btn()}>Go to home page</Link>
        <Link href="/books" className={btn("outline")}>See the books</Link>
      </div>
    </main>
  );
}
