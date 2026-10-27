"use client";

import { useState } from "react";
import { moods } from "@/lib/site";

// Tap to cycle through moods; the equalizer speed follows the mood.
export function MoodCard() {
  const [i, setI] = useState(0);
  const mood = moods[i];

  return (
    <button
      type="button"
      onClick={() => setI((v) => (v + 1) % moods.length)}
      className="flex w-[260px] items-center gap-4 rounded-[10px] border border-line bg-surface p-4 text-left shadow-[0_14px_30px_-18px_rgba(23,23,23,0.35)]"
      aria-label={`Current mood: ${mood.label}. Tap for the next mood.`}
    >
      <span aria-hidden className="eq flex h-9 w-10 shrink-0 items-end gap-1" style={{ ["--eq-speed" as string]: `${mood.speed}s` }}>
        {[0, 1, 2, 3, 4].map((n) => (
          <span key={n} className="block h-full w-1.5 bg-accent" />
        ))}
      </span>
      <span>
        <span className="label block text-[10px]">Songs by mood</span>
        <span className="mt-1 block font-medium">{mood.label}</span>
        <span className="block text-xs text-muted">tap to change</span>
      </span>
    </button>
  );
}
