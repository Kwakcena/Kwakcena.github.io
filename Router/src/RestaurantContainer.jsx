import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurant } from './actions';

import { get } from './utils';

import RestaurantDetail from './RestaurantDetail';

// 리덕스를 알고 있으며 화면에 보여지는 부분은 몰라도 된다.
export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  if (!restaurant) {
    return (
      <p>Loading...</p>
    );
  }

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
