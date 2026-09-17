import { useState } from "react";
import { marked } from "marked";

const defaultMarkdownText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...

### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
function anotherExample(firstLine, lastLine) {
  
}
\`\`\`

You can also make text **bold**... whoa! Or *italic*. Or... wait for it... ***both!***

There's also [links](https://www.freecodecamp.org/), and

> Block Quotes!

And tables:

| Header 1 | Header 2 | Header 3 |
| -------- | -------- | -------- |
| Row 1    | Content  | Content  |
| Row 2    | Content  | Content  |

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.

1. And there are numbered lists too.
2. Use just 1s if you want!
3. And last but not least, let's not forget embedded images.
`;

function App() {
  const [editorText, setEditorText] = useState(defaultMarkdownText);
  const [expanded, setExpanded] = useState(null);

  const html = marked.parse(editorText);

  return (
    <div className="container">
      <h1>Markdown Previewer</h1>

      <div className="panel-container">
        {/* editor section */}
        {expanded !== "preview" && (
          <section
            className={`panel ${expanded === "editor" ? "expanded" : ""}`}
          >
            <div className="panel-header">
              <span>Editor</span>

              <button
                onClick={() =>
                  setExpanded(expanded === "editor" ? null : "editor")
                }
              >
                ⛶
              </button>
            </div>

            <textarea
              id="editor"
              value={editorText}
              onChange={(e) => setEditorText(e.target.value)}
            />
          </section>
        )}

        {/* preview section */}
        {expanded !== "editor" && (
          <section
            className={`panel ${expanded === "preview" ? "expanded" : ""}`}
          >
            <div className="panel-header">
              <span>Previewer</span>

              <button
                onClick={() =>
                  setExpanded(expanded === "preview" ? null : "preview")
                }
              >
                ⛶
              </button>
            </div>

            <div id="preview" dangerouslySetInnerHTML={{ __html: html }} />
          </section>
        )}
      </div>
    </div>
  );
}

export default App;
