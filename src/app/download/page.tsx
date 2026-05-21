import Link from "next/link";
import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { INSTALL_SNIPPET, SITE } from "@/lib/site";

export const metadata = {
  title: "Download",
};

export default function DownloadPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <DocPage
        title="Download R-TVUI"
        description="Prebuilt binaries from GitHub Releases. No Rust, no package manager setup."
      >
        <p>
          Go to{" "}
          <a href={SITE.releasesUrl} target="_blank" rel="noopener noreferrer">
            GitHub Releases
          </a>
          , pick the file for your system, and follow the steps below.
        </p>

        <h2>Which file do I need?</h2>
        <table>
          <thead>
            <tr>
              <th>Platform</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>macOS (Apple Silicon)</td>
              <td>
                <code className="font-mono">r_tvui-*-aarch64-apple-darwin.tar.gz</code>
              </td>
            </tr>
            <tr>
              <td>macOS (Intel)</td>
              <td>
                <code className="font-mono">r_tvui-*-x86_64-apple-darwin.tar.gz</code>
              </td>
            </tr>
            <tr>
              <td>Ubuntu / Debian</td>
              <td>
                <code className="font-mono">r-tvui_*_amd64.deb</code> (easiest)
              </td>
            </tr>
            <tr>
              <td>Other Linux</td>
              <td>
                <code className="font-mono">r_tvui-*-x86_64-unknown-linux-gnu.tar.gz</code>
              </td>
            </tr>
            <tr>
              <td>Windows</td>
              <td>
                <code className="font-mono">r_tvui-*-x86_64-pc-windows-msvc.zip</code>
              </td>
            </tr>
          </tbody>
        </table>

        <h2>macOS (Apple Silicon)</h2>
        <CodeBlock>{`curl -LO ${SITE.releasesUrl}/latest/download/r_tvui-aarch64-apple-darwin.tar.gz
tar xzf r_tvui-aarch64-apple-darwin.tar.gz
chmod +x r_tvui
sudo mv r_tvui /usr/local/bin/
r_tvui`}</CodeBlock>

        <h2>Ubuntu / Debian (.deb)</h2>
        <CodeBlock>{`curl -LO ${SITE.releasesUrl}/latest/download/r-tvui_0.1.0_amd64.deb
sudo apt install ./r-tvui_0.1.0_amd64.deb
r_tvui`}</CodeBlock>
        <p className="text-sm">
          Replace <code className="font-mono">0.1.0</code> with the version tag on the
          release page if newer.
        </p>

        <h2>Linux (tarball)</h2>
        <CodeBlock>{`curl -LO ${SITE.releasesUrl}/latest/download/r_tvui-x86_64-unknown-linux-gnu.tar.gz
tar xzf r_tvui-x86_64-unknown-linux-gnu.tar.gz
chmod +x r_tvui
mv r_tvui ~/.local/bin/
r_tvui`}</CodeBlock>

        <h2>Windows</h2>
        <p>
          Download the <code className="font-mono">.zip</code> from Releases, extract,
          and run <code className="font-mono">r_tvui.exe</code>.
        </p>

        <h2>Developers</h2>
        <CodeBlock title="Requires Rust">{INSTALL_SNIPPET.fromSource}</CodeBlock>

        <p>
          Full guide in the repo:{" "}
          <a
            href="https://github.com/dfunani/r_tvui/blob/master/docs/INSTALL.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            docs/INSTALL.md
          </a>
          . Maintainers:{" "}
          <Link href="/docs/distribution">distribution & CI</Link>.
        </p>
      </DocPage>
    </div>
  );
}
