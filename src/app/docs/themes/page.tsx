import { CodeBlock } from "@/components/code-block";
import { DocPage } from "@/components/doc-page";

export const metadata = { title: "Themes & config" };

const themes = [
  { id: "gotyme", name: "GoTyme", note: "Default — navy, periwinkle, mint (FAAS palette)" },
  { id: "midnight", name: "Midnight", note: "GitHub-inspired dark" },
  { id: "forest", name: "Forest", note: "Green terminal aesthetic" },
  { id: "solar", name: "Solar", note: "Warm amber on brown" },
  { id: "mono", name: "Mono", note: "High-contrast grayscale" },
];

export default function ThemesPage() {
  return (
    <DocPage
      title="Themes & config"
      description="Five built-in themes, persisted across sessions."
    >
      <p>
        Press <code className="font-mono">t</code> in the app to cycle themes. Your
        choice is saved immediately and again when you quit.
      </p>

      <h2>Available themes</h2>
      <table>
        <thead>
          <tr>
            <th>Config value</th>
            <th>Name</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {themes.map((t) => (
            <tr key={t.id}>
              <td>
                <code className="font-mono">{t.id}</code>
              </td>
              <td>{t.name}</td>
              <td>{t.note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Config file</h2>
      <p>
        Path: <code className="font-mono">~/.config/rtvui/config.toml</code>
      </p>
      <CodeBlock title="config.toml">{`theme = "forest"`}</CodeBlock>
      <p>
        Override location with{" "}
        <code className="font-mono">RTVUI_CONFIG=/path/to/config.toml</code>.
      </p>
    </DocPage>
  );
}
