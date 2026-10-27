import { person } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Contact() {
  const rows: { label: string; text: string; href: string; external?: boolean; download?: boolean }[] = [
    { label: "Email", text: person.email, href: `mailto:${person.email}` },
    { label: "GitHub", text: "github.com/Tarunvarma07", href: person.github, external: true },
    { label: "LinkedIn", text: "linkedin.com/in/tarunvarmach", href: person.linkedin, external: true },
  ];
  if (person.resume) rows.push({ label: "Resume", text: "Download (PDF)", href: person.resume, download: true });

  return (
    <section id="contact" className="section" aria-labelledby="contact-h">
      <div className="wrap">
        <Reveal className="grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="label">07 / Contact</p>
            <h2 id="contact-h" className="mt-6 text-[clamp(2rem,5vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em] text-balance">
              Have an interesting problem to solve?
            </h2>
            <p className="mt-6 max-w-[54ch] text-lg leading-relaxed text-ink2">
              I&apos;m interested in software engineering and applied AI opportunities where I can contribute to real products, strengthen my engineering skills, and build systems that people can rely on.
            </p>
          </div>
          <ul className="border-t border-ink md:col-span-4 md:col-start-9 md:self-end">
            {rows.map((r) => (
              <li key={r.label} className="border-b border-line">
                <a
                  href={r.href}
                  className="group flex min-h-14 items-center justify-between gap-4 py-3 transition-colors hover:text-accent"
                  {...(r.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(r.download ? { download: true } : {})}
                >
                  <span>
                    <span className="label block">{r.label}</span>
                    <span className="mt-1 block break-all text-[15px]">{r.text}</span>
                  </span>
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">{r.external ? "↗" : "→"}</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
