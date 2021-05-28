import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';

const routers = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home
  }
];

export function renderRouters() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {routers.map((router, index) => (
              <li key={index}>
                <Link to={router.path}>{router.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Switch>
          {routers.map((router, index) => (
            <Route path={router.path} exact={router.exact} key={index}>
              <router.component />
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}
