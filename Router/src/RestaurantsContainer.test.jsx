import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import RestaurantsContainer from './RestaurantsContainer';

jest.mock('react-redux');
test('RestaurantsContainer', () => {
  useSelector.mockImplementation((selector) => selector(({
    restaurants: [
      { id: 1, name: '마법사주방' },
    ],
  })));

  const Link = ({ children }) => (<>{children}</>);

  const { container } = render((
    <RestaurantsContainer Link={Link} />
  ));

  expect(container).toHaveTextContent('마법사주방');
});
