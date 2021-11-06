import { useMemo } from "react";
import { randomHsl } from "../utils/randomColor";

export default function Home() {
  return useMemo(
    () => (
      <div
        style={{ backgroundColor: randomHsl(), flexGrow: 1, overflow: "auto" }}
      >
        {[...Array(20)].map((e, i) => (
          <h2
            style={{
              width: 1200,
              backgroundColor: "red",
              border: "1px solid black",
            }}
          >
            Home
          </h2>
        ))}
      </div>
    ),
    []
  );
}
