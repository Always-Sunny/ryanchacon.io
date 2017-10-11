import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/education" component={Home} />
    <Route path="/works" component={Home} />
    <Route path="/blog" component={Blog} />

  </Switch>
);
