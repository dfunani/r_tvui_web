import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";
import { getSiteConfig } from "@/lib/site-config";
import { installSnippets } from "@/lib/site";

export const metadata = { title: "Development" };

export default async function DevelopmentPage() {
  const site = getSiteConfig();
  const snippets = installSnippets(site);

  return (
    <DocPage
      title="Development"
      description="Clone, build, test, and run the app locally."
    >
      <h2>Prerequisites</h2>
      <ul>
        <li>Rust stable (2024 edition)</li>
        <li>A terminal with true-color support for theme development</li>
      </ul>

      <h2>Clone & run</h2>
      <CodeBlock>{snippets.fromSource}</CodeBlock>

      <h2>Tests</h2>
      <CodeBlock>{`cargo test --workspace`}</CodeBlock>

      <h2>Project conventions (src/)</h2>
      <ul>
        <li>
          <strong>models/</strong> — <code className="font-mono">App</code> and state enums
        </li>
        <li>
          <strong>events/</strong> — <code className="font-mono">impl App</code> for run loop and keys
        </li>
        <li>
          <strong>ui/</strong> — ratatui widgets; <code className="font-mono">theme.rs</code> palettes
        </li>
        <li>
          <strong>utils/</strong> — navigation, previewer, browser side pane, config
        </li>
      </ul>

      <h2>Related website</h2>
      <p>
        This Next.js site (<code className="font-mono">r_tvui_web</code>) is the public
        knowledge base. Run it with:
      </p>
      <CodeBlock>{`cd r_tvui_web
npm install
npm run dev`}</CodeBlock>
      <p>
        Open <a href={site.siteUrl}>{site.siteUrl}</a> (set{" "}
        <code className="font-mono">SITE_URL</code> in Vercel).
      </p>
    </DocPage>
  );
}
