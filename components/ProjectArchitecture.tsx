// Minimal flow illustration. Vertical on small screens, horizontal from lg.
export function ProjectArchitecture({
  title,
  steps,
  note,
  stacked = false,
}: {
  title: string;
  steps: string[];
  note: string;
  stacked?: boolean;
}) {
  return (
    <figure className="border-t border-line bg-bg/60 p-5 sm:p-8">
      <figcaption className="label mb-6">{title}</figcaption>
      <ol className={`flex flex-col gap-0 ${stacked ? "" : "lg:flex-row lg:items-stretch"}`}>
        {steps.map((s, i) => (
          <li key={s} className={`relative flex flex-1 items-center gap-4 py-3 ${stacked ? "" : "lg:flex-col lg:items-start lg:gap-3 lg:py-0 lg:pr-4"}`}>
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-[var(--radius)] border border-line bg-surface font-mono text-xs text-muted">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-sm font-medium leading-snug">{s}</span>
            {i < steps.length - 1 && (
              <>
                <span aria-hidden className={`absolute left-3.5 top-[calc(50%+18px)] h-[calc(100%-22px)] w-px bg-line ${stacked ? "" : "lg:hidden"}`} />
                {!stacked && <span aria-hidden className="absolute left-9 right-2 top-3.5 hidden h-px bg-line lg:block" />}
              </>
            )}
          </li>
        ))}
      </ol>
      <p className="mt-6 font-mono text-xs text-muted">{note}</p>
    </figure>
  );
}
