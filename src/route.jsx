import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import WangEditorExample from './wang-editor/Example';
import ReactQuillExample from './react-quill/Example';
import BraftEditorExample from './braft-editor/Example';
import PlainTextExample from './slate/PlainTextExample';
import RichTextExample from './slate/RichTextExample';

const routers = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
  },
  {
    path: '/wangeditor',
    exact: true,
    name: 'wangeditor',
    component: WangEditorExample,
  },
  {
    path: '/react-quill',
    exact: true,
    name: 'react-quill',
    component: ReactQuillExample,
  },
  {
    path: '/braft-editor',
    exact: true,
    name: 'braft-editor',
    component: BraftEditorExample,
  },
  {
    path: '/slate',
    exact: true,
    name: 'slate',
  },
  {
    path: '/slate/plain-text',
    exact: true,
    name: 'plain-text',
    component: PlainTextExample,
  },
  {
    path: '/slate/rich-text',
    exact: true,
    name: 'rich-text',
    component: RichTextExample,
  },
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
              {router.component && <router.component />}
            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}
