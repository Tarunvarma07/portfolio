export function SectionHeading({
  index,
  title,
  children,
  id,
}: {
  index: string;
  title: string;
  children?: React.ReactNode;
  id?: string;
}) {
  return (
    <div className="mb-12 grid gap-4 md:mb-16 md:grid-cols-12 md:gap-8">
      <p className="flex items-center gap-2 font-mono text-sm font-medium uppercase tracking-[0.06em] text-ink md:col-span-3 md:pt-4"><span aria-hidden className="h-2 w-2 bg-accent" />{index}</p>
      <div className="md:col-span-9">
        <h2 id={id} className="max-w-[22ch] text-[clamp(2rem,4.6vw,3.25rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-balance">
          {title}
        </h2>
        {children && <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-ink2 md:text-xl">{children}</p>}
      </div>
    </div>
  );
}
