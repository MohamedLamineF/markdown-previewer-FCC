export interface Theme {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
}
export interface HeaderProps {
  isDark: boolean;
  onToggleTheme: () => void;
}

export interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export interface EditorProps {
  value: string;
  onChange: (value: string) => void;
}

export interface MarkdownContent {
  markdown: string;
  html: string | Promise<string>;
  plainText: string;
}

export interface PreviewProps {
  markdown: string;
}
