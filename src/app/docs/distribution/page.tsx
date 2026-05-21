import { DocPage } from "@/components/doc-page";
import { getSiteConfig } from "@/lib/site-config";
import { docBlob } from "@/lib/site";

export const metadata = { title: "Distribution" };

export default async function DistributionPage() {
  const site = getSiteConfig();

  return (
    <DocPage
      title="Distribution (maintainers)"
      description="How releases are built and published — not needed for end users."
    >
      <p>
        <strong>Users</strong> should follow{" "}
        <a href={docBlob(site, "INSTALL.md")} target="_blank" rel="noopener noreferrer">
          docs/INSTALL.md
        </a>{" "}
        or the <a href="/download">Download page</a>.
      </p>

      <h2>What CI publishes</h2>
      <p>Each <code className="font-mono">v*</code> git tag triggers a release with:</p>
      <ul>
        <li>macOS tarballs (ARM + Intel)</li>
        <li>Linux tarball</li>
        <li>Windows zip</li>
      </ul>

      <h2>Maintainer workflow</h2>
      <ol>
        <li>Bump version in Cargo.toml</li>
        <li>
          <code className="font-mono">cargo test --workspace</code>
        </li>
        <li>
          <code className="font-mono">git tag v0.1.0 && git push origin v0.1.0</code>
        </li>
        <li>Wait for GitHub Actions → check Releases assets</li>
      </ol>

      <p>
        Full details:{" "}
        <a href={docBlob(site, "DISTRIBUTION.md")} target="_blank" rel="noopener noreferrer">
          docs/DISTRIBUTION.md
        </a>
      </p>
    </DocPage>
  );
}
