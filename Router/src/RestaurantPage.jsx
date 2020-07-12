import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurant } from './actions';

import { get } from './utils';

// 리덕스를 몰라도 되며, 화면에 보여주는 것만 신경쓰면 된다.
function RestaurantDetail({ restaurant }) {
  return (
    <div>
      {`레스토랑 ${restaurant.id}`}
    </div>
  );
}

// 리덕스를 알고 있으며 화면에 보여지는 부분은 몰라도 된다.
function RestaurantContainer({ restaurantId }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId }));
  }, []);

  const restaurant = useSelector(get('restaurant'));

  return (
    <RestaurantDetail restaurant={restaurant} />
  );
}

// 라우터에 대해서만 알고 있으면 된다.
export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <RestaurantContainer restaurantId={id} />
  );
}
