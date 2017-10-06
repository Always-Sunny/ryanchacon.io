import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';


export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/sign-up" component={Home} />
    <Route path="/music" component={Home} />
    <Route path="/photos" component={Home} />
    <Route path="/videos" component={Home} />
    <Route path="/articles" component={Home} />

  </Switch>
);
