import { createContext } from "react";

const theme = {
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
    },
  },
};

const ThemeContext = createContext({
  theme,
});

export { theme };
export default ThemeContext;
