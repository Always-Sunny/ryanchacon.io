import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
// <Header />


class App extends React.Component {
  render() {
    return (
      <div className="App">
        
        <div className="Main">
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
