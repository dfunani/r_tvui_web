import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { INSTALL_SNIPPET } from "@/lib/site";

export const metadata = { title: "Getting started" };

export default function GettingStartedPage() {
  return (
    <DocPage
      title="Getting started"
      description="What R-TVUI is, what you need, and your first session in the terminal."
    >
      <p>
        <strong>R-TVUI</strong> is a terminal file explorer written in Rust. It
        is keyboard-driven, fast on large directories, and designed around a{" "}
        <strong>Mac Finder-style</strong> layout: the left pane lists the current
        folder; the right pane shows the contents of a highlighted directory or a
        preview of a highlighted file.
      </p>

      <h2>Requirements</h2>
      <ul>
        <li>A modern terminal (iTerm2, WezTerm, Alacritty, Windows Terminal, etc.)</li>
        <li>True-color support recommended for themes</li>
        <li>macOS: built-in <code className="font-mono">open</code> for files</li>
        <li>Linux: <code className="font-mono">xdg-open</code> (package <code className="font-mono">xdg-utils</code>)</li>
      </ul>

      <h2>First run</h2>
      <CodeBlock title="From source (developers)">{INSTALL_SNIPPET.fromSource}</CodeBlock>
      <p>
        Or install a release binary — see{" "}
        <Link href="/docs/install">Install & download</Link>.
      </p>

      <h2>What you will see</h2>
      <ul>
        <li>
          <strong>Path bar</strong> — current directory and active theme
        </li>
        <li>
          <strong>Browser</strong> — file list with icons for dirs, files, symlinks
        </li>
        <li>
          <strong>Side pane</strong> — folder contents or file preview (hidden on <code className="font-mono">..</code>)
        </li>
        <li>
          <strong>Status bar</strong> — entry count and key hints
        </li>
      </ul>

      <h2>Next steps</h2>
      <ul>
        <li>
          <Link href="/docs/usage">Using R-TVUI</Link> — full key reference
        </li>
        <li>
          <Link href="/docs/themes">Themes & config</Link> — personalize appearance
        </li>
      </ul>
    </DocPage>
  );
}
