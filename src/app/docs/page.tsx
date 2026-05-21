import Link from "next/link";
import { DocPage } from "@/components/doc-page";
import { DOCS_NAV } from "@/lib/docs-nav";

export const metadata = {
  title: "Documentation",
};

export default function DocsIndexPage() {
  return (
    <DocPage
      title="Documentation"
      description="Guides for users, developers, and contributors — the R-TVUI knowledge base."
    >
      <p>
        One place to learn what the tool does, how to download it from GitHub
        Releases, and how to work on the codebase.
      </p>

      <div className="mt-8 space-y-10">
        {DOCS_NAV.map((section) => (
          <section key={section.title}>
            <h2>{section.title}</h2>
            <ul className="mt-3 space-y-3">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-medium text-[var(--gt-accent)] hover:underline"
                  >
                    {item.title}
                  </Link>
                  {item.description ? (
                    <span className="block text-sm text-[var(--gt-muted)]">
                      {item.description}
                    </span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </DocPage>
  );
}
