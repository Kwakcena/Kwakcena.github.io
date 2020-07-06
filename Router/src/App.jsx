import React from 'react';

import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import AboutPage from './AboutPage';

export default function App() {
  // const { location: { pathname } } = window;

  // const MyComponent = {
  //   '/': HomePage,
  //   '/about': AboutPage,
  //   '/restaurants': RestaurantsPage,
  // }[pathname] || NotFoundPage;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}
