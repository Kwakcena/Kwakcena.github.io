import React from 'react';

import MenuItems from './MenuItems';

// 리덕스를 몰라도 되며, 화면에 보여주는 것만 신경쓰면 된다.
export default function RestaurantDetail({ restaurant }) {
  const { name, address, menuItems } = restaurant;

  return (
    <div>
      <h2>{name}</h2>
      <p>{`주소: ${address}`}</p>
      <h3>메뉴</h3>
      <MenuItems menuItems={menuItems} />
    </div>
  );
}
