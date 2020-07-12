import React from 'react';

import { render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';

import RestaurantsPage from './RestaurantsPage';

jest.mock('react-redux');
describe('RestaurantsPage', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    // 이전에 갖고 있던 dispatch를 초기화 해야 한다.
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
    useSelector.mockImplementation((selector) => selector(({
      regions: [
        { id: 1, name: '서울' },
      ],
      categories: [
        { id: 1, name: '한식' },
      ],
      restaurants: [
        { id: 1, name: '마법사주방' },
      ],
      selectedRegion: null,
    })));
  });

  it('renders region and category select buttons', () => {
    const { queryByText } = render((
      <RestaurantsPage />
    ));

    expect(dispatch).toBeCalled();
    expect(queryByText('서울')).not.toBeNull();
    expect(queryByText('한식')).not.toBeNull();
  });

  it('renders links of restaurants', () => {
    const { container } = render((
      <RestaurantsPage />
    ));

    expect(container.innerHTML).toContain('<a href="');
  });
});
