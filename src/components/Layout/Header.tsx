import { ThemeToggle } from "../UI/ThemeToggle";
import { HeaderProps } from "../../types";

export function Header({ isDark, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 text-gray-900 dark:text-white p-2 shadow-sm shadow-blue-100 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div></div>

          <div className="flex items-center justify-center gap-3">
            <h1 className="text-2xl text-center font-bold">
              Markdown Previewer
            </h1>
          </div>

          <ThemeToggle
            isDark={isDark}
            onToggle={onToggleTheme}
            aria-label="Toggle theme"
          />
        </div>
      </div>
    </header>
  );
}
