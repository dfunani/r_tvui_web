import Link from "next/link";
import { DocPage } from "@/components/doc-page";

export const metadata = { title: "Distribution" };

export default function DistributionPage() {
  return (
    <DocPage
      title="Distribution"
      description="Ship prebuilt binaries to users on macOS, Linux, and Windows."
    >
      <p>
        R-TVUI distributes as a <strong>single static binary</strong> per platform.
        Users do not need Rust installed.
      </p>

      <h2>Release process (summary)</h2>
      <ol>
        <li>
          <code className="font-mono">cargo build --release</code>
        </li>
        <li>Tag <code className="font-mono">v0.1.0</code> and push</li>
        <li>Attach platform archives to GitHub Releases</li>
        <li>Optional: GitHub Actions matrix build on tag (documented in repo)</li>
      </ol>

      <h2>Targets</h2>
      <ul>
        <li>
          <code className="font-mono">aarch64-apple-darwin</code> — macOS Apple Silicon
        </li>
        <li>
          <code className="font-mono">x86_64-apple-darwin</code> — macOS Intel
        </li>
        <li>
          <code className="font-mono">x86_64-unknown-linux-gnu</code> — Linux
        </li>
        <li>
          <code className="font-mono">x86_64-pc-windows-msvc</code> — Windows
        </li>
      </ul>

      <p>
        The canonical maintainer guide is{" "}
        <a
          href="https://github.com/dfunani/r_tvui/blob/master/docs/DISTRIBUTION.md"
          target="_blank"
          rel="noopener noreferrer"
        >
          docs/DISTRIBUTION.md
        </a>{" "}
        in the main repository (CI workflow, packaging, signing notes).
      </p>

      <p>
        End-user install steps: <Link href="/download">Download page</Link>.
      </p>
    </DocPage>
  );
}
