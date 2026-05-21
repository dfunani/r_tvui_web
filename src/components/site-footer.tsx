import Link from "next/link";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-[var(--gt-line)] bg-[var(--gt-bg-2)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-[var(--gt-muted)]">
          {SITE.name} — MIT · Terminal file explorer in Rust
        </p>
        <div className="flex flex-wrap gap-4 text-sm">
          <Link href="/docs" className="text-[var(--gt-accent)] hover:underline">
            Docs
          </Link>
          <Link href="/download" className="text-[var(--gt-accent)] hover:underline">
            Download
          </Link>
          <a
            href={SITE.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--gt-accent)] hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
