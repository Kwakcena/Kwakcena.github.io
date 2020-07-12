import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { loadRestaurant } from './actions';

export default function RestaurantPage({ params }) {
  const dispatch = useDispatch();
  const { id } = params || useParams();

  useEffect(() => {
    dispatch(loadRestaurant({ restaurantId: id }));
  }, []);

  return (
    <div>
      {`레스토랑 ${id}`}
    </div>
  );
}
