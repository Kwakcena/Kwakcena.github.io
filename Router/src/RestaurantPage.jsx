import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchRestaurant } from './services/__mocks__/api';

async function loadRestaurant({ restaurantId }) {
  const restaurant = await fetchRestaurant({ restaurantId });
  return restaurant;
}

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();

  useEffect(() => {
    loadRestaurant({ restaurantId: id });
  }, []);

  return (
    <div>
      {`레스토랑 ${id}`}
    </div>
  );
}
