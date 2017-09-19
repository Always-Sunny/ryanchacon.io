import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import App from './App';

const Root = ({ store, routes }) => (
  <Provider store={store}>
    <BrowserRouter>
      <App routes={routes} />
    </BrowserRouter>
  </Provider>
);


Root.propTypes = {
  store: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.object.isRequired,
  ]).isRequired,
  routes: PropTypes.func.isRequired,
};


export default Root;
