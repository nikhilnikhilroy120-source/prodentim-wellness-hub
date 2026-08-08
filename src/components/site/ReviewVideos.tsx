import { Play } from "lucide-react";
import { useState } from "react";
import { REVIEW_VIDEO_1, REVIEW_VIDEO_2, REVIEW_VIDEO_3 } from "@/config/site";

function toEmbed(url: string) {
  try {
    const u = new URL(url);
    const id =
      u.searchParams.get("v") ??
      (u.hostname.includes("youtu.be") ? u.pathname.slice(1) : null);
    if (id) return `https://www.youtube.com/embed/${id}?autoplay=1`;
    return url;
  } catch {
    return url;
  }
}

function thumbFor(url: string) {
  try {
    const u = new URL(url);
    const id =
      u.searchParams.get("v") ??
      (u.hostname.includes("youtu.be") ? u.pathname.slice(1) : null);
    return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null;
  } catch {
    return null;
  }
}

export function VideoCard({
  url,
  title,
  description,
}: {
  url: string;
  title: string;
  description: string;
}) {
  const [playing, setPlaying] = useState(false);
  const thumb = url ? thumbFor(url) : null;

  return (
    <article className="overflow-hidden surface-card rounded-3xl">
      <div className="relative aspect-video w-full bg-sage/70">
        {playing && url ? (
          <iframe
            src={toEmbed(url)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <>
            {thumb && (
              <img
                src={thumb}
                alt=""
                loading="lazy"
                decoding="async"
                width={640}
                height={360}
                className="absolute inset-0 h-full w-full object-cover"
              />
            )}
            <button
              type="button"
              disabled={!url}
              onClick={() => setPlaying(true)}
              aria-label={url ? `Play video: ${title}` : "Video coming soon"}
              className="absolute inset-0 grid place-items-center transition-colors hover:bg-charcoal/5 disabled:cursor-default"
            >
              <span className="grid h-16 w-16 place-items-center rounded-full bg-white/95 text-leaf shadow-lg transition-transform duration-300 hover:scale-105">
                <Play size={24} fill="currentColor" />
              </span>
              {!url && (
                <span className="absolute bottom-4 text-xs font-medium tracking-wide text-charcoal/70">
                  Video coming soon
                </span>
              )}
            </button>
          </>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-lg text-charcoal">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </article>
  );
}

export const REVIEW_VIDEOS = [
  {
    url: REVIEW_VIDEO_1,
    title: "ProDentim Review — First Impressions",
    description: "A walkthrough of the formula, the soft tablets and how they are used daily.",
  },
  {
    url: REVIEW_VIDEO_2,
    title: "ProDentim Review — Daily Routine",
    description: "How ProDentim fits into an everyday oral wellness routine.",
  },
  {
    url: REVIEW_VIDEO_3,
    title: "ProDentim Review — What To Know Before Ordering",
    description: "Packages, bonuses, shipping and the 60-day money-back guarantee explained.",
  },
];