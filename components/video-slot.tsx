"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Pulls the video ID out of watch?v=, youtu.be/, /embed/ and /shorts/ links.
export function youTubeId(url: string) {
  return url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([\w-]{11})/)?.[1];
}

// One featured video (YouTube link or MP4 path). Shows a poster with a play button and only
// loads the video once pressed, so the page stays fast. With no url, shows "coming soon".
export function VideoSlot({ url, title, poster, className }: { url: string; title: string; poster: string; className?: string }) {
  const [playing, setPlaying] = useState(false);
  const yt = youTubeId(url);
  const frame = cn("relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-xl", className);

  if (playing && yt) {
    return (
      <div className={frame}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${yt}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      </div>
    );
  }
  if (playing) {
    return <video src={url} poster={poster} controls autoPlay playsInline className={frame} aria-label={title} />;
  }

  const ready = Boolean(url);
  return (
    <button
      type="button"
      onClick={() => ready && setPlaying(true)}
      disabled={!ready}
      aria-label={ready ? `Play video: ${title}` : `${title}: video coming soon`}
      className={cn("group text-left text-white", frame)}
    >
      <Image
        src={yt ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : poster}
        alt=""
        fill
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="object-cover"
        unoptimized={Boolean(yt)}
      />
      <span className="absolute inset-0 bg-black/25 transition-colors group-hover:bg-black/15" />
      <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <span className="flex size-20 items-center justify-center rounded-full bg-primary text-white shadow-xl ring-8 ring-white/30 transition-transform group-hover:scale-105 md:size-24">
          <Play className="ml-1 size-9 fill-current md:size-10" />
        </span>
        {!ready && <span className="text-xl font-medium md:text-2xl">Video coming soon</span>}
      </span>
    </button>
  );
}
