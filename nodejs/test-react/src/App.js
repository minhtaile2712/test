import { BrowserRouter as Router } from "react-router-dom";

import styles from "./App.module.css";
import MainView from "./components/MainView";

function App() {
  return (
    <div className={styles.root}>
      <Router>
        <MainView />
      </Router>

      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default App;
