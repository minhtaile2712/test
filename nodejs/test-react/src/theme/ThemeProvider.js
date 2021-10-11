import ThemeContext, { theme } from "./ThemeContext";

function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider as default };
