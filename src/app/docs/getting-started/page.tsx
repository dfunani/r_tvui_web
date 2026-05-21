import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { getSiteConfig } from "@/lib/site-config";
import { installSnippets } from "@/lib/site";

export const metadata = { title: "Getting started" };

export default async function GettingStartedPage() {
  const site = getSiteConfig();
  const snippets = installSnippets(site);

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
        <a href={site.releasesUrl} target="_blank" rel="noopener noreferrer">
          GitHub Releases
        </a>
        . That is the only install step for most users.
      </p>

      <h2>2. Run</h2>
      <CodeBlock>{`r_tvui
r_tvui ~/Projects    # open a specific folder`}</CodeBlock>
      <p>
        Press <code className="font-mono">?</code> in the app for the full key list.{" "}
        <code className="font-mono">Esc</code> quits when no filter is active.
      </p>

      <h2>3. Learn the keys</h2>
      <p>
        See <Link href="/docs/usage">Using R-TVUI</Link>. Essentials:{" "}
        <code className="font-mono">j</code>/<code className="font-mono">k</code> move,{" "}
        <code className="font-mono">l</code> open folder, Enter on files,{" "}
        <code className="font-mono">h</code> parent, <code className="font-mono">?</code> help,{" "}
        <code className="font-mono">q</code> quit.
      </p>

      <h2>Developers</h2>
      <CodeBlock title="From source">{snippets.fromSource}</CodeBlock>
    </DocPage>
  );
}
