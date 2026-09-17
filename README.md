# Markdown Previewer

A React-based Markdown Previewer that allows users to write Markdown in
an editor and see the rendered HTML preview in real time.

## Live Project

**Live URL:**\
[Live Demo](https://codesandbox.io/p/sandbox/fcc-markdown-previewer-2scng5)

## GitHub Repository

**GitHub:**\
[Link](https://github.com/satyam-7777/Markdown-Previewer-FCC)

## Features

- Write Markdown in the editor
- Preview rendered Markdown in real time
- Supports headings
- Supports bold, italic, and bold-italic text
- Supports inline code
- Supports code blocks
- Supports links
- Supports block quotes
- Supports tables
- Supports ordered and unordered lists
- Supports different list indentation levels
- Supports images
- Expand the Editor panel
- Expand the Previewer panel

## Tech Stack

- React
- JavaScript
- CSS
- `marked`

## How It Works

The application stores the Markdown text using React state:

```js
const [editorText, setEditorText] = useState(defaultMarkdownText);
```

Whenever the user types in the editor, the state is updated.

The Markdown text is then converted into HTML using `marked`:

```js
const html = marked.parse(editorText);
```

The generated HTML is displayed inside the preview section.

## Editor and Preview

The application has two main panels:

### Editor

The editor uses a `<textarea>` with the required FreeCodeCamp ID:

```text
#editor
```

The Markdown content can be edited directly.

### Previewer

The rendered Markdown is displayed in a `<div>` with the required ID:

```text
#preview
```

The generated HTML is inserted using React's `dangerouslySetInnerHTML`.

## Panel Expansion

The application uses an `expanded` state to control which panel is
expanded.

```text
null      → Show Editor and Previewer
editor    → Expand Editor
preview   → Expand Previewer
```

Clicking the expand button again returns the layout to the normal state.

## Default Markdown

The application starts with example Markdown demonstrating:

- Headings
- Inline code
- Code blocks
- Bold text
- Italic text
- Links
- Block quotes
- Tables
- Bulleted lists
- Numbered lists

## Installation

Clone the repository:

```bash
git clone <your-github-repository-url>
```

Move into the project directory:

```bash
cd markdown-previewer
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

The application will open at:

```text
http://localhost:3000
```

## Project Structure

```text
src/
├── App.js
└── styles.css
```

## Main Dependency

The project uses [`marked`](https://www.npmjs.com/package/marked) to
convert Markdown text into HTML.

```js
import { marked } from "marked";
```

## Author

**Satyam Patel**

This project was created as part of my FreeCodeCamp Front End
Development Libraries certification.
