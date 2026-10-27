"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { person } from "@/lib/site";

const MAX = (70 * Math.PI) / 180;

// A portrait hung from a pin by one thread. Drag it and let go: it swings
// as a damped pendulum. Arrow keys give it a push.
export function HangingPortrait() {
  const root = useRef<HTMLDivElement>(null);
  const swing = useRef<HTMLDivElement>(null);
  const s = useRef({ a: 0.06, v: 0, dragging: false, raf: 0, last: 0 });

  const apply = () => {
    if (swing.current) swing.current.style.transform = `rotate(${s.current.a}rad)`;
  };

  const step = (t: number) => {
    const st = s.current;
    const dt = Math.min((t - st.last) / 1000, 0.03);
    st.last = t;
    if (!st.dragging) {
      st.v += (-9 * Math.sin(st.a) - 0.9 * st.v) * dt;
      st.a += st.v * dt;
      if (Math.abs(st.a) < 0.0005 && Math.abs(st.v) < 0.002) {
        st.a = 0;
        st.v = 0;
        st.raf = 0;
        apply();
        return;
      }
    }
    apply();
    st.raf = requestAnimationFrame(step);
  };

  const run = () => {
    const st = s.current;
    if (st.raf) return;
    st.last = performance.now();
    st.raf = requestAnimationFrame(step);
  };

  useEffect(() => {
    run();
    const st = s.current;
    return () => cancelAnimationFrame(st.raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const angleTo = (x: number, y: number) => {
    const r = root.current!.getBoundingClientRect();
    const a = -Math.atan2(x - (r.left + r.width / 2), Math.max(y - r.top, 20));
    return Math.max(-MAX, Math.min(MAX, a));
  };

  const onDown = (e: React.PointerEvent) => {
    const st = s.current;
    e.currentTarget.setPointerCapture(e.pointerId);
    st.dragging = true;
    st.v = 0;
    st.a = angleTo(e.clientX, e.clientY);
    run();
  };
  const onMove = (e: React.PointerEvent) => {
    const st = s.current;
    if (!st.dragging) return;
    const next = angleTo(e.clientX, e.clientY);
    const dt = Math.max(performance.now() - st.last, 8) / 1000;
    st.v = st.v * 0.6 + ((next - st.a) / dt) * 0.4;
    st.a = next;
    st.last = performance.now();
  };
  const onUp = () => {
    const st = s.current;
    st.dragging = false;
    st.v = Math.max(-3, Math.min(3, st.v));
    run();
  };
  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
    e.preventDefault();
    s.current.v = Math.max(-3, Math.min(3, s.current.v + (e.key === "ArrowLeft" ? 1.6 : -1.6)));
    run();
  };

  return (
    <div ref={root} className="relative mx-auto w-[min(280px,78vw)] lg:ml-auto lg:mr-0 xl:mr-6">
      <span aria-hidden className="absolute left-1/2 top-0 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ink" />
      <div ref={swing} style={{ transformOrigin: "50% 0", transform: "rotate(0.06rad)" }}>
        <div aria-hidden className="mx-auto h-[72px] w-px bg-ink" />
        <figure
          tabIndex={0}
          aria-label="Portrait hanging from a thread. Drag to swing it, or use the left and right arrow keys."
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onKeyDown={onKey}
          className="relative cursor-grab touch-pan-y select-none border border-line bg-surface p-3 shadow-[0_18px_32px_-18px_rgba(23,23,23,0.35)] active:cursor-grabbing"
        >
          <span aria-hidden className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-ink bg-bg" />
          <div className="art relative aspect-[2/3] overflow-hidden bg-line">
            <Image
              src="/portrait.webp"
              alt={`Portrait of ${person.short}`}
              width={1024}
              height={1536}
              sizes="(min-width: 1024px) 280px, 78vw"
              priority
              draggable={false}
              className="pointer-events-none h-full w-full object-cover"
            />
          </div>
          <figcaption className="mt-3 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.08em] text-muted">
            <span>{person.short}</span>
            <span>Drag to swing</span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
