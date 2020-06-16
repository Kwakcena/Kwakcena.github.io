import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Item from './Item';

// describe - context - it 방법도 있다. 확인해보기.

test('Item', () => {
  const task = {
    id: 1,
    title: '뭐라도 하기',
  };

  // jest가 미리 준비한 함수로 들어간다.
  const handleClick = jest.fn();

  const { container, getByText } = render((
    <Item task={task} onClickDelete={handleClick} />
  ));

  expect(container).toHaveTextContent('뭐라도 하기');
  expect(container).toHaveTextContent('완료');

  expect(handleClick).not.toBeCalled();
  fireEvent.click(getByText('완료'));

  //핸들 클릭이 눌려서 불린다. 어떤 인자를 받아서 실행되는지 알기 위해 With를 쓴다.
  expect(handleClick).toBeCalledWith(1);
});
