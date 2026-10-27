import { person } from "@/lib/site";
import { HangingPortrait } from "./HangingPortrait";

const focus = [
  ["01", "Backend & APIs", "Python, FastAPI, Django, PostgreSQL"],
  ["02", "Applied AI", "RAG, LLM integration, evaluation"],
  ["03", "Production delivery", "Testing, debugging, deployment"],
];

const d = (n: number) => ({ animationDelay: `${n * 90}ms` });

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 md:pb-28 md:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
      />
      <div className="wrap relative grid gap-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-8">
          <p className="label rise" style={d(0)}>
            Software Engineer · Backend &amp; Applied AI
          </p>
          <h1
            className="rise mt-6 text-[clamp(2.5rem,7.2vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.035em] text-balance"
            style={d(1)}
          >
            I build software that works in the real world.
          </h1>
          <p className="rise mt-8 max-w-[56ch] text-lg leading-relaxed text-ink2" style={d(2)}>
            I&apos;m {person.short}, a software engineer working across Python backends, production applications, and applied AI. I enjoy turning complex requirements into reliable systems, from API design and debugging to LLM-powered applications.
          </p>
          <div className="rise mt-10 flex flex-wrap items-center gap-3" style={d(3)}>
            <a href="#work" className="btn btn-primary">Explore my work</a>
            <a href="#contact" className="btn btn-ghost">Get in touch</a>
            {person.resume && (
              <a href={person.resume} download className="link ml-2 text-sm">
                Download resume
              </a>
            )}
          </div>
          <p className="label rise mt-10 flex flex-wrap items-center gap-x-3 gap-y-1 normal-case" style={d(4)}>
            <span>Based in {person.location}</span>
            {person.availableForOpportunities && (
              <>
                <span aria-hidden>·</span>
                <span className="inline-flex items-center gap-2">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Available for relevant opportunities
                </span>
              </>
            )}
          </p>
          <ol className="rise mt-14 grid gap-x-6 border-t border-ink sm:grid-cols-3" style={d(6)} aria-label="Areas of focus">
            {focus.map(([n, t, s]) => (
              <li key={n} className="border-b border-line py-4 sm:border-b-0">
                <span className="font-mono text-xs text-muted">{n}</span>
                <p className="mt-2 font-medium">{t}</p>
                <p className="mt-1 font-mono text-xs leading-5 text-muted">{s}</p>
              </li>
            ))}
          </ol>
        </div>

        <div className="rise lg:col-span-4" style={d(2)}>
          <HangingPortrait />
        </div>
      </div>
    </section>
  );
}
