import { about } from "@/lib/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { education: e } = about;
  return (
    <section id="about" className="section" aria-labelledby="about-h">
      <div className="wrap">
        <Reveal>
          <SectionHeading index="06 · About" title="About me" id="about-h" />
        </Reveal>
        <Reveal className="grid gap-12 md:grid-cols-12 md:gap-8">
          <p className="max-w-[58ch] text-lg leading-relaxed md:col-span-5 md:col-start-4">{about.body}</p>
          <div className="space-y-10 md:col-span-4">
            <div>
              <p className="label">Education</p>
              <p className="mt-3 font-medium leading-snug">{e.degree}</p>
              <p className="mt-1 text-ink2">{e.school}</p>
              <p className="mt-1 font-mono text-xs text-muted">{e.meta}</p>
            </div>
            <div>
              <p className="label">Achievements</p>
              <ul className="mt-3 space-y-3 text-base leading-relaxed text-ink2">
                {about.achievements.map((a) => (
                  <li key={a} className="grid grid-cols-[16px_1fr]">
                    <span aria-hidden className="mt-[0.7em] h-px w-2 bg-muted" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
