import { principles } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Principles() {
  return (
    <section id="principles" className="section" aria-labelledby="pr-h">
      <div className="wrap">
        <Reveal>
          <SectionHeading index="05 / Approach" title="Beyond making it work" id="pr-h" />
        </Reveal>
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {principles.map((p, i) => (
            <li key={p.title}>
              <Reveal delay={i * 80} className="border-t border-ink pt-6">
                <p className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{p.title}</h3>
                <p className="mt-4 leading-relaxed text-ink2">{p.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
