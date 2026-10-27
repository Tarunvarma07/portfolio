import { experience } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="exp-h">
      <div className="wrap">
        <Reveal>
          <SectionHeading index="03 · Experience" title="Where I've worked" id="exp-h">
            My current internship and my previous role, with what I worked on in each.
          </SectionHeading>
        </Reveal>
        <ol className="border-t border-ink">
          {experience.map((r) => (
            <li key={r.company}>
              <Reveal className="grid gap-6 border-b border-line py-10 md:grid-cols-12 md:gap-8 md:py-12">
                <div className="md:col-span-3">
                  <p className="font-mono text-xs leading-6 text-muted">{r.dates}</p>
                  <p className="font-mono text-xs leading-6 text-muted">{r.location}</p>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{r.role}</h3>
                  <p className="mt-1 text-ink2">{r.company}</p>
                  {r.summary && <p className="mt-5 max-w-[60ch] leading-relaxed text-ink2">{r.summary}</p>}
                  <ul className="mt-6 max-w-[68ch] space-y-3 text-base leading-relaxed text-ink2">
                    {r.points.map((p) => (
                      <li key={p} className="grid grid-cols-[16px_1fr]">
                        <span aria-hidden className="mt-[0.7em] h-px w-2 bg-muted" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
