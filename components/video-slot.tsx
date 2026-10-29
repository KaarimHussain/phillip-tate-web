"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Pulls the video ID out of watch?v=, youtu.be/, /embed/ and /shorts/ links.
export function youTubeId(url: string) {
  return url.match(/(?:youtu\.be\/|v=|\/embed\/|\/shorts\/)([\w-]{11})/)?.[1];
}

// One featured video. YouTube loads only after the visitor presses play, so the page stays fast;
// an MP4 path uses the browser's own player. With no url, shows a "coming soon" poster.
export function VideoSlot({ url, title, poster, className }: { url: string; title: string; poster: string; className?: string }) {
  const [playing, setPlaying] = useState(false);
  const yt = youTubeId(url);
  const frame = cn("relative aspect-video w-full overflow-hidden rounded-lg bg-black shadow-xl", className);

  if (url && !yt) {
    return <video src={url} poster={poster} controls preload="none" className={frame} aria-label={title} />;
  }

  if (yt && playing) {
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

  const ready = Boolean(yt);
  return (
    <button
      type="button"
      onClick={() => ready && setPlaying(true)}
      disabled={!ready}
      aria-label={ready ? `Play video: ${title}` : `${title}: video coming soon`}
      className={`group ${frame} text-left text-white`}
    >
      <Image
        src={yt ? `https://i.ytimg.com/vi/${yt}/hqdefault.jpg` : poster}
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        unoptimized={Boolean(yt)}
      />
      <span className="absolute inset-0 bg-black/45 transition-colors group-hover:bg-black/35" />
      <span className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <span className="flex size-20 md:size-28 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg transition-transform group-hover:scale-105">
          <Play className="ml-1 size-9 fill-current md:size-12" />
        </span>
        <span className="text-xl font-medium md:text-2xl">{ready ? title : "Video coming soon"}</span>
      </span>
    </button>
  );
}
