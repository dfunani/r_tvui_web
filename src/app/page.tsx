import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { getSiteConfig } from "@/lib/site-config";
import { installSnippets } from "@/lib/site";

const audiences = [
  {
    title: "Users",
    description:
      "Download a single binary, open your terminal, and browse files with Vim-style keys and a Mac Finder-style split view.",
    href: "/docs/getting-started",
    cta: "Get started",
  },
  {
    title: "Developers",
    description:
      "Rust workspace with core, filesystem, and app crates. Extend previewers, themes, and async listing without blocking the UI.",
    href: "/docs/architecture",
    cta: "Architecture",
  },
  {
    title: "Contributors",
    description:
      "MIT-licensed, documented milestones, and clear module boundaries in src/ and crates/. PRs and issues welcome on GitHub.",
    href: "/docs/contributing",
    cta: "Contributing guide",
  },
];

const features = [
  "Finder-style browser: folder contents in the right pane",
  "Side-pane preview; Enter opens files when a default app exists",
  "Five terminal-friendly themes with persisted config",
  "Single static binary — no runtime beyond your shell",
];

export default async function HomePage() {
  const site = getSiteConfig();
  const snippets = installSnippets(site);

  return (
    <div>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="pill pill-ok mb-4">Terminal · Rust · Keyboard-first</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          {site.tagline}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-[var(--gt-muted)]">
          {site.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/docs/getting-started"
            className="rounded-xl bg-[var(--gt-accent)] px-5 py-2.5 text-sm font-semibold text-[var(--gt-bg)] transition hover:opacity-90"
          >
            Read the docs
          </Link>
          <Link
            href="/download"
            className="rounded-xl border border-[var(--gt-line)] bg-[var(--gt-panel)] px-5 py-2.5 text-sm font-medium text-[var(--gt-ink)] transition hover:border-[var(--gt-accent)]"
          >
            Download
          </Link>
          <a
            href={site.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl px-5 py-2.5 text-sm font-medium text-[var(--gt-muted)] transition hover:text-[var(--gt-ink)]"
          >
            View on GitHub →
          </a>
        </div>
        <div className="mt-12">
          <CodeBlock title="Quick install (macOS Apple Silicon)">
            {snippets.macosArm}
          </CodeBlock>
        </div>
      </section>

      <section className="border-y border-[var(--gt-line)] bg-[var(--gt-panel)]/40 py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-xl font-semibold text-[var(--gt-accent)]">
            Why R-TVUI?
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((f) => (
              <li
                key={f}
                className="flex gap-2 text-[var(--gt-muted)] before:text-[var(--gt-accent-2)] before:content-['▸']"
              >
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-xl font-semibold text-[var(--gt-ink)]">
          Built for everyone in the project
        </h2>
        <p className="mt-2 max-w-2xl text-[var(--gt-muted)]">
          Install from GitHub Releases in a few commands — no package manager
          setup required.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="card flex flex-col">
              <h3 className="text-lg font-semibold text-[var(--gt-accent-2)]">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-[var(--gt-muted)]">
                {a.description}
              </p>
              <Link
                href={a.href}
                className="mt-4 text-sm font-medium text-[var(--gt-accent)] hover:underline"
              >
                {a.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
