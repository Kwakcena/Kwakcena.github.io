import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Page from './Page';

test('Page', () => {
  const tasks = [
    { id: 1, title: 'Task-1' },
    { id: 2, title: 'Task-2' },
  ];

  const handleChangeTitle = jest.fn();
  const handleClickAddTask = jest.fn();
  const handleClickDeleteTask = jest.fn();

  const { getByText } = render((
    // Page 컴포넌트를 사용하는 방법을 서술한다.
    <Page
      taskTitle=""
      onChangeTitle={handleChangeTitle}
      onClickAddTask={handleClickAddTask}
      tasks={tasks}
      onClickDeleteTask={handleClickDeleteTask}
    />
  ));

  expect(getByText(/Task-1/)).not.toBeNull();
  expect(getByText(/Task-2/)).not.toBeNull();

  // 상태 관리는 Page 컴포넌트가 관리하지 않기 때문에 taskTitle을 추가하면
  // 테스트 에러가 난다.

  fireEvent.click(getByText('추가'));
  expect(handleClickAddTask).toBeCalled();
});
