import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from '@apollo/react-hooks';

import 'sanitize.css/sanitize.css';

import { apolloClient } from './apollo';
import App from './containers/App';

// Create redux store with history
const MOUNT_NODE = document.getElementById('app') as HTMLElement;

const render = (Component = App): void => {
  ReactDOM.render(
    <ApolloProvider client={apolloClient}>
      <Component />
    </ApolloProvider>,
    MOUNT_NODE,
  );
};

if (module.hot) {
  module.hot.accept(['./containers/App'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    // eslint-disable-next-line global-require
    const AppHot = require('./containers/App').default; // https://github.com/webpack/webpack-dev-server/issues/100
    render(AppHot);
  });
}

render();
