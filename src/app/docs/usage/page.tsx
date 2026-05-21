import { DocPage } from "@/components/doc-page";

export const metadata = { title: "Using R-TVUI" };

export default function UsagePage() {
  return (
    <DocPage
      title="Using R-TVUI"
      description="Keyboard reference, Finder-style panes, and file operations."
    >
      <h2>Finder-style layout</h2>
      <ul>
        <li>
          Highlight a <strong>folder</strong> → right pane lists its contents
        </li>
        <li>
          Highlight <strong>..</strong> → right pane hides; browser uses full width
        </li>
        <li>
          Highlight a <strong>file</strong> → preview in the side pane (press{" "}
          <code className="font-mono">p</code> to refresh, <code className="font-mono">P</code>{" "}
          to toggle preview-on-move)
        </li>
      </ul>

      <h2>Navigation</h2>
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
            <td>Move selection</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">l</code> / Enter
            </td>
            <td>Open folder; Enter also opens files with the system app</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">h</code>
            </td>
            <td>Parent directory</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">g</code>
            </td>
            <td>Go to path (prompt)</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">G</code>
            </td>
            <td>Home directory</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">u</code> / <code className="font-mono">i</code>
            </td>
            <td>History back / forward</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">1</code>–<code className="font-mono">9</code>
            </td>
            <td>Jump to bookmark</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">b</code>
            </td>
            <td>Bookmark current folder</td>
          </tr>
        </tbody>
      </table>

      <h2>View & filter</h2>
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
              <code className="font-mono">/</code>
            </td>
            <td>Filter listing by name</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">s</code>
            </td>
            <td>Cycle sort (name / size / modified)</td>
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
              <code className="font-mono">?</code>
            </td>
            <td>Help overlay</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">q</code>
            </td>
            <td>Quit</td>
          </tr>
        </tbody>
      </table>

      <h2>Actions</h2>
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
              <code className="font-mono">y</code>
            </td>
            <td>Copy path to clipboard</td>
          </tr>
          <tr>
            <td>F2</td>
            <td>Rename selected entry</td>
          </tr>
          <tr>
            <td>
              <code className="font-mono">d</code>
            </td>
            <td>Delete (confirm; uses trash when enabled in config)</td>
          </tr>
        </tbody>
      </table>

      <h2>Opening files</h2>
      <p>
        Press <strong>Enter</strong> on any file to launch it with your OS default
        application (<code className="font-mono">open</code> on macOS,{" "}
        <code className="font-mono">xdg-open</code> on Linux).
      </p>
    </DocPage>
  );
}
