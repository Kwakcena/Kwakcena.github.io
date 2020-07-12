import React from 'react';

import { useParams } from 'react-router-dom';

import RestaurantContainer from './RestaurantContainer';

// 라우터에 대해서만 알고 있으면 된다.
export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  return (
    <RestaurantContainer restaurantId={id} />
  );
}
