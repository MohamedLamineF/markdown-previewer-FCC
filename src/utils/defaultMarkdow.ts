export const defaultMarkdown = `
# Markdown Previewer

## Welcome to Markdown Previewer project

### A modern, feature-rich Markdown previewer built with React, TypeScript, and Tailwind CSS. Transform your markdown into beautiful HTML with real-time preview.

### This project was created as part of FreeCodeCamp's **Front End Development Libraries** certification. For more details, check out the [project-description.md](project-description.md) file.

---

## Features

- ✨ Real-time Markdown preview
- 🌓 Dark/Light mode with system preference detection
- 📋 Copy functionality for both Markdown and HTML output
- 💅 Beautiful, responsive design with smooth transitions
- 🎨 Syntax highlighting for code blocks
- 📱 Mobile-friendly interface
- 🚀 GitHub Flavored Markdown support
- 💾 Persistent theme preference

## Technologies Used

- React v17 (as per FreeCodeCamp requirements)
- TypeScript
- Tailwind CSS
- Marked (for Markdown parsing)
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   \`\`\`bash
   git clone git@github.com:MohamedLamineF/markdown-previewer-FCC.git
   cd markdown-previewer-FCC
   \`\`\`

2. Install dependencies:

   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`
   or
   \`\`\`bash
   vite
   \`\`\`

The application will be available at \`https://md-preview-x.netlify.app\`

## Project Structure

\`\`\`
src/
├── components/
│ ├── Editor.tsx
│ ├── Layout/
│ │ └── Header.tsx
│ ├── Preview.tsx
│ └── UI/
│ ├── CopyButton.tsx
│ └── ThemeToggle.tsx
├── hooks/
│ ├── useCopy.ts
│ ├── useDarkMode.ts
│ └── useMarkdown.ts
├── types/
│ └── index.ts
├── utils/
│ ├── defaultMarkdown.ts
│ └── stripHtml.ts
└── App.tsx
\`\`\`


## Contributing

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.






the rest of file is just example of markdown text:
Here's some code, \`<div>Hello World!</div>\`, between two backticks.

\`\`\`javascript
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === '\`\`\`' && lastLine === '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

| Wild Header    | Crazy Header   | Another Header? |
| -------------- | -------------- | --------------- |
| Your content can | be here, and it | can be here.... |
| And here.      | Okay.          | I think we get it. |

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;
