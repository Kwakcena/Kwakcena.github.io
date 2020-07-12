import React from 'react';

// 리덕스를 몰라도 되며, 화면에 보여주는 것만 신경쓰면 된다.
export default function RestaurantDetail({ restaurant }) {
  return (
    <div>
      <p>{restaurant.name}</p>
      <p>{restaurant.address}</p>
    </div>
  );
}
