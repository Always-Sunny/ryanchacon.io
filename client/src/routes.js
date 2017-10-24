import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Education from './components/Education';
import Works from './components/Works';
export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/education" component={Education} />
    <Route path="/works" component={Works} />
    <Route path="/blog" component={Home} />

  </Switch>
);
