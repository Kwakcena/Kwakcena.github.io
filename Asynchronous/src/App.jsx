import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import CategoriesContainer from './CategoriesContainer';
import RestaurantsContainer from './RestaurantsContainer';
import RestaurantCreateContainer from './RestaurantCreateContainer';

import {
  setRestaurants,
  loadCategories,
} from './actions';

function loadRestaurants({ dispatch }) {
  const restaurants = [];
  // TODO: load restaurants from API server.
  // 1. API server 확보
  // 2. fetch
  dispatch(setRestaurants(restaurants));
}

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // 원래는 액션을 넣어주면 기존상태에서 새로운 상태를 만들어 주는데,
    // loadCategories라는 액션을 통해 dispatch가 비동기 액션에
    // 대한 처리를 하고 상태를 업데이트 하도록 한다.
    // 이를 위해 redux thunk를 사용한다.
    dispatch(loadCategories());
    loadRestaurants({ dispatch });
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <CategoriesContainer />
      <RestaurantsContainer />
      <RestaurantCreateContainer />
    </div>
  );
}
