"use client";

import "./globals.css";

// Replaces the root layout when it fails, so it brings its own <html> and <body>.
export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <main className="mx-auto max-w-2xl px-5 py-24 text-center font-serif">
          <h1 className="text-5xl">Something went wrong</h1>
          <p className="mt-6 text-xl">Sorry, the site didn&apos;t load properly. Please try again.</p>
          <button onClick={reset} className="mt-10 rounded-md bg-primary px-7 py-3 text-lg text-primary-foreground">
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
