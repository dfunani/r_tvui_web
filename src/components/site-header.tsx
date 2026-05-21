import Link from "next/link";
import { MAIN_NAV, SITE } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--gt-line)] bg-[var(--gt-bg)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="rounded-md bg-[var(--gt-accent)]/15 px-2 py-0.5 text-sm text-[var(--gt-accent-2)]">
            R-TVUI
          </span>
        </Link>
        <nav className="flex items-center gap-1 text-sm">
          {MAIN_NAV.map((item) =>
            "external" in item && item.external ? (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-2 text-[var(--gt-muted)] transition hover:bg-[var(--gt-panel)] hover:text-[var(--gt-ink)]"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-2 text-[var(--gt-muted)] transition hover:bg-[var(--gt-panel)] hover:text-[var(--gt-ink)]"
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>
      </div>
      <div className="sr-only">{SITE.description}</div>
    </header>
  );
}
