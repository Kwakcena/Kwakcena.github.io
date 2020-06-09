import React, { useState } from 'react';
import ReactDOM from 'react-dom';


function Counter() {
  // 카운터 컴포넌트 안에서 관리되는 state를 정의, 그 때 사용되는 useState
  const [state, setState] = useState({
    count: 0,
  });

  const { count } = state;

  function handleClick() {
    setState({
      count: count + 1,
    });
  }

  // 상태가 바뀔 때 그려지는 개념
  return (
    <button type="button" onClick={handleClick}>
      Click me!
      (
      { count }
      )
    </button>
  );
}

function Button({ children }) {
  return (
    <button type="button">
      {children}
    </button>
  );
}

function Buttons() {
  return (
    <p>
      {[1, 2, 3].map((i) => (
        <Button key={i}>
          {i}
        </Button>
      ))}
    </p>
  );
}

function App() {
  return (
    <div>
      <p>Hello world!</p>
      <p>Hi!</p>
      <Counter />
      <Buttons />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
