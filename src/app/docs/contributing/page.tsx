import { DocPage } from "@/components/doc-page";
import { getSiteConfig } from "@/lib/site-config";

export const metadata = { title: "Contributing" };

export default async function ContributingPage() {
  const site = getSiteConfig();

  return (
    <DocPage
      title="Contributing"
      description="How to report issues, propose changes, and match project conventions."
    >
      <h2>Welcome</h2>
      <p>
        Contributions to R-TVUI are welcome — bug reports, docs, themes, filesystem
        improvements, and preview pipeline work. The project is MIT-licensed.
      </p>

      <h2>Getting set up</h2>
      <ol>
        <li>
          Fork and clone{" "}
          <a href={site.repoUrl} target="_blank" rel="noopener noreferrer">
            {site.repoUrl}
          </a>
        </li>
        <li>
          Read <a href="/docs/development">Development</a> and{" "}
          <a href="/docs/architecture">Architecture</a>
        </li>
        <li>
          <code className="font-mono">cargo test --workspace</code> before opening a PR
        </li>
      </ol>

      <h2>Code style</h2>
      <ul>
        <li>Follow existing module layout under <code className="font-mono">src/</code></li>
        <li>Keep UI logic in <code className="font-mono">ui/</code>, state in <code className="font-mono">models/</code></li>
        <li>Prefer extending <code className="font-mono">crates/</code> for reusable logic</li>
        <li>Minimal scope per PR — one feature or fix</li>
        <li>Update this website if user-facing behavior or install steps change</li>
      </ul>

      <h2>Documentation</h2>
      <p>
        User-facing docs live in this <code className="font-mono">r_tvui_web</code> app.
        Deep specs remain in the main repo under <code className="font-mono">docs/</code>.
        When you add a feature, update the relevant page here and link from the docs index.
      </p>

      <h2>Reporting issues</h2>
      <p>
        Use{" "}
        <a href={site.issuesUrl} target="_blank" rel="noopener noreferrer">
          GitHub Issues
        </a>
        . Include OS, terminal emulator, steps to reproduce, and screenshots if UI-related.
      </p>

      <h2>Roadmap areas</h2>
      <ul>
        <li>Async directory listing with Tokio</li>
        <li>TOML keymap and config schema</li>
        <li>Tabs, filter mode, visual selection</li>
        <li>Copy/move/delete task queue</li>
        <li>GitHub Actions release workflow in repo</li>
      </ul>
    </DocPage>
  );
}
