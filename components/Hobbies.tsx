import { funFacts, hobbies } from "@/lib/site";
import { MoodPicker } from "./MoodPicker";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Hobbies() {
  return (
    <section id="life" className="section" aria-labelledby="life-h">
      <div className="wrap">
        <Reveal>
          <SectionHeading index="07 · Outside work" title="What I do off the clock" id="life-h">
            Cricket, badminton, and music for every mood.
          </SectionHeading>
        </Reveal>

        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {hobbies.map((h, i) => (
            <li key={h.title}>
              <Reveal delay={i * 80} className="border-t border-ink pt-6">
                <p className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</p>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{h.title}</h3>
                <p className="mt-4 leading-relaxed text-ink2">{h.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-8">
          <Reveal className="md:col-span-7">
            <MoodPicker />
          </Reveal>
          <Reveal className="md:col-span-4 md:col-start-9">
            <p className="label">Fun facts</p>
            <ul className="mt-4 border-t border-ink">
              {funFacts.map((f) => (
                <li key={f} className="border-b border-line py-4 text-base leading-relaxed text-ink2">
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
