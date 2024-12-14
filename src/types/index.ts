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
