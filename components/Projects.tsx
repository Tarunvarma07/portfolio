import { projects, type Project } from "@/lib/site";
import { ProjectArchitecture } from "./ProjectArchitecture";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Links({ p }: { p: Project }) {
  if (!p.repo && !p.demo) return null;
  return (
    <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
      {p.repo && (
        <a className="link" href={p.repo} target="_blank" rel="noopener noreferrer">
          Source code<span className="sr-only"> for {p.title}</span> ↗
        </a>
      )}
      {p.demo && (
        <a className="link" href={p.demo} target="_blank" rel="noopener noreferrer">
          Live demo<span className="sr-only"> of {p.title}</span> ↗
        </a>
      )}
    </div>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((t) => (
        <li key={t} className="tag">{t}</li>
      ))}
    </ul>
  );
}

function Points({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-base leading-relaxed text-ink2">
      {items.map((h) => (
        <li key={h} className="grid grid-cols-[16px_1fr]">
          <span aria-hidden className="mt-[0.7em] h-px w-2 bg-muted" />
          <span>{h}</span>
        </li>
      ))}
    </ul>
  );
}

function Featured({ p }: { p: Project }) {
  return (
    <article className="group overflow-hidden rounded-[var(--radius)] border border-line bg-surface transition-colors duration-300 hover:border-ink/40">
      <div className="grid gap-10 p-5 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-12">
        <div className="lg:col-span-7">
          <p className="label">{p.index} · Featured</p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{p.title}</h3>
          <p className="mt-2 font-mono text-xs text-muted">{p.category}</p>
          <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink2">{p.description}</p>
          <Links p={p} />
        </div>
        <div className="space-y-8 lg:col-span-5">
          <Points items={p.highlights} />
          <Stack items={p.stack} />
        </div>
      </div>
      <ProjectArchitecture {...p.flow} />
    </article>
  );
}

function Card({ p }: { p: Project }) {
  return (
    <article className="flex h-full flex-col rounded-[var(--radius)] border border-line bg-surface p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/40 sm:p-8">
      <p className="label">
        {p.index}
        {p.short ? ` · ${p.short}` : ""}
      </p>
      <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-tight">{p.title}</h3>
      <p className="mt-2 font-mono text-xs text-muted">{p.category}</p>
      <p className="mt-5 leading-relaxed text-ink2">{p.description}</p>
      <div className="mt-6"><Points items={p.highlights} /></div>

      {p.flow.steps.length > 0 && (
        <div className="mt-6 -mx-5 sm:-mx-8">
          <ProjectArchitecture {...p.flow} stacked />
        </div>
      )}

      {p.reported && (
        <div className="mt-6 border-t border-line pt-5">
          <p className="label">Reported in resume</p>
          <ul className="mt-3 space-y-1.5 text-sm">
            {p.reported.map((r) => <li key={r}>{r}</li>)}
          </ul>
        </div>
      )}
      {p.caveat && (
        <p className="mt-5 border-l-2 border-line pl-4 text-[13px] leading-relaxed text-ink2">{p.caveat}</p>
      )}

      <div className="mt-auto pt-8">
        <Stack items={p.stack} />
        <Links p={p} />
      </div>
    </article>
  );
}

export function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section id="work" className="section" aria-labelledby="work-h">
      <div className="wrap">
        <Reveal>
          <SectionHeading index="02 · Projects" title="Projects I've built" id="work-h">
            Three projects that show how I work: applied AI, backend APIs, and machine learning. Each one lists what it does, how it&apos;s built, and what I did.
          </SectionHeading>
        </Reveal>
        <div className="space-y-6">
          <Reveal><Featured p={featured} /></Reveal>
          <div className="grid items-stretch gap-6 lg:grid-cols-2">
            {rest.map((p) => (
              <Reveal key={p.id} className="h-full">
                <Card p={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
