import { useMemo } from "react";

import {
  Route,
  Link,
  // Switch,
  // useHistory,
  // useLocation,
  // useParams,
  useRouteMatch,
} from "react-router-dom";

import { randomHsl } from "../utils/randomColor";

function SubThing({ i }) {
  return <div style={{ backgroundColor: randomHsl() }}>SubThing {i}</div>;
}

function Thing({ i, n }) {
  let match = useRouteMatch();
  console.log(match);

  return useMemo(
    () => (
      <div style={{ backgroundColor: randomHsl() }}>
        <div>Thing {i} (using useRouteMatch)</div>

        <div>
          <div>
            <ul>
              {[...Array(n)].map((e, i) => (
                <li key={i}>
                  <Link to={`${match.url}/${i}`}>Subthing {i}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {[...Array(n)].map((e, i) => (
              <Route path={`${match.path}/${i}`} key={i}>
                <SubThing i={i} />
              </Route>
            ))}
          </div>
        </div>
      </div>
    ),
    [match.path, match.url, i, n]
  );
}

function TestRouter() {
  let match = useRouteMatch();

  return useMemo(
    () => (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          flexGrow: 1,
          backgroundColor: randomHsl(),
        }}
      >
        <div>TestRouter (using useRouteMatch)</div>

        <div>
          <div>
            <ul>
              {[...Array(3)].map((e, i) => (
                <li key={i}>
                  <Link to={`${match.url}/${i}`}>Thing {i}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            {[...Array(3)].map((e, i) => (
              <Route path={`${match.path}/${i}`} key={i}>
                <Thing i={i} n={2} />
              </Route>
            ))}
          </div>
        </div>
      </div>
    ),
    [match.path, match.url]
  );
}

export default TestRouter;
