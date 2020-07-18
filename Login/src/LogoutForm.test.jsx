import React from 'react';

import { render } from '@testing-library/react';

import LogoutForm from './LogoutForm';

jest.mock('react-redux');

describe('LogoutForm', () => {
  it('renders "Log out" button', () => {
    const handleClick = jest.fn();

    const { container } = render(<LogoutForm onClick={handleClick} />);

    expect(container).toHaveTextContent('Log out');
  });
});
