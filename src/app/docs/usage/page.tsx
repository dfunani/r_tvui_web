import { DocPage } from "@/components/doc-page";

export const metadata = { title: "Using R-TVUI" };

export default function UsagePage() {
  return (
    <DocPage
      title="Using R-TVUI"
      description="Keyboard reference, Finder-style panes, and opening files."
    >
      <h2>Finder-style layout</h2>
      <ul>
        <li>
          Highlight a <strong>folder</strong> → right pane lists its contents (no{" "}
          <code className="font-mono">..</code> entry in the side list)
        </li>
        <li>
          Highlight <strong>..</strong> → right pane hides; browser uses full width
        </li>
        <li>
          Highlight a <strong>file</strong> → right pane shows in-terminal preview
          when possible, or file info with an Enter hint for binaries
        </li>
      </ul>

      <h2>Keybindings</h2>
      <table>
        <thead>
          <tr>
            <th>Key</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code className="font-mono">j</code> / <code className="font-mono">k</code>
            </td>
            <td>Move selection down / up</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">l</code>
            </td>
            <td>Open folder (navigate into directory)</td>
          </tr>
          <tr>
            <td>Enter</td>
            <td>Open folder, or open file with system default app</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">h</code>
            </td>
            <td>Parent directory</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">G</code>
            </td>
            <td>Jump to home directory</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">.</code>
            </td>
            <td>Toggle hidden files</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">r</code>
            </td>
            <td>Refresh listing</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">t</code>
            </td>
            <td>Cycle theme (saved to config)</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">q</code>
            </td>
            <td>Quit</td>
          </tr>
        </tbody>
      </table>

      <h2>Opening files</h2>
      <p>
        Text-like files are previewed in the terminal when you select them.
        Press <strong>Enter</strong> on any file to launch it with your OS default
        application (<code className="font-mono">open</code> on macOS,{" "}
        <code className="font-mono">xdg-open</code> on Linux).
      </p>
    </DocPage>
  );
}
