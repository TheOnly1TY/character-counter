import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type ThemeContextType = {
  theme: "light" | "dark";
  handleThemeSwitch: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  handleThemeSwitch: () => {},
});

function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const storedTheme = localStorage.getItem("Theme");
    return storedTheme === "dark" ? "dark" : "light";
  });

  const handleThemeSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("Theme", newTheme);
  };

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ handleThemeSwitch, theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function UseTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("ThemeContext must be used within the ThemeProvider");
  }

  return context;
}

export { ThemeProvider, UseTheme };
