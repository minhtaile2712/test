import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function useTheme() {
  return useContext(ThemeContext);
}

export { useTheme as default };
