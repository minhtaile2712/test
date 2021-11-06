import React, { lazy, Suspense } from "react";
import { Link, Switch, Route } from "react-router-dom";

import styles from "./MainView.module.css";
import View from "../lib-tai/View";

import Home from "../pages/Home";
const TestUseReducer = lazy(() => import("../pages/TestUseReducer"));
const TestUseContext = lazy(() => import("../pages/TestUseContext"));
const TestTheme = lazy(() => import("../pages/TestTheme"));
const TestRouter = lazy(() => import("../pages/TestRouter"));
const TestReactQuery = lazy(() => import("../pages/TestReactQuery"));

const pages = [
  { name: "Home", Page: Home },
  { name: "TestUseReducer", Page: TestUseReducer },
  { name: "TestUseContext", Page: TestUseContext },
  { name: "TestTheme", Page: TestTheme },
  { name: "TestRouter", Page: TestRouter },
  { name: "TestReactQuery", Page: TestReactQuery },
];

function MainView() {
  console.log("MainView rerender");
  const header = <div>Test React</div>;

  const nav = (
    <div className={styles.nav}>
      <div>top button</div>
      <div className={styles["nav-group"]}>
        {/* {[...Array(40)].map((e, i) => (
          <Link to={`/${e}`}>Link number {e}</Link>
        ))} */}

        {pages.map(({ name }, index) => (
          <Link to={`/${name}`}>{name}</Link>
        ))}
      </div>

      <div>bottom button</div>
    </div>
  );

  const main = (
    <Suspense fallback={<div>Loadding...</div>}>
      <Switch>
        {pages.map(({ name, Page }, index) => (
          <Route path={`/${name}`} key={index}>
            <Page />
          </Route>
        ))}
      </Switch>
    </Suspense>
  );

  return <View header={header} nav={nav} main={main} />;
}

export default MainView;
