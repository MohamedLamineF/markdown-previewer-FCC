import { EditorProps } from '../types/index';
import { CopyButton } from './UI/copyButton';

export function Editor({ value, onChange }: EditorProps) {
  return (
    <div className="flex flex-col h-full min-h-[300px] transition-transform hover:scale-[1.01] duration-300">
      <div className="bg-white dark:bg-gray-800 text-gray-800 dark:text-white p-4 rounded-t-lg transition-colors duration-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="text-xl font-semibold">Editor</h2>
          </div>
          <CopyButton text={value} />
        </div>
      </div>
      <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
      <textarea
        id="editor"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="flex-1 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-b-lg 
        focus:outline-none resize-none font-mono text-gray-800 dark:text-gray-200 shadow-lg transition-colors duration-500"
        spellCheck={false}
      />
    </div>
  );
}
