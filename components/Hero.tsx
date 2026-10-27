import { person } from "@/lib/site";
import { HangingPortrait } from "./HangingPortrait";
import { MoodCard } from "./MoodCard";
import { LikeCard } from "./LikeCard";

const d = (n: number) => ({ animationDelay: `${n * 90}ms` });

const card =
  "rounded-[10px] border border-line bg-surface shadow-[0_14px_30px_-18px_rgba(23,23,23,0.35)] transition-transform duration-300";

// Below xl the cards flow under the text; from xl they float around it.
function Float({ className, delay, children }: { className: string; delay: number; children: React.ReactNode }) {
  return (
    <div className={`rise xl:absolute ${className}`} style={d(delay)}>
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-28 md:pt-32 xl:min-h-[880px] xl:pb-0">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-60 [background-image:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent_90%)]"
      />

      <div className="relative z-10 mx-auto flex max-w-[680px] flex-col items-center px-5 pt-6 text-center xl:pt-24">
        <p className="rise font-mono text-sm text-ink2" style={d(0)}>hello, I&apos;m</p>
        <h1
          className="rise mt-3 font-serif text-[clamp(5rem,16vw,10rem)] italic leading-[0.95] tracking-[-0.02em]"
          style={d(1)}
        >
          Tarun
        </h1>
        <p className="rise mt-3 font-mono text-xs uppercase tracking-[0.14em] text-muted" style={d(2)}>
          Venkata Sai Tarun Varma Chintha
        </p>
        <p className="rise mt-8 text-ink2" style={d(3)}>
          [&nbsp; backend &nbsp;·&nbsp; applied AI &nbsp;·&nbsp; full-stack &nbsp;]
        </p>
        <p className="rise mt-5 max-w-[48ch] text-lg leading-relaxed" style={d(4)}>
          I build software that works in the real world: Python backends, production apps, and LLM-powered products.
        </p>

        <div className="rise mt-8 flex flex-wrap justify-center gap-3" style={d(5)}>
          <a href="#experience" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm transition-colors hover:border-ink">
            <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-500" />
            Software Developer Intern @ <b className="font-medium">Knight21</b>
          </a>
          <a href="#work" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line bg-surface px-4 text-sm transition-colors hover:border-ink">
            <span className="font-mono text-xs text-muted">built</span>
            <b className="font-medium">AnyDoc</b>
            <span className="text-ink2">· hybrid retrieval, cited answers</span>
          </a>
        </div>

        <div className="rise mt-8 flex flex-wrap items-center justify-center gap-3" style={d(6)}>
          <a href="#work" className="btn btn-primary">Explore my work</a>
          <a href="#contact" className="btn btn-ghost">Get in touch</a>
          {person.resume && (
            <a href={person.resume} download className="link ml-1 text-sm">Download resume</a>
          )}
        </div>

        <p className="rise mt-10 font-mono text-xs uppercase tracking-[0.14em] text-muted" style={d(7)}>
          Based in {person.location}
          {person.availableForOpportunities ? " · Open to opportunities" : ""}
        </p>
      </div>

      <div className="relative mx-auto mt-14 flex max-w-[680px] flex-col items-center gap-8 px-5 xl:mt-0 xl:static xl:block xl:max-w-none xl:px-0">
        <Float delay={3} className="xl:left-[5%] xl:top-20 2xl:left-[9%]">
          <HangingPortrait className="relative mx-auto w-[min(230px,70vw)]" />
        </Float>

        <Float delay={5} className="hidden xl:block xl:left-[24%] xl:top-24 2xl:left-[27%]">
          <div className={`${card} -rotate-6 p-2 hover:rotate-0 xl:hover:-translate-y-1`}>
            <div className="flex h-16 w-20 flex-col items-center justify-center gap-1 rounded-md bg-[#f6efe0]">
              <span aria-hidden className="text-xl">🚀</span>
              <span className="font-mono text-[10px] text-ink2">ship it</span>
            </div>
          </div>
        </Float>

        <Float delay={6} className="xl:bottom-14 xl:left-[4%] 2xl:left-[8%]">
          <div className="-rotate-2 transition-transform duration-300 hover:rotate-0 xl:hover:-translate-y-1">
            <MoodCard />
          </div>
        </Float>

        <Float delay={4} className="xl:right-[5%] xl:top-28 2xl:right-[9%]">
          <div className={`${card} rotate-2 hover:rotate-0 xl:hover:-translate-y-1`}>
            <LikeCard />
          </div>
        </Float>

        <Float delay={6} className="xl:right-[4%] xl:top-[44%] 2xl:right-[8%]">
          <div className={`${card} -rotate-2 w-[260px] p-5 hover:rotate-0 xl:hover:-translate-y-1`}>
            <p className="label text-[10px]">Off the clock</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {["Cricket", "Badminton", "Music"].map((h) => (
                <li key={h} className="tag">{h}</li>
              ))}
            </ul>
          </div>
        </Float>

        <Float delay={7} className="xl:bottom-10 xl:right-[3%] 2xl:right-[7%]">
          <figure className={`${card} w-[min(330px,86vw)] rotate-3 p-4 hover:rotate-0 xl:hover:-translate-y-1`}>
            <pre className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden font-mono text-[10.5px] leading-5 text-ink2">
              <code>
                <span className="text-accent">def</span> rrf(rankings, k=60):{"\n"}
                {"  "}scores = {"{}"}{"\n"}
                {"  "}<span className="text-accent">for</span> ranking <span className="text-accent">in</span> rankings:{"\n"}
                {"    "}<span className="text-accent">for</span> rank, doc <span className="text-accent">in</span> enumerate(ranking, 1):{"\n"}
                {"      "}scores[doc] = scores.get(doc, 0) + 1/(k+rank){"\n"}
                {"  "}<span className="text-accent">return</span> sorted(scores, key=scores.get, reverse=True)
              </code>
            </pre>
            <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.08em] text-muted">
              Illustrative · reciprocal rank fusion
            </figcaption>
          </figure>
        </Float>
      </div>
    </section>
  );
}
