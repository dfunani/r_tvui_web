import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { getSiteConfig } from "@/lib/site-config";
import {
  docBlob,
  installSnippets,
  releaseDownloadLatest,
  releaseDownloadVersioned,
  releaseTargets,
} from "@/lib/site";

export const metadata = {
  title: "Download",
};

export default async function DownloadPage() {
  const site = getSiteConfig();
  const snippets = installSnippets(site);
  const targets = releaseTargets(site);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <DocPage
        title="Download R-TVUI"
        description="Prebuilt binaries from GitHub Releases. No Rust, no package manager setup."
      >
        <p>
          Pick your platform below, or open{" "}
          <a href={site.releasesUrl} target="_blank" rel="noopener noreferrer">
            GitHub Releases
          </a>{" "}
          (latest tag: <code className="font-mono">v{site.releaseVersion}</code>
          ).
        </p>

        <p className="text-sm text-[var(--gt-muted)]">
          Install scripts use versioned URLs (e.g.{" "}
          <code className="font-mono">
            r_tvui-{site.releaseVersion}-aarch64-unknown-linux-gnu.tar.gz
          </code>
          ) so they work as soon as the tag is published. <strong>Latest</strong>{" "}
          links use short names (e.g.{" "}
          <code className="font-mono">r_tvui-aarch64-unknown-linux-gnu.tar.gz</code>
          ). On Linux, run <code className="font-mono">uname -m</code>:{" "}
          <code className="font-mono">aarch64</code> needs the ARM64 Linux build, not
          x86_64. If you see <code className="font-mono">exec format error</code>, you
          picked the wrong architecture.
        </p>

        <h2>Direct downloads</h2>
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>File</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {targets.map(({ label, target, hint }) => (
              <tr key={target}>
                <td>{label}</td>
                <td>
                  <code className="font-mono text-xs">{hint}</code>
                </td>
                <td>
                  <a
                    href={releaseDownloadLatest(site, target)}
                    className="font-medium text-[var(--gt-accent)] hover:underline"
                  >
                    Latest
                  </a>
                  {" · "}
                  <a
                    href={releaseDownloadVersioned(site, target)}
                    className="text-sm text-[var(--gt-muted)] hover:underline"
                  >
                    v{site.releaseVersion}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2>macOS (Apple Silicon)</h2>
        <CodeBlock>{snippets.macosArm}</CodeBlock>
        <p className="text-sm text-[var(--gt-muted)]">
          If macOS blocks the app:{" "}
          <code className="font-mono">{snippets.macosQuarantine}</code>
        </p>

        <h2>macOS (Intel)</h2>
        <CodeBlock>{snippets.macosIntel}</CodeBlock>

        <h2>Linux — pick your CPU</h2>
        <CodeBlock title="Check architecture">{snippets.archHint}</CodeBlock>

        <h3>Linux (x86_64 — Intel / AMD)</h3>
        <CodeBlock>{snippets.linuxX64}</CodeBlock>

        <h3>Linux (ARM64 — aarch64 VPS, Raspberry Pi, etc.)</h3>
        <CodeBlock>{snippets.linuxArm}</CodeBlock>
        <p className="text-sm text-[var(--gt-muted)]">
          Do not use the macOS Apple Silicon build on Linux. For opening files with
          Enter, install <code className="font-mono">xdg-utils</code> if needed.
        </p>

        <h2>Windows</h2>
        <p>{snippets.windowsNote}</p>
        <p>
          Or download:{" "}
          <a
            href={releaseDownloadLatest(site, "x86_64-pc-windows-msvc")}
            className="text-[var(--gt-accent)] hover:underline"
          >
            latest zip
          </a>
        </p>

        <h2>After install</h2>
        <CodeBlock>{`r_tvui                  # current directory
r_tvui ~/Projects       # start in a folder
r_tvui --version`}</CodeBlock>

        <h2>Developers</h2>
        <CodeBlock title="Requires Rust">{snippets.fromSource}</CodeBlock>

        <p>
          Full guide:{" "}
          <a
            href={docBlob(site, "INSTALL.md")}
            target="_blank"
            rel="noopener noreferrer"
          >
            docs/INSTALL.md
          </a>
          . Usage keys: <Link href="/docs/usage">Using R-TVUI</Link>. Maintainers:{" "}
          <Link href="/docs/distribution">distribution & CI</Link>.
        </p>
      </DocPage>
    </div>
  );
}
