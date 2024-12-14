import { EditorProps } from "../types/index";

export function Preview({ value, onChange }: EditorProps) {
  return (
    <div className="flex flex-col h-full transition-transform hover:scale-[1.01] duration-300">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 rounded-t-lg transition-colors duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Editor</h2>
          </div>
        </div>
      </div>
      <textarea
        id="preview"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none font-mono text-gray-800 dark:text-gray-200 shadow-lg transition-colors duration-200"
        spellCheck={false}
      />
    </div>
  );
}

// import React from "react";
// import { PreviewHeader } from "./PreviewHeader";
// import { useMarkdown } from "../../hooks/useMarkdown";

// interface PreviewProps {
//   markdown: string;
// }

// export function Preview({ markdown }: PreviewProps) {
//   const { html, plainText } = useMarkdown(markdown);

//   return (
//     <div className="flex flex-col h-full transition-transform hover:scale-[1.01] duration-300">
//       <PreviewHeader content={plainText} />
//       <div
//         id="preview"
//         className="flex-1 p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700
//                    rounded-b-lg overflow-auto prose prose-slate dark:prose-invert max-w-none
//                    shadow-lg transition-colors duration-200
//                    prose-headings:text-gray-800 dark:prose-headings:text-gray-100
//                    prose-p:text-gray-600 dark:prose-p:text-gray-300
//                    prose-a:text-blue-600 dark:prose-a:text-blue-400
//                    prose-code:text-pink-600 dark:prose-code:text-pink-400
//                    prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800
//                    prose-blockquote:border-l-4 prose-blockquote:border-blue-500
//                    prose-img:rounded-lg prose-img:shadow-md"
//         dangerouslySetInnerHTML={{ __html: html }}
//       />
//     </div>
//   );
// }
