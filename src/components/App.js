import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="main">
          {this.props.routes}
        </div>
      </div>
    );
  }
}

// figure out how to use PropTypes.shapes
App.propTypes = {
  routes: PropTypes.object.isRequired,
};

export default App;
