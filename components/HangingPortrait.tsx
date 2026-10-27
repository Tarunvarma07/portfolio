"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { person } from "@/lib/site";

const MAX = (70 * Math.PI) / 180;

// A portrait hung from a pin by one thread. Drag it and let go: it swings
// as a damped pendulum. Arrow keys give it a push.
export function HangingPortrait({
  className = "relative mx-auto w-[min(280px,78vw)] lg:ml-auto lg:mr-0 xl:mr-6",
}: {
  className?: string;
}) {
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
    <div ref={root} className={className}>
      <span aria-hidden className="absolute left-1/2 top-0 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ink" />
      <div ref={swing} style={{ transformOrigin: "50% 0", transform: "rotate(0.06rad)" }}>
        <div aria-hidden className="mx-auto h-[72px] w-px bg-ink" />
        <figure
          tabIndex={0}
          aria-label="Name card hanging from a thread. Drag to swing it, or use the left and right arrow keys."
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
          onKeyDown={onKey}
          className="relative flex min-h-[400px] cursor-grab touch-pan-y select-none flex-col justify-between rounded-[22px] bg-[#121212] p-5 text-white shadow-[0_24px_40px_-20px_rgba(23,23,23,0.6)] active:cursor-grabbing"
        >
          <span aria-hidden className="absolute left-1/2 top-0 h-3 w-8 -translate-x-1/2 -translate-y-1/2 rounded-[3px] bg-ink" />
          <span className="absolute right-5 top-6 whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.08em] text-white/40">Drag me</span>
          <div>
            <p className="text-5xl font-black tracking-tight">{person.initials}</p>
            <p className="mt-4 max-w-[16ch] font-serif text-lg italic leading-snug text-white/70">{person.cardTagline}</p>
          </div>
          <div className="flex items-end">
            <Image
              src="/portrait.webp"
              alt={`Portrait of ${person.short}`}
              width={256}
              height={384}
              sizes="150px"
              priority
              draggable={false}
              className="pointer-events-none h-[150px] w-[150px] rounded-full border-4 border-white/20 object-cover object-top"
            />
            
          </div>
        </figure>
      </div>
    </div>
  );
}
