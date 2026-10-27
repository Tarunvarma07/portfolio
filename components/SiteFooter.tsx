import { person } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line py-10">
      <div className="wrap flex flex-col gap-6 text-sm text-ink2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-mono text-[13px] font-medium text-ink">{person.wordmark}</p>
          <p className="mt-2">Designed with intention. Built with care.</p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a className="link inline-block py-2" href={person.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="link inline-block py-2" href={person.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <span className="font-mono text-xs text-muted">© {new Date().getFullYear()} {person.short}</span>
        </div>
      </div>
    </footer>
  );
}
