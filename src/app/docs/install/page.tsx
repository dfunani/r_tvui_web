import Link from "next/link";
import { DocPage } from "@/components/doc-page";

export const metadata = { title: "Install" };

export default function InstallPage() {
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
          <a
            href="https://github.com/dfunani/r_tvui/releases"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Releases
          </a>
        </li>
        <li>Download the asset for your OS (see table on the Download page)</li>
        <li>Extract or install the <code className="font-mono">.deb</code></li>
        <li>Run <code className="font-mono">r_tvui</code></li>
      </ol>

      <p>
        Step-by-step commands: <Link href="/download">Download</Link>.
      </p>

      <h2>Linux: two easy options</h2>
      <ul>
        <li>
          <strong>Ubuntu / Debian</strong> — download{" "}
          <code className="font-mono">r-tvui_*_amd64.deb</code>, then{" "}
          <code className="font-mono">sudo apt install ./r-tvui_*.deb</code>
        </li>
        <li>
          <strong>Any distro</strong> — download the{" "}
          <code className="font-mono">.tar.gz</code>, extract, move to{" "}
          <code className="font-mono">~/.local/bin</code>
        </li>
      </ul>

      <h2>macOS & Windows</h2>
      <p>
        Download the <code className="font-mono">.tar.gz</code> (Mac) or{" "}
        <code className="font-mono">.zip</code> (Windows), extract, run the binary.
      </p>

      <h2>Configuration</h2>
      <p>
        Themes persist at{" "}
        <code className="font-mono">~/.config/rtvui/config.toml</code> after you
        press <code className="font-mono">t</code> in the app.
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
