import React from "react";
import useTheme from "../theme/useTheme";
import { randomHsl } from "../utils/randomColor";

function Toolbar(props) {
  return (
    <div style={{ backgroundColor: randomHsl() }}>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  const theme = useTheme();

  return (
    <div style={{ backgroundColor: randomHsl() }}>
      <button
        style={{
          background: theme.palette.common.black,
          color: theme.palette.common.black,
        }}
      >
        I am styled by theme context!
      </button>
    </div>
  );
}

// const ThemeTogglerButton = () => {
//   console.log("rerender ThemeTogglerButton");

//   const { toggleTheme } = useTheme();
//   return useMemo(() => {
//     return (
//       <div style={{ backgroundColor: randomHsl() }}>
//         <button onClick={toggleTheme}>Toggle theme</button>
//       </div>
//     );
//   }, [toggleTheme]);
// };

// const ThemeTogglerButton = React.memo(({ toggleTheme }) => {
//   console.log("rerender ThemeTogglerButton");

//   return (
//     <div style={{ backgroundColor: randomHsl() }}>
//       <button onClick={toggleTheme}>Toggle theme</button>
//     </div>
//   );
// });

export { Toolbar as default };
