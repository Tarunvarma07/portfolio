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
      <p className="label md:col-span-3 md:pt-3">{index}</p>
      <div className="md:col-span-9">
        <h2 id={id} className="max-w-[20ch] text-[clamp(1.875rem,4.2vw,3rem)] font-semibold leading-[1.1] tracking-[-0.025em] text-balance">
          {title}
        </h2>
        {children && <p className="mt-5 max-w-[58ch] text-lg leading-relaxed text-ink2">{children}</p>}
      </div>
    </div>
  );
}
