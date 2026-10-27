import { skills } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="tools" className="section" aria-labelledby="tools-h">
      <div className="wrap">
        <Reveal>
          <SectionHeading index="04 · Skills" title="Tools and technologies" id="tools-h">
            The languages, frameworks and tools I use, grouped by area.
          </SectionHeading>
        </Reveal>
        <Reveal>
          <dl className="grid border-t border-ink sm:grid-cols-2 sm:gap-x-12 lg:grid-cols-3">
            {skills.map((s) => (
              <div key={s.group} className="border-b border-line py-6">
                <dt className="label">{s.group}</dt>
                <dd className="mt-3 text-base leading-7">{s.items.join("  ·  ")}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
