import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/client';

import 'sanitize.css/sanitize.css';

import { apolloClient } from './apollo';
import App from './containers/App';

const MOUNT_NODE = document.getElementById('app') as HTMLElement;

const render = (Component = App): void => {
  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <Component />
    </ApolloProvider>,
    MOUNT_NODE,
  );
};

// if (module.hot) {
//   module.hot.accept(['./containers/App'], () => {
//     ReactDOM.unmountComponentAtNode(MOUNT_NODE);
//     // eslint-disable-next-line global-require, @typescript-eslint/no-unsafe-assignment
//     const AppHot = require('./containers/App').default; // https://github.com/webpack/webpack-dev-server/issues/100
//     render(AppHot);
//   });
// }

if (module.hot) {
  module.hot.accept();
}

render();
