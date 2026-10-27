"use client";

import { useState } from "react";

// mailto: only works when a mail app is configured, so offer two fallbacks.
export function EmailActions({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <div className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line py-2 text-sm">
      <a
        className="link inline-block py-2"
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open in Gmail ↗
      </a>
      <button type="button" onClick={copy} className="link inline-block py-2" aria-live="polite">
        {copied ? "Copied" : "Copy address"}
      </button>
    </div>
  );
}
