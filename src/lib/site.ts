import type { ReleaseTarget, SiteConfig } from "./site-config";

export type { ReleaseTarget, SiteConfig };

function targetExtension(target: ReleaseTarget): "tar.gz" | "zip" {
  return target === "x86_64-pc-windows-msvc" ? "zip" : "tar.gz";
}

export function versionedAssetFilename(
  site: SiteConfig,
  target: ReleaseTarget,
): string {
  return `r_tvui-${site.releaseVersion}-${target}.${targetExtension(target)}`;
}

export function latestAssetFilename(
  site: SiteConfig,
  target: ReleaseTarget,
): string {
  return `r_tvui-${target}.${targetExtension(target)}`;
}

export function releaseDownloadVersioned(
  site: SiteConfig,
  target: ReleaseTarget,
): string {
  return `${site.releasesUrl}/download/v${site.releaseVersion}/${versionedAssetFilename(site, target)}`;
}

export function releaseDownloadLatest(
  site: SiteConfig,
  target: ReleaseTarget,
): string {
  return `${site.releasesUrl}/latest/download/${latestAssetFilename(site, target)}`;
}

export function docBlob(site: SiteConfig, filename: string): string {
  return `${site.repoUrl}/blob/${site.defaultBranch}/docs/${filename}`;
}

export function mainNav(site: SiteConfig) {
  return [
    { label: "Documentation", href: "/docs" },
    { label: "Download", href: "/download" },
    { label: "GitHub", href: site.repoUrl, external: true as const },
  ];
}

function installTarball(
  site: SiteConfig,
  target: ReleaseTarget,
  installLine: string,
): string {
  const archive = latestAssetFilename(site, target);
  const url = releaseDownloadLatest(site, target);
  return `curl -fL -O ${url}
tar xzf ${archive}
chmod +x r_tvui
${installLine}
r_tvui`;
}

export function installSnippets(site: SiteConfig) {
  return {
    macosArm: installTarball(
      site,
      "aarch64-apple-darwin",
      "sudo mv r_tvui /usr/local/bin/   # optional: install globally",
    ),
    macosIntel: installTarball(
      site,
      "x86_64-apple-darwin",
      "mv r_tvui ~/.local/bin/   # ensure ~/.local/bin is on PATH",
    ),
    linuxTar: installTarball(
      site,
      "x86_64-unknown-linux-gnu",
      "mv r_tvui ~/.local/bin/   # ensure ~/.local/bin is on PATH",
    ),
    macosQuarantine:
      "xattr -d com.apple.quarantine r_tvui   # if macOS blocks the binary",
    windowsNote: `Download ${latestAssetFilename(site, "x86_64-pc-windows-msvc")} from Releases, extract, run r_tvui.exe`,
    fromSource: `git clone ${site.repoUrl}.git
cd r_tvui
cargo build --release
./target/release/r_tvui`,
  };
}

export function releaseTargets(site: SiteConfig) {
  const rows: { label: string; target: ReleaseTarget; hint: string }[] = [
    {
      label: "macOS (Apple Silicon)",
      target: "aarch64-apple-darwin",
      hint: latestAssetFilename(site, "aarch64-apple-darwin"),
    },
    {
      label: "macOS (Intel)",
      target: "x86_64-apple-darwin",
      hint: latestAssetFilename(site, "x86_64-apple-darwin"),
    },
    {
      label: "Linux (x86_64)",
      target: "x86_64-unknown-linux-gnu",
      hint: latestAssetFilename(site, "x86_64-unknown-linux-gnu"),
    },
    {
      label: "Windows",
      target: "x86_64-pc-windows-msvc",
      hint: latestAssetFilename(site, "x86_64-pc-windows-msvc"),
    },
  ];
  return rows;
}
