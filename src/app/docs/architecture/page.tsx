import { DocPage } from "@/components/doc-page";

export const metadata = { title: "Architecture" };

export default function ArchitecturePage() {
  return (
    <DocPage
      title="Architecture"
      description="How the Rust workspace and src/ modules fit together."
    >
      <h2>Repository layout</h2>
      <pre className="overflow-x-auto rounded-xl border border-[var(--gt-line)] bg-[var(--gt-code)] p-4 font-mono text-sm text-[var(--gt-code-text)]">{`r_tvui/
├── src/              # Main app (ratatui TUI)
│   ├── models/       # App state
│   ├── events/       # Input loop & keys
│   ├── ui/           # Rendering & themes
│   └── utils/        # Navigation, preview, config
├── crates/
│   ├── core/         # Paths, IDs, formatters
│   └── filesystem/   # Directory listing, cache
└── docs/             # Design & distribution specs`}</pre>

      <h2>Runtime flow</h2>
      <ol>
        <li>
          <code className="font-mono">main</code> starts ratatui and{" "}
          <code className="font-mono">App::run</code>
        </li>
        <li>Each frame: draw UI from <code className="font-mono">App</code> state</li>
        <li>Key events dispatch to navigation / theme / quit handlers</li>
        <li>
          <code className="font-mono">filesystem::list_directories</code> fills
          listings; side pane updated via <code className="font-mono">browser</code> module
        </li>
      </ol>

      <h2>Design goals</h2>
      <ul>
        <li>Single static binary for distribution</li>
        <li>Never block the UI thread on large <code className="font-mono">read_dir</code> (async path planned)</li>
        <li>Pluggable preview pipeline and config-driven keymaps (roadmap)</li>
        <li>Extension via workspace crates, not forks</li>
      </ul>

      <p>
        Full specifications:{" "}
        <a
          href="https://github.com/dfunani/r_tvui/blob/master/docs/DESIGN_SPEC.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          DESIGN_SPEC.md
        </a>{" "}
        and{" "}
        <a
          href="https://github.com/dfunani/r_tvui/blob/master/docs/IMPLEMENTATION_PLAN.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          IMPLEMENTATION_PLAN.md
        </a>{" "}
        in the main repo.
      </p>
    </DocPage>
  );
}
