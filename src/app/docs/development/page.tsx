import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";

export const metadata = { title: "Development" };

export default function DevelopmentPage() {
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
      <CodeBlock>{`git clone https://github.com/dfunani/r_tvui.git
cd r_tvui
cargo run --release`}</CodeBlock>

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
        Open <a href="http://localhost:3000">http://localhost:3000</a>.
      </p>
    </DocPage>
  );
}
