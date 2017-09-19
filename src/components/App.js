import React from 'react';
import Header from './Header';

const App = () => (
  <div className="App">
    <Header />
    {this.props.routes}
  </div>
);

export default App;
