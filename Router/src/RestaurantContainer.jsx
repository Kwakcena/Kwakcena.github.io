import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurant } from './actions';

import { get } from './utils';

// 리덕스를 몰라도 되며, 화면에 보여주는 것만 신경쓰면 된다.
function RestaurantDetail({ restaurant }) {
  return (
    <div>
      <p>{restaurant.name}</p>
      <p>{restaurant.address}</p>
    </div>
  );
}

// 리덕스를 알고 있으며 화면에 보여지는 부분은 몰라도 된다.
export default function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}
