import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { INSTALL_SNIPPET } from "@/lib/site";

export const metadata = { title: "Getting started" };

export default function GettingStartedPage() {
  return (
    <DocPage
      title="Getting started"
      description="Install from GitHub Releases and run your first session."
    >
      <p>
        <strong>R-TVUI</strong> is a terminal file explorer: keyboard navigation,
        Finder-style side pane, themes, and opening files with your system default app.
      </p>

      <h2>1. Install</h2>
      <p>
        Download from{" "}
        <Link href="/download">Download</Link> or{" "}
        <a
          href="https://github.com/dfunani/r_tvui/releases"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Releases
        </a>
        . That is the only install step for most users.
      </p>

      <h2>2. Run</h2>
      <CodeBlock>r_tvui</CodeBlock>
      <p>Opens in your current directory. Use from any folder:</p>
      <CodeBlock>cd ~/Projects && r_tvui</CodeBlock>

      <h2>3. Learn the keys</h2>
      <p>
        See <Link href="/docs/usage">Using R-TVUI</Link>. Essentials:{" "}
        <code className="font-mono">j</code>/<code className="font-mono">k</code> move,{" "}
        <code className="font-mono">l</code> open folder, Enter on files,{" "}
        <code className="font-mono">h</code> parent, <code className="font-mono">q</code> quit.
      </p>

      <h2>Developers</h2>
      <CodeBlock title="From source">{INSTALL_SNIPPET.fromSource}</CodeBlock>
    </DocPage>
  );
}
