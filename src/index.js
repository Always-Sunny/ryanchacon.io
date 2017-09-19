import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import configureStore from './store/configureStore';
import routes from './routes';
import '../styles/main.scss';

const store = configureStore();

ReactDOM.render(
  <AppContainer>
    <Root store={store} routes={routes} />
  </AppContainer>,
  document.getElementById('root'),
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Root', () => {
    // const NextRoot = require('./components/Root').default;
    const NextRoot = Root.default;
    ReactDOM.render(
      <AppContainer>
        <NextRoot store={store} routes={routes} />
      </AppContainer>,
      document.getElementById('root'),
    );
  });
}
