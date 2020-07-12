import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import AboutPage from './AboutPage';

export default function App() {
  return (
    <div>
      <h1>
        <Link to="/">헤더 영역</Link>
      </h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:id" component={RestaurantPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
