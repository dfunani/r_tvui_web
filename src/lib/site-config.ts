import { cache } from "react";
import "server-only";

const trim = (value: string | undefined, fallback: string) =>
  (value?.trim() || fallback).replace(/\/$/, "");

/** Read env at runtime (server). Supports legacy `NEXT_PUBLIC_*` names as fallback. */
function readEnv(primary: string, legacy: string, fallback: string): string {
  return trim(process.env[primary] ?? process.env[legacy], fallback);
}

export type ReleaseTarget =
  | "aarch64-apple-darwin"
  | "x86_64-apple-darwin"
  | "x86_64-unknown-linux-gnu"
  | "x86_64-pc-windows-msvc";

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  repoUrl: string;
  releasesUrl: string;
  issuesUrl: string;
  defaultBranch: string;
  siteUrl: string;
  releaseVersion: string;
};

export const getSiteConfig = cache((): SiteConfig => {
  const repoUrl = readEnv(
    "GITHUB_REPO_URL",
    "NEXT_PUBLIC_GITHUB_REPO_URL",
    "https://github.com/dfunani/r_tvui",
  );

  const defaultBranch = readEnv(
    "GITHUB_DEFAULT_BRANCH",
    "NEXT_PUBLIC_GITHUB_DEFAULT_BRANCH",
    "master",
  );

  const releasesUrl = readEnv(
    "GITHUB_RELEASES_URL",
    "NEXT_PUBLIC_GITHUB_RELEASES_URL",
    `${repoUrl}/releases`,
  );

  const releaseVersion = readEnv(
    "RELEASE_VERSION",
    "NEXT_PUBLIC_RELEASE_VERSION",
    "1.0.0",
  ).replace(/^v/, "");

  return {
    name: readEnv("SITE_NAME", "NEXT_PUBLIC_SITE_NAME", "R-TVUI"),
    tagline: readEnv(
      "SITE_TAGLINE",
      "NEXT_PUBLIC_SITE_TAGLINE",
      "A fast, keyboard-driven terminal file explorer.",
    ),
    description: readEnv(
      "SITE_DESCRIPTION",
      "NEXT_PUBLIC_SITE_DESCRIPTION",
      "R-TVUI is a Rust terminal UI file manager with Finder-style browsing, live previews, themes, and system default app integration.",
    ),
    repoUrl,
    releasesUrl,
    issuesUrl: `${repoUrl}/issues`,
    defaultBranch,
    siteUrl: readEnv(
      "SITE_URL",
      "NEXT_PUBLIC_SITE_URL",
      "http://localhost:3000",
    ),
    releaseVersion,
  };
});
