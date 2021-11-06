import ThemeProvider from "../theme/ThemeProvider";
import Toolbar from "../components/Toolbar";
import { randomHsl } from "../utils/randomColor";

function TestTheme() {
  return (
    <div style={{ backgroundColor: randomHsl() }}>
      <ThemeProvider>
        <Toolbar />
      </ThemeProvider>
    </div>
  );
}

export { TestTheme as default };
