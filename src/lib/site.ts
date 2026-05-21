export const SITE = {
  name: "R-TVUI",
  tagline: "A fast, keyboard-driven terminal file explorer.",
  description:
    "R-TVUI is a Rust terminal UI file manager with Finder-style browsing, live previews, themes, and system default app integration.",
  repoUrl: "https://github.com/dfunani/r_tvui",
  releasesUrl: "https://github.com/dfunani/r_tvui/releases",
} as const;

export const MAIN_NAV = [
  { label: "Documentation", href: "/docs" },
  { label: "Download", href: "/download" },
  { label: "GitHub", href: SITE.repoUrl, external: true },
] as const;

export const INSTALL_SNIPPET = {
  macosArm: `curl -LO https://github.com/dfunani/r_tvui/releases/latest/download/r_tvui-aarch64-apple-darwin.tar.gz
tar xzf r_tvui-aarch64-apple-darwin.tar.gz
chmod +x r_tvui && sudo mv r_tvui /usr/local/bin/
r_tvui`,
  fromSource: `git clone https://github.com/dfunani/r_tvui.git
cd r_tvui
cargo run --release`,
} as const;
