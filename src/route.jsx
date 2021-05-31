import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import WangEditorExample from './wang-editor/Example';
import ReactQuillExample from './react-quill/Example';
import BraftEditorExample from './braft-editor/Example';
import SlateIndex from './slate/Index';
import PlainTextExample from './slate/PlainTextExample';
import RichTextExample from './slate/RichTextExample';

const ROUTERS = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: Home,
  },
  {
    path: '/wangeditor',
    name: 'wangeditor',
    component: WangEditorExample,
  },
  {
    path: '/react-quill',
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
    name: 'slate',
    component: SlateIndex,
    children: [
      {
        path: '/slate/plain-text',
        name: 'plain-text',
        exact: true,
        component: PlainTextExample,
      },
      {
        path: '/slate/rich-text',
        name: 'rich-text',
        exact: true,
        component: RichTextExample,
      },
    ],
  },
];

function renderNav(routers = []) {
  return (
    <ul>
      {routers.map((router) => (
        <li key={router.path}>
          <Link to={router.path}>{router.name}</Link>
          {renderNav(router.children)}
        </li>
      ))}
    </ul>
  );
}

function renderRoute(routers = []) {
  return (
    <Switch>
      {routers.map((router) => (
        <Route path={router.path} exact={router.exact} key={router.path}>
          {router.component && <router.component />}
          {renderRoute(router.children)}
        </Route>
      ))}
    </Switch>
  );
}

export function renderRouters() {
  return (
    <Router>
      {renderNav(ROUTERS)}
      {renderRoute(ROUTERS)}
    </Router>
  );
}
