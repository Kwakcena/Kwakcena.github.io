import React from 'react';

export default function Input({ value, onChange, onClick }) {
  // JSX는 javascript 이기 때문에 label의 속성인 for를 for문과 햇갈려 한다.
  // 따라서 htmlFor 라고 적어줘야 한다.
  return (
    <p>
      <label htmlFor="input-task-title">
        할 일
      </label>
      <input
        id="input-task-title"
        type="text"
        placeholder="할 일을 입력해 주세요"
        value={value}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        추가
      </button>
    </p>
  );
}
