"use client";

import { useState } from "react";
import { moods } from "@/lib/site";

export function MoodPicker() {
  const [id, setId] = useState(moods[0].id);
  const mood = moods.find((m) => m.id === id) ?? moods[0];

  return (
    <div className="border border-line bg-surface p-5 sm:p-8">
      <p className="label" id="mood-label">Pick a mood</p>
      <div role="radiogroup" aria-labelledby="mood-label" className="mt-4 flex flex-wrap gap-2">
        {moods.map((m) => (
          <button
            key={m.id}
            type="button"
            role="radio"
            aria-checked={m.id === id}
            onClick={() => setId(m.id)}
            className={`h-11 rounded-[var(--radius)] border px-4 text-sm transition-colors ${
              m.id === id ? "border-ink bg-ink text-bg" : "border-line text-ink2 hover:border-ink hover:text-ink"
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>

      <div className="mt-8 flex items-end gap-6" aria-live="polite">
        <div aria-hidden className="eq flex h-12 w-14 shrink-0 items-end gap-1.5" style={{ ["--eq-speed" as string]: `${mood.speed}s` }}>
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="block h-full w-2 bg-accent" />
          ))}
        </div>
        <div>
          <p className="text-xl font-semibold tracking-tight">{mood.label}</p>
          <p className="mt-1 max-w-[40ch] text-[15px] leading-relaxed text-ink2">{mood.line}</p>
        </div>
      </div>
    </div>
  );
}
