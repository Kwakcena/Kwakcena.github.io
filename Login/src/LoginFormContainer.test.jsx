import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import LoginFormContainer from './LoginFormContainer';
import { useDispatch } from 'react-redux';

jest.mock('react-redux');
describe('LoginFormContainer', () => {
  const dispatch = jest.fn();
  beforeEach(() => {
    dispatch.mockClear();
    useDispatch.mockImplementation(() => dispatch);
  })
  
  it('renders input controls', () => {
    const { getByLabelText } = render((
      <LoginFormContainer />
    ))

    expect(getByLabelText('E-mail')).not.toBeNull();
    expect(getByLabelText('Password')).not.toBeNull();
  })

  it('renders "Log In" buttons', () => {
    const { getByText } = render((
      <LoginFormContainer />
    ))

    fireEvent.click(getByText('Log In'));

    expect(dispatch).toBeCalled();
  })
})