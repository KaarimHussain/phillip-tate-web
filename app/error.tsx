"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="mx-auto max-w-2xl px-5 py-24 text-center">
      <h1 className="font-heading text-5xl">Something went wrong</h1>
      <p className="mt-6 text-xl">Sorry, this page didn&apos;t load properly. Please try again.</p>
      <button onClick={reset} className="mt-10 rounded-md bg-primary px-7 py-3 text-lg text-primary-foreground">
        Try again
      </button>
    </main>
  );
}
