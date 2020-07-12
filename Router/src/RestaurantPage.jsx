import React from 'react';
import { useParams } from 'react-router-dom';

export default function RestaurantPage({ params }) {
  const { id } = params || useParams();
  return (
    <div>
      {`레스토랑 ${id}`}
    </div>
  );
}
