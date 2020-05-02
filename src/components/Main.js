import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './content/Home';
import AboutPage from './content/AboutPage';
import ContactPage from './content/ContactPage';

const Main = () => (
  <Switch>
    <Route path='/' exact component={Home} />

    <Route path='/about' component={AboutPage} />

    <Route path='/contact' component={ContactPage} />
  </Switch>
);

export default Main;
