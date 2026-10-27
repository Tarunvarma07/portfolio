"use client";

import { useEffect, useState } from "react";
import { nav, person } from "@/lib/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = nav.map((n) => n.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkCls = (href: string) =>
    `text-sm transition-colors ${active === href.slice(1) ? "text-ink" : "text-ink2 hover:text-ink"}`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300 ${
        scrolled || open ? "border-line bg-bg/90 backdrop-blur" : "border-transparent bg-transparent"
      }`}
    >
      <div className="wrap flex h-14 items-center justify-between">
        <a href="#top" className="flex h-11 items-center font-mono text-[13px] font-medium tracking-wide" onClick={() => setOpen(false)}>
          {person.wordmark}
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className={linkCls(n.href)} aria-current={active === n.href.slice(1) ? "true" : undefined}>
              {n.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="-mr-2 flex h-11 w-11 items-center justify-center md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3 w-5">
            <span className={`absolute left-0 h-px w-5 bg-ink transition-all duration-200 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 h-px w-5 bg-ink transition-all duration-200 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        hidden={!open}
        className="fixed inset-x-0 top-14 h-[calc(100dvh-3.5rem)] bg-bg md:hidden"
      >
        <ul className="wrap pt-4">
          {nav.map((n) => (
            <li key={n.href} className="border-b border-line">
              <a href={n.href} onClick={() => setOpen(false)} className="flex h-16 items-center text-2xl font-medium tracking-tight">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
