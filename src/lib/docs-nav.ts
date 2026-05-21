export type DocLink = {
  title: string;
  href: string;
  description?: string;
};

export type DocSection = {
  title: string;
  items: DocLink[];
};

export const DOCS_NAV: DocSection[] = [
  {
    title: "For everyone",
    items: [
      {
        title: "Documentation home",
        href: "/docs",
        description: "Map of all guides",
      },
      {
        title: "Getting started",
        href: "/docs/getting-started",
        description: "What R-TVUI is and first run",
      },
    ],
  },
  {
    title: "For users",
    items: [
      {
        title: "Install & download",
        href: "/docs/install",
        description: "Binaries, PATH, requirements",
      },
      {
        title: "Using R-TVUI",
        href: "/docs/usage",
        description: "Keys, Finder layout, opening files",
      },
      {
        title: "Themes & config",
        href: "/docs/themes",
        description: "Five themes and config.toml",
      },
    ],
  },
  {
    title: "For developers",
    items: [
      {
        title: "Architecture",
        href: "/docs/architecture",
        description: "Crates, modules, design goals",
      },
      {
        title: "Development",
        href: "/docs/development",
        description: "Build, test, project layout",
      },
      {
        title: "Distribution",
        href: "/docs/distribution",
        description: "Releases and cross-platform builds",
      },
    ],
  },
  {
    title: "For contributors",
    items: [
      {
        title: "Contributing",
        href: "/docs/contributing",
        description: "How to help and conventions",
      },
    ],
  },
];

export function getDocSectionsFlat(): DocLink[] {
  return DOCS_NAV.flatMap((s) => s.items);
}
