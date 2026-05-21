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
        description="Prebuilt binaries for macOS, Linux, and Windows. No Rust required."
      >
        <p>
          Official releases are published on{" "}
          <a href={SITE.releasesUrl} target="_blank" rel="noopener noreferrer">
            GitHub Releases
          </a>
          . Pick the archive that matches your platform, extract, and run{" "}
          <code className="font-mono text-[var(--gt-code-text)]">r_tvui</code>.
        </p>

        <h2>macOS (Apple Silicon)</h2>
        <CodeBlock>{`curl -LO ${SITE.releasesUrl}/latest/download/r_tvui-aarch64-apple-darwin.tar.gz
tar xzf r_tvui-aarch64-apple-darwin.tar.gz
chmod +x r_tvui
sudo mv r_tvui /usr/local/bin/
r_tvui`}</CodeBlock>

        <h2>macOS (Intel)</h2>
        <CodeBlock>{`curl -LO ${SITE.releasesUrl}/latest/download/r_tvui-x86_64-apple-darwin.tar.gz
tar xzf r_tvui-x86_64-apple-darwin.tar.gz
chmod +x r_tvui
mv r_tvui ~/.local/bin/`}</CodeBlock>

        <h2>Linux (x86_64)</h2>
        <CodeBlock>{`curl -LO ${SITE.releasesUrl}/latest/download/r_tvui-x86_64-unknown-linux-gnu.tar.gz
tar xzf r_tvui-x86_64-unknown-linux-gnu.tar.gz
chmod +x r_tvui
mv r_tvui ~/.local/bin/`}</CodeBlock>

        <h2>Windows</h2>
        <p>
          Download <code className="font-mono">r_tvui-x86_64-pc-windows-msvc.zip</code>{" "}
          from Releases, extract, and run <code className="font-mono">r_tvui.exe</code>.
        </p>

        <h2>Build from source</h2>
        <CodeBlock title="Requires Rust">{INSTALL_SNIPPET.fromSource}</CodeBlock>

        <p>
          Full packaging and CI details are in the{" "}
          <Link href="/docs/distribution">distribution guide</Link>.
        </p>
      </DocPage>
    </div>
  );
}
