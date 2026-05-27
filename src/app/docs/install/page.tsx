import Link from "next/link";
import { DocPage } from "@/components/doc-page";
import { getSiteConfig } from "@/lib/site-config";
import { docBlob } from "@/lib/site";

export const metadata = { title: "Install" };

export default async function InstallPage() {
  const site = getSiteConfig();

  return (
    <DocPage
      title="Install"
      description="The simplest ways to get R-TVUI on your machine."
    >
      <h2>Recommended: GitHub Releases</h2>
      <p>
        Every tagged release includes ready-to-run binaries. No Homebrew tap, no
        apt repository setup, no Rust toolchain.
      </p>
      <ol>
        <li>
          Open{" "}
          <a href={site.releasesUrl} target="_blank" rel="noopener noreferrer">
            GitHub Releases
          </a>
        </li>
        <li>Download the asset for your OS (see table on the Download page)</li>
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
        <code className="font-mono">aarch64-unknown-linux-gnu</code>. Extract the{" "}
        <code className="font-mono">.tar.gz</code>, move to{" "}
        <code className="font-mono">~/.local/bin</code>, and ensure it is on your PATH.
      </p>

      <h2>macOS & Windows</h2>
      <p>
        Download the <code className="font-mono">.tar.gz</code> (Mac) or{" "}
        <code className="font-mono">.zip</code> (Windows), extract, run the binary.
      </p>

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
            <td>Add the binary to PATH or run with ./r_tvui</td>
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
