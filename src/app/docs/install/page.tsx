import Link from "next/link";
import { DocPage } from "@/components/doc-page";

export const metadata = { title: "Install & download" };

export default function InstallPage() {
  return (
    <DocPage
      title="Install & download"
      description="Get R-TVUI on your machine without installing Rust."
    >
      <p>
        The recommended path for most users is a <strong>prebuilt binary</strong>{" "}
        from GitHub Releases. Developers can build from source with Cargo.
      </p>

      <p>
        Step-by-step install commands for every platform live on the{" "}
        <Link href="/download">Download page</Link>.
      </p>

      <h2>Put the binary on your PATH</h2>
      <ul>
        <li>
          macOS: <code className="font-mono">/usr/local/bin</code> or{" "}
          <code className="font-mono">~/.local/bin</code>
        </li>
        <li>Linux: <code className="font-mono">~/.local/bin</code></li>
        <li>Windows: add the extract folder to PATH in System Settings</li>
      </ul>

      <h2>Configuration directory</h2>
      <p>
        Settings are stored at{" "}
        <code className="font-mono">~/.config/rtvui/config.toml</code>. The app
        creates this when you change themes. Override with{" "}
        <code className="font-mono">RTVUI_CONFIG=/path/to/config.toml</code>.
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
            <td>Ensure install directory is on PATH</td>
          </tr>
          <tr>
            <td>Colors look wrong</td>
            <td>Use a true-color terminal; try theme <code className="font-mono">mono</code></td>
          </tr>
          <tr>
            <td>Enter does not open files (Linux)</td>
            <td>Install <code className="font-mono">xdg-utils</code></td>
          </tr>
          <tr>
            <td>macOS quarantine warning</td>
            <td>
              <code className="font-mono">xattr -d com.apple.quarantine r_tvui</code>
            </td>
          </tr>
        </tbody>
      </table>

      <p>
        Maintainers: see <Link href="/docs/distribution">Distribution</Link> for
        building releases and CI.
      </p>
    </DocPage>
  );
}
