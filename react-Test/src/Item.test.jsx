import React from 'react';

import { render } from '@testing-library/react';

import Item from './Item';

test('Item', () => {
  const task = {
    id: 1,
    title: '뭐라도 하기',
  };

  const { container } = render((
    <Item task={task} />
  ));

  expect(container).toHaveTextContent('뭐라도 하기');
  expect(container).toHaveTextContent('완료');
});
