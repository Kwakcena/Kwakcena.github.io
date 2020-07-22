import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';

import LoginPage from './LoginPage';

jest.mock('react-redux');

describe('LoginPage', () => {
  beforeEach(() => {
    useSelector.mockImplementation((selector) => selector({
      loginFields: {
        email: 'test@test',
        password: '1234',
      },
    }));
  });

  it('renders Log-In title', () => {
    const { container } = render((
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    ));

    expect(container).toHaveTextContent('Log In');
  });

  it('renders input controls', () => {
    const { getByLabelText } = render((
      <MemoryRouter>
        <LoginPage />
      </MemoryRouter>
    ));

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  });
});
