import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

import restaurants from '../fixtures/restaurants';

import {
  setRestaurants,
} from './actions';

export default function App() {
  const dispatch = useDispatch();
  // TODO: 초기 실행
  // restaurants에 데이터 넣기 => dispatch

  useEffect(() => {
    // 컴포넌트가 만들어 질 때 내부의 함수를 실행
    dispatch(setRestaurants(restaurants));
  }, []);

  return (
    <div>
      <h1>Restaurants</h1>
      <RestaurantsContainer />
    </div>
  );
}
