// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import FontFaceObserver from 'fontfaceobserver';
import 'sanitize.css/sanitize.css';

// Import root app
import App from './containers/App';

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

// Create redux store with history
const MOUNT_NODE = document.getElementById('app') as HTMLElement;

const render = (Component = App): void => {
  ReactDOM.render(<Component />, MOUNT_NODE);
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
