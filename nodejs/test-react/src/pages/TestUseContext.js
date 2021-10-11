import { createContext, useContext, useState } from "react";
import { randomHsl } from "../utils/randomColor";

const initialState = {
  isAuth: false,
  username: "",
};

const AuthContext = createContext(initialState);

export function AuthProvider({ children }) {
  return (
    <AuthContext.Provider value={initialState}>{children}</AuthContext.Provider>
  );
}

export function AuthApp() {
  const [usernameInput, setUsernameInput] = useState("");
  const authState = useContext(AuthContext);
  return (
    <div>
      <div>{authState.username}</div>

      {authState.isAuth ? (
        <div>
          <button>Logout</button>{" "}
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
          />
          <button>Login</button>
        </div>
      )}
    </div>
  );
}

export default function TestUseContext() {
  return (
    <div style={{ backgroundColor: randomHsl() }}>
      <AuthProvider>
        <AuthApp />
      </AuthProvider>
    </div>
  );
}
