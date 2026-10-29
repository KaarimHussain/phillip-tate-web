"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AmazonButton, BookCover } from "@/components/site";
import { cn } from "@/lib/utils";
import type { Book } from "@/lib/content";

const INTERVAL_MS = 7000;

const btnGhost = "inline-flex items-center justify-center rounded-md border-2 border-white px-7 py-3 text-lg font-medium text-white hover:bg-white/10";
// Phones: arrows sit beside the dots at the bottom. Desktop: centred on the left and right edges.
const arrow = "absolute bottom-6 z-10 flex size-11 items-center md:bottom-auto md:top-1/2 md:-translate-y-1/2 justify-center rounded-full bg-black/35 text-white backdrop-blur-sm hover:bg-black/55 focus-visible:outline-2 focus-visible:outline-white md:size-14";

function Slide({ b, preload }: { b: Book; preload?: boolean }) {
  return (
    <div className="grid items-center gap-10 md:grid-cols-[1.3fr_1fr]">
      <div>
        <p className="text-lg font-semibold tracking-wide uppercase opacity-90">{b.genre}</p>
        <h2 className="mt-3 font-heading text-5xl leading-tight md:text-6xl">{b.title}</h2>
        <p className="mt-3 text-2xl opacity-95">{b.subtitle}</p>
        <p className="mt-5 max-w-xl text-xl leading-relaxed opacity-90">{b.summary}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <AmazonButton href={b.buyLinks[0].href} label={b.buyLinks[0].label} />
          <Link href={`/books/${b.slug}`} className={btnGhost}>Learn more</Link>
        </div>
      </div>
      <div className="flex justify-center">
        <BookCover book={b} className="w-48 md:w-64" preload={preload} />
      </div>
    </div>
  );
}

// Auto-advancing book showcase. It holds still while the visitor hovers or tabs into it,
// and doesn't auto-advance for visitors who prefer reduced motion.
export function HeroCarousel({ books }: { books: Book[] }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [hovering, setHovering] = useState(false);
  const playing = !reduce && !hovering;

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setI((n) => (n + 1) % books.length), INTERVAL_MS);
    return () => clearTimeout(t);
  }, [playing, i, books.length]);

  const go = (n: number) => setI((n + books.length) % books.length);
  const b = books[i];
  const fade = reduce ? {} : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -16 } };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Philip's books"
      className="relative overflow-hidden bg-forest px-5 pt-16 pb-24 text-white md:px-24 md:pt-24"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget) && setHovering(false)}
    >
      {/* Scene image for the current book, cross-fading between slides. */}
      <AnimatePresence initial={false}>
        <motion.div
          key={b.slug}
          aria-hidden
          className="absolute inset-0"
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image src={b.heroImage} alt="" fill sizes="100vw" preload={i === 0} className="object-cover" />
        </motion.div>
      </AnimatePresence>
      {/* Darker on the left so the white text stays readable over any scene. */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />

      <div aria-live={playing ? "off" : "polite"} className="relative mx-auto grid max-w-6xl">
        {/* Invisible copies of every slide share one grid cell, so the hero is always as tall as the
            tallest slide and the page below doesn't jump when slides change. */}
        {books.map((x) => (
          <div key={x.slug} aria-hidden className="invisible [grid-area:1/1]">
            <Slide b={x} />
          </div>
        ))}
        {/* initial={false}: the first slide is visible straight from the server, not faded in. */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={b.slug}
            {...fade}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${books.length}: ${b.title}`}
            className="[grid-area:1/1]"
          >
            <Slide b={b} preload={i === 0} />
          </motion.div>
        </AnimatePresence>
      </div>

      <button type="button" onClick={() => go(i - 1)} aria-label="Previous book" className={cn(arrow, "left-3 md:left-6")}>
        <ChevronLeft className="size-7" />
      </button>
      <button type="button" onClick={() => go(i + 1)} aria-label="Next book" className={cn(arrow, "right-3 md:right-6")}>
        <ChevronRight className="size-7" />
      </button>

      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        {books.map((x, n) => (
          // Padding gives each dot a ~44px tap target.
          <button
            key={x.slug}
            type="button"
            onClick={() => go(n)}
            aria-label={`Show ${x.title}`}
            aria-current={n === i}
            className="group flex h-11 items-center px-1.5"
          >
            <span className={cn("block h-3 rounded-full bg-white transition-all", n === i ? "w-10" : "w-3 opacity-50 group-hover:opacity-80")} />
          </button>
        ))}
      </div>
    </section>
  );
}
