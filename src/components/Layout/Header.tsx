import { FileText } from "lucide-react";
import { ThemeToggle } from "../UI/ThemeToggle";
import { HeaderProps } from "../../types";

export function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-gray-800 text-gray-800 dark:text-white py-6 shadow-lg transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-blue-500 rounded-lg">
              <FileText size={24} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Markdown Previewer</h1>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Transform your markdown into beautiful HTML
              </p>
            </div>
          </div>
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
        </div>
      </div>
    </header>
  );
}
