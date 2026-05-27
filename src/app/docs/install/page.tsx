import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { getSiteConfig } from "@/lib/site-config";
import { docBlob, installSnippets } from "@/lib/site";

export const metadata = { title: "Install" };

export default async function InstallPage() {
  const site = getSiteConfig();
  const snippets = installSnippets(site);

  return (
    <DocPage
      title="Install"
      description="install.sh, GitHub Releases, and building from source."
    >
      <h2>Recommended: install.sh</h2>
      <p>
        Downloads the latest <code className="font-mono">r_tvui</code> for your OS/arch
        from GitHub Releases into <code className="font-mono">~/.local/bin</code>.
      </p>
      <CodeBlock>{snippets.curlInstall}</CodeBlock>
      <p>
        Pin a version:{" "}
        <code className="font-mono">{snippets.curlInstallPinned}</code>
      </p>
      <p className="text-sm text-[var(--gt-muted)]">
        macOS and Linux only. Windows: use the zip on{" "}
        <Link href="/download">Download</Link>.
      </p>

      <h2>GitHub Releases (manual)</h2>
      <ol>
        <li>
          Open{" "}
          <a href={site.releasesUrl} target="_blank" rel="noopener noreferrer">
            GitHub Releases
          </a>{" "}
          (latest: <code className="font-mono">v{site.releaseVersion}</code>)
        </li>
        <li>
          Download the asset for your platform (see <Link href="/download">Download</Link>)
        </li>
        <li>Extract the archive and make the binary executable</li>
        <li>
          Run <code className="font-mono">r_tvui</code> (or{" "}
          <code className="font-mono">r_tvui ~/path</code> to start elsewhere)
        </li>
      </ol>

      <p>
        Step-by-step commands: <Link href="/download">Download</Link> or{" "}
        <a href={docBlob(site, "INSTALL.md")} target="_blank" rel="noopener noreferrer">
          docs/INSTALL.md
        </a>
        .
      </p>

      <h2>Linux</h2>
      <p>
        Run <code className="font-mono">uname -m</code> first:{" "}
        <code className="font-mono">x86_64</code> →{" "}
        <code className="font-mono">x86_64-unknown-linux-gnu</code>;{" "}
        <code className="font-mono">aarch64</code> →{" "}
        <code className="font-mono">aarch64-unknown-linux-gnu</code>. The install script
        picks the right build automatically.
      </p>

      <h2>macOS & Windows</h2>
      <p>
        macOS: use <code className="font-mono">install.sh</code> or download the{" "}
        <code className="font-mono">.tar.gz</code>. Windows: download the{" "}
        <code className="font-mono">.zip</code>, extract, run <code className="font-mono">r_tvui.exe</code>.
      </p>

      <h2>Build from source</h2>
      <CodeBlock title="Requires Rust">{snippets.fromSource}</CodeBlock>

      <h2>Configuration</h2>
      <p>
        Settings persist at{" "}
        <code className="font-mono">~/.config/rtvui/config.toml</code> (theme, sort,
        bookmarks, trash preference). Press <code className="font-mono">t</code> to
        cycle themes in the app.
      </p>

      <h2>Troubleshooting</h2>
      <table>
        <thead>
          <tr>
            <th>Issue</th>
            <th>Fix</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>command not found</td>
            <td>
              Add <code className="font-mono">~/.local/bin</code> to PATH:{" "}
              <code className="font-mono">{snippets.pathHint}</code>
            </td>
          </tr>
          <tr>
            <td>Linux: exec format error</td>
            <td>
              Wrong CPU build — use ARM64 Linux on aarch64, x86_64 on Intel/AMD (see{" "}
              <Link href="/download">Download</Link>)
            </td>
          </tr>
          <tr>
            <td>Linux: file won&apos;t open on Enter</td>
            <td>sudo apt install xdg-utils</td>
          </tr>
          <tr>
            <td>macOS security block</td>
            <td>xattr -d com.apple.quarantine r_tvui</td>
          </tr>
        </tbody>
      </table>
    </DocPage>
  );
}
