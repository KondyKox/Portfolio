import { Sun, Moon } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-9 h-9 flex items-center justify-center rounded-full border-2 border-border text-text-secondary hover:border-border-strong hover:text-text-accent transition-colors duration-150 active:scale-90"
    >
      {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default ThemeToggle;
