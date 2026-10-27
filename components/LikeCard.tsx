"use client";

import { useEffect, useState } from "react";

const FLAG = "portfolio-liked";

export function LikeCard() {
  const [count, setCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    try {
      setLiked(localStorage.getItem(FLAG) === "1");
    } catch {}
    fetch("/api/likes")
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => {});
  }, []);

  const like = async () => {
    if (liked) return;
    setLiked(true);
    setCount((c) => (c === null ? c : c + 1));
    try {
      localStorage.setItem(FLAG, "1");
    } catch {}
    try {
      const r = await fetch("/api/likes", { method: "POST" });
      const d = await r.json();
      if (typeof d.count === "number") setCount(d.count);
    } catch {}
  };

  return (
    <div className="w-[260px] p-5">
      <p className="font-mono text-sm">hola <span aria-hidden>👋</span></p>
      <p className="mt-2 text-sm text-ink2">impressed? tap once, it counts</p>
      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={like}
          aria-pressed={liked}
          aria-label={liked ? "You liked this portfolio" : "Like this portfolio"}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-bg transition-transform hover:scale-105 active:scale-95"
        >
          <svg viewBox="0 0 24 24" className={`h-5 w-5 transition-colors ${liked ? "fill-red-500 stroke-red-500" : "fill-none stroke-ink"}`} strokeWidth="1.8" aria-hidden>
            <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" strokeLinejoin="round" />
          </svg>
        </button>
        <p aria-live="polite" className="text-right">
          <b className="text-xl font-semibold">{count ?? "–"}</b>{" "}
          <span className="font-mono text-xs text-muted">{count === 1 ? "heart" : "hearts"}</span>
        </p>
      </div>
    </div>
  );
}
