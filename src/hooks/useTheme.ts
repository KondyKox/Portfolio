import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(
    () =>
      (document.documentElement.getAttribute("data-mode") as Theme) || "light",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-mode", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
